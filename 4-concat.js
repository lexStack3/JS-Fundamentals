/**
 * Task: Write a script that prints two arguments passed to it,
 *       in the following format "<arg> is <arg>"
 */

const { argv } = require("node:process");

console.log(`${argv[2]} is ${argv[3]}`);
