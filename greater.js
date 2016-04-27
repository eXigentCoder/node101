'use strict';
var greater = {
    prefix: "Hello ",
    suffix: "!",
    greet: function greet(name) {
        name = name || "World";
        console.log(greater.prefix + name + greater.suffix);
    }
};
module.exports = greater;