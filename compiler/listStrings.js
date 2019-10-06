"use strict";

const babel = require("@babel/core");
const readBody = require("../utils/readBody");

const babelConfigs = {
  ast: true,
  presets: ["@babel/preset-react"]
};

const listStrings = file => {
  console.log(file);
  const result = babel.transformFileSync(file, babelConfigs);
  const listElements = readBody(result.ast.program);
  const strings = listElements.filter(item => item.type === "StringLiteral");

  return strings;
};

module.exports = listStrings;
