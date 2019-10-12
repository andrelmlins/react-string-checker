#!/usr/bin/env node

"use strict";

const CheckerStrings = require("../compiler/CheckerStrings");

const checkerStrings = new CheckerStrings("./src");

checkerStrings.run();
