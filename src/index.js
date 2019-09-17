const babel = require('@babel/core');
const compiler = require('./compiler');

const babelConfigs = {
  ast: true,
  presets: ['@babel/preset-react']
};

babel.transformFile('src/dev/Component.js', babelConfigs, function(err, result) {
  const body = result.ast.program.body;
  compiler.run(body);
});
