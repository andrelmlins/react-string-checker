"use strict";

const babelConfigs = {
  ast: true,
  presets: ["@babel/preset-react"],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/proposal-object-rest-spread"
  ]
};

module.exports = babelConfigs;
