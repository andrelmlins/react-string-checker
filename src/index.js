const babel = require("@babel/core");
const compiler = require("./compiler");

const babelConfigs = {
  ast: true,
  presets: ["@babel/preset-react"]
};

const file = "src/dev/Component.js";

babel.transformFile(file, babelConfigs, (err, result) => {
  const body = result.ast.program.body;
  const listElements = readBody(result.ast.program);

  const strings = listElements.filter(item => item.type === "StringLiteral");

  if (strings.length > 0) {
    console.log("\x1b[33m", `File ${file}`, "\x1b[0m");
    strings.map(string =>
      console.log("\x1b[31m", `\t${string.value}`, "\x1b[0m")
    );
  }
});

const readBody = element => {
  let elements = [element];
  if (element.body) {
    if (element.body.length > 0) {
      element.body.map(item => readBody(item).map(item => elements.push(item)));
    } else {
      readBody(element.body).map(item => elements.push(item));
    }
  }

  if (element.argument) {
    element.argument.arguments
      .slice(2)
      .map(item => readBody(item).map(item => elements.push(item)));
  }

  if (element.arguments) {
    element.arguments
      .slice(2)
      .map(item => readBody(item).map(item => elements.push(item)));
  }

  return elements;
};
