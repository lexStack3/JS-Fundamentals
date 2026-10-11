/**
 * Task: Write a script that prints two arguments passed to it,
 *       in the following format "<arg> is <arg>"
 */

const { argv } = require("node:process");

const sentence = `${argv[2]} is ${argv[3]}`;
console.log(sentence);
