const babel = require("@babel/core");
const compiler = require("./compiler");

const babelConfigs = {
  ast: true,
  presets: ["@babel/preset-react"]
};

babel.transformFile("src/dev/Component.js", babelConfigs, (err, result) => {
  const body = result.ast.program.body;
  const listElements = readBody(result.ast.program);

  listElements.map(item => {
    if (item.type === "StringLiteral") {
      console.log(item);
    }
  });
});

const readBody = element => {
  console.log(element.type);
  let elements = [];
  if (element.body) {
    if (element.body.length > 0) {
      element.body.map(item => readBody(item).map(item => elements.push(item)));
    } else {
      readBody(element.body).map(item => elements.push(item));
    }
  }

  if (element.argument) {
    element.argument.arguments.map(item =>
      readBody(item).map(item => elements.push(item))
    );
  }
  return elements;
};
