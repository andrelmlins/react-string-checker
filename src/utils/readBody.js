'use strict';

const sensitiveProperties = require('./sensitiveProperties');

const readBody = element => {
  let elements = [];

  if (element) {
    elements = [element];
    if (element.body) {
      if (element.body.length > 0) {
        element.body.map(item =>
          readBody(item).map(item => elements.push(item))
        );
      } else {
        readBody(element.body).map(item => elements.push(item));
      }
    }

    if (element.argument && element.argument.arguments) {
      element.argument.arguments
        .slice(2)
        .map(item => readBody(item).map(item => elements.push(item)));
    }

    if (element.arguments) {
      element.arguments
        .slice(1)
        .map(item => readBody(item).map(item => elements.push(item)));
    }

    if (element.properties) {
      element.properties.map(item => {
        if (sensitiveProperties.includes(item.key.name)) {
          elements.push(item.value);
        }
      });
    }

    if (element.declarations) {
      element.declarations.map(item =>
        readBody(item.init).map(item => elements.push(item))
      );
    }
  }

  return elements;
};

module.exports = readBody;
