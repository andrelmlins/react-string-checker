# React String Checker

[![npm version](https://badge.fury.io/js/react-string-checker.svg)](https://badge.fury.io/js/react-string-checker) &bull; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/react-string-checker/blob/master/LICENSE) &bull; [![Build Status](https://travis-ci.com/andrelmlins/react-string-checker.svg?branch=master)](https://travis-ci.com/andrelmlins/react-string-checker) &bull; [![Dependencies](https://david-dm.org/andrelmlins/react-string-checker.svg)](https://david-dm.org/andrelmlins/react-string-checker) &bull; [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/andrelmlins/react-string-checker.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/andrelmlins/react-string-checker/context:javascript)

## Basic Use

```
npx react-string-checker
# or
npm i -g react-string-checker
react-string-checker
```

## Using in project

### Installation

```
npm i --save-dev react-string-checker
# or
yarn add -D react-string-checker
```

### Starting

#### Insert into `package.json` file script:

```
...
"scripts": {
  ...
  "string-checker": "react-string-checker"
  ...
}
...
```

#### Run the command:

```
yarn string-checker
```

## Using in NodeJS:

### Running checker

```javascript
const CheckerStrings = require('react-string-checker');

const checkerStrings = new CheckerStrings('./src');

checkerStrings.run();
```

### Get checker result

```javascript
const CheckerStrings = require('react-string-checker');

const checkerStrings = new CheckerStrings('./src');

const strings = checkerStrings.listAllStrings();
```

## NPM Statistics

Download stats for this NPM package

[![NPM](https://nodei.co/npm/react-string-checker.png)](https://nodei.co/npm/react-string-checker/)

## License

React String Checker is open source software [licensed as MIT](https://github.com/andrelmlins/react-string-checker/blob/master/LICENSE).
