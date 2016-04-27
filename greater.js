'use strict';
module.exports = function makeGreater() {
    var privateVariable;
    var greater = {
        prefix: "Hello ",
        suffix: "!",
        greet: function greet(name) {
            name = privateVariable || name || "World";
            privateVariable = name;
            console.log(greater.prefix + name + greater.suffix);
        }
    };
    return greater;
};