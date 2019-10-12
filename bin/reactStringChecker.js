#!/usr/bin/env node

"use strict";

const CheckerStrings = require("../index.js");

const checkerStrings = new CheckerStrings("./src");

checkerStrings.run();
