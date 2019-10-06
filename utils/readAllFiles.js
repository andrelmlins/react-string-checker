"use strict";

const fs = require("fs");

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
    }
  });

  return filesResult;
};

module.exports = readAllFiles;
