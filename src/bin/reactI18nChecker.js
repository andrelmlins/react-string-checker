#!/usr/bin/env node

"use strict";

const { spawn } = require("child_process");

spawn("node", [`${__dirname}/../index.js`]);
