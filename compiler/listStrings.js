"use strict";

const babel = require("@babel/core");
const readBody = require("../utils/readBody");

const babelConfigs = {
  ast: true,
  presets: ["@babel/preset-react"],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/proposal-object-rest-spread"
  ]
};

const listStrings = file => {
  try {
    const result = babel.transformFileSync(file, babelConfigs);

    const listElements = readBody(result.ast.program);
    const strings = listElements.filter(item => item.type === "StringLiteral");

    return strings;
  } catch (e) {
    console.log(e);
    return [];
  }
};

module.exports = listStrings;
