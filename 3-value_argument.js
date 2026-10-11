/**
 * Task: Write a script that prints the first argument passed to it.
 *
 * NB: If no arguments are passed to the script, print "No argument"
 *     You are not allowed to use <.length>
 */

const { argv } = require("node:process");

if (!argv[2]) {
    console.log("No argument");
} else {
    console.log(argv[2]);
}
