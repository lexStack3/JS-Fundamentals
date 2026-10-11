/**
 * Task: Write a script that computes and prints a factorial.
 *
 * NB: The first argument is integer (argument can be cast as integer)
 *     used for computing the factorial.
 *     Factorial of NaN is 1.
 *     You must do it recursively.
 *     You must use a function.
 */

const { argv } = require("node:process");

if (Number.isNaN(+argv[2])) {
    console.log(1);
} else {
    console.log(factorial(+argv[2]));
}

function factorial(n) {
    if (n <= 0) {
        return 1;
    }

    return n * factorial(n - 1);
}
