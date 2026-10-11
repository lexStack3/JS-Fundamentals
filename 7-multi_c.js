/**
 * Task: Write a script that prints x times "C is fun".
 *       where x is the first argument of the script.
 *
 * NB: If the first argument can't be converted to an integer,
 *     print "Missing number of occurances".
 *     You must use a loop (while, for, etc.).
 */

const { argv } = require("node:process");

if (Number.isNaN(+argv[2])) {
    console.log("Missing number of occurances");
} else {
    for (let i = 1; i <= +argv[2]; i++) {
        console.log("C is fun");
    }
}
