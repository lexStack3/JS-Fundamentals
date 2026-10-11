/**
 * Task: Write a script that prints:
 *       "My number: <first argument converted in interger>"
 *
 * NB: You are not allowed to use try/catch.
 */

const { argv } = require("node:process");

if (Number.isNaN(+argv[2])) {
    console.log("Not a number");
} else {
    console.log(`My number: ${Math.floor(+argv[2])}`);
}
