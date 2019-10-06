"use strict";

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

module.exports = readBody;
