#!/usr/bin/env node

"use strict";

const readAllFiles = require("../utils/readAllFiles");
const listStrings = require("../compiler/listStrings");

const APP_PATH = "./src";

const files = readAllFiles(APP_PATH);

files.map(file => {
  if (path.name.match("^.+\\.(js|jsx|ts|tsx)$")) {
    const strings = listStrings(file);

    if (strings.length > 0) {
      console.log("\x1b[33m", `File ${file}`, "\x1b[0m");
      strings.map(string =>
        console.log("\x1b[31m", `\t${string.value}`, "\x1b[0m")
      );
    }
  }
});
