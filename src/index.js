'use strict';

const babel = require('@babel/core');
const babelConfig = require('./configs/babelConfig');
const readBody = require('./utils/readBody');
const readAllFiles = require('./utils/readAllFiles');

class CheckerStrings {
  constructor(path) {
    this.path = path;
  }

  run() {
    const files = readAllFiles(this.path);

    files.map(file => {
      if (file.match('^.+\\.(js|jsx|ts|tsx)$')) {
        const strings = this.listFileString(file);

        if (strings.length > 0) {
          console.log('\x1b[33m', `File ${file}`, '\x1b[0m');
          strings.map(string =>
            console.log('\x1b[31m', `\tString: "${string.value}"`, '\x1b[0m')
          );

          if (
            process.env.CI &&
            (process.env.CI !== 'string' ||
              process.env.CI.toLowerCase() !== 'false')
          ) {
            process.exit(1);
          }
        }
      }
    });
  }

  listFileString(file) {
    const result = babel.transformFileSync(file, babelConfig);
    const listElements = readBody(result.ast.program);
    const strings = listElements.filter(item => item.type === 'StringLiteral');

    return strings;
  }

  listAllStrings() {
    const files = readAllFiles(this.path);
    const list = [];

    files.map(file => {
      if (file.match('^.+\\.(js|jsx|ts|tsx)$')) {
        const strings = this.listFileString(file);

        if (strings.length > 0) {
          list.push({ file, strings });
        }
      }
    });

    return list;
  }
}

module.exports = CheckerStrings;
