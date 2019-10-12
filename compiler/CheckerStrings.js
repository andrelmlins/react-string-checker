"use strict";

const babel = require("@babel/core");
const readBody = require("../utils/readBody");
const babelConfig = require("../configs/babelConfig");
const readAllFiles = require("./utils/readAllFiles");

class CheckerStrings {
  constructor(path) {
    this.path = path;
  }

  run() {
    const files = readAllFiles(path);

    files.map(file => {
      if (file.match("^.+\\.(js|jsx|ts|tsx)$")) {
        const strings = _listStrings(file);

        if (strings.length > 0) {
          console.log("\x1b[33m", `File ${file}`, "\x1b[0m");
          strings.map(string =>
            console.log("\x1b[31m", `\tString: "${string.value}"`, "\x1b[0m")
          );
        }
      }
    });
  }

  _listStrings(file) {
    const result = babel.transformFileSync(file, babelConfig);
    const listElements = readBody(result.ast.program);
    const strings = listElements.filter(item => item.type === "StringLiteral");

    return strings;
  }

  listAllStrings() {
    const files = readAllFiles(path);
    const list = [];

    files.map(file => {
      if (file.match("^.+\\.(js|jsx|ts|tsx)$")) {
        const strings = _listStrings(file);

        if (strings.length > 0) {
          list.push({ file, strings });
        }
      }
    });

    return list;
  }
}

module.exports = CheckerStrings;
