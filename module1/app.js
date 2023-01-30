// let x = require("./config") // local
// let y = require("http"); // core
// let z = require("crypto");
// let x = require('reverse_string');

// let name = "rohit sharma";

// let y = x("amar");

// console.log(y);

let rand = require("random-string");
let num = rand(
        {
            length : 10,
            letters : false,
            special : true
        }
        );
console.log(num)


