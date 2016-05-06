'use strict';
var greeter1 = require('./greeter.js')();
greeter1.greet("test1");
var greeter2 = require('./greeter.js')();
greeter2.greet();