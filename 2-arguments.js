/**
 * Task: Write a script that prints a message
 *       depending of the number of arguments passed:
 *
 * NB: If no arguments are passed to the script, print "No argument"
 *     If only one argument is passed to the script, print "Argument found"
 *     otherwise, print "Arguments found"
 */

const { argv } = require("node:process");

switch(argv.length) {
    case 2:
        console.log("No argument");
        break;
    case 3:
        console.log("Argument found");
        break;
    default:
        console.log("Arguments found");
}
