/**
 * Task: Write a script that prints a square.
 *
 * NB: If the first argument can't be converted to an integer,
 *     print "Missing size".
 *     You must use the character 'x' to print the square.
 *     You must use a loop (while, for, etc.).
 */

const { argv } = require("node:process");

if (Number.isNaN(+argv[2])) {
    console.log("Missing size");
} else {
    if (+argv[2] > 0) {
        let shapeChar = 'x';
        for (let i = 1; i <= +argv[2]; i++) {
            console.log(shapeChar.repeat(+argv[2]));
        }
    }
}
