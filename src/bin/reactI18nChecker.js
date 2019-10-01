#!/usr/bin/env node

"use strict";

const { spawn } = require("child_process");
console.log("entrou");
spawn("node", [`${__dirname}/../index.js`]);
