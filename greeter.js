'use strict';
module.exports = function makeGreeter() {
    var privateVariable;
    var greeter = {
        prefix: "Hello ",
        suffix: "!",
        greet: function greet(name) {
            name = privateVariable || name || "World";
            privateVariable = name;
            console.log(greeter.prefix + name + greeter.suffix);
        }
    };
    return greeter;
};