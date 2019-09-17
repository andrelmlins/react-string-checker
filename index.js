const babel = require('@babel/core');

const code =
  'import React from "react"; import Typography from "@material-ui/core/Typography"; export const AboutScreen = () => ( <Typography variant="h2" color="inherit"> About us </Typography> ); export default AboutScreen;';

const babelConfigs = {
  ast: true,
  presets: ['@babel/preset-react']
};

console.log(babel.parse(code, babelConfigs));

babel.transform(code, babelConfigs, function(err, result) {
  const body = result.ast.program.body;
  for (let i = 0; i < body.length; i++) {
    console.log(body[i]);
  }
});
