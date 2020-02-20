'use strict';

const fs = require('fs');

const readAllFiles = path => {
  let files = [];
  let filesResult = [];

  try {
    files = fs.readdirSync(path);
  } catch (e) {
    console.log(`Unknown directory: ${path}`);
  }

  files.forEach(file => {
    if (fs.lstatSync(`${path}/${file}`).isFile()) {
      filesResult.push(`${path}/${file}`);
    } else {
      readAllFiles(`${path}/${file}`).map(item => filesResult.push(item));
    }
  });

  return filesResult;
};

module.exports = readAllFiles;
