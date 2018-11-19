/*
Base-003

https://www.codewars.com/kata/ones-and-zeros

Given an array of one's and zero's convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.
*/
const binaryArrayToNumber = arr =>
    arr
    .reverse()
    .reduce((a, b, i) => a + b * Math.pow(2, i));

/* ===================   the testing function   ======================= */
function test (testedFunc, result, ...data) {
    testedFunc(...data) === result ?
        console.log(`+ + + + + + + : ${data} --> ${result}`) :
        console.log(`- - - - - - - : ${data} --> ${result}`);
}

/* ===================         tests          ======================= */
test(binaryArrayToNumber, 1, [0,0,0,1]);
test(binaryArrayToNumber, 2, [0,0,1,0]);
test(binaryArrayToNumber, 15, [1,1,1,1]);
test(binaryArrayToNumber, 6, [0,1,1,0]);