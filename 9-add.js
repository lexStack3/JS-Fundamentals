/**
 * Task: Write a script that prints the addition of 2 integers.
 *
 * NB: You have to define a function with this prototype:
 *      function add(a, b)
 */

const { argv } = require("node:process");

if (Number.isNaN(+argv[2]) || Number.isNaN(+argv[3])) {
    console.log(NaN);
} else {
    console.log(add(+argv[2], +argv[3]))
}

function add(a, b){
    return a + b;
}
