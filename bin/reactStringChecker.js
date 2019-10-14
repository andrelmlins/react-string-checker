#!/usr/bin/env node

"use strict";

const CheckerStrings = require("../index.js");

const args = process.argv.slice(2);
let path = "./src";

if (args.includes("--path") || args.includes("-p")) {
  const position = args.includes("--path")
    ? args.indexOf("--path")
    : args.indexOf("-p");

  if (position + 1 < args.length) {
    path = args[position + 1];
  } else {
    console.log("Path not defined");
    process.exit(1);
  }
}

const checkerStrings = new CheckerStrings(path);

checkerStrings.run();
