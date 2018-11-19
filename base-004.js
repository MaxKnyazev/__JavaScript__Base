/*
Base-004

https://www.codewars.com/kata/mexican-wave/train/javascript

Task
 	In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
Rules
 	1.  The input string will always be lower case but maybe empty.

    2.  If the character in the string is whitespace then pass over it as if it was an empty seat.
Example

wave('hello') => ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']

*/
function wave(s){
    let arr = [];
    let str = s.toLowerCase();
    str.split('').forEach(function(elem, i) {
        if (elem !== ' ') {
            arr.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i+1));
        }
    })
    return arr;
}

/* ===================   the testing function   ======================= */
function test (testedFunc, result, data) {
    testedFunc(data).join(',') === result ?
        console.log(`+ + + + + + + : ${data} --> ${result}`) :
        console.log(`- - - - - - - : ${data} --> ${result}`);
}

/* ===================         tests          ======================= */
test(wave, 'Hello,hEllo,heLlo,helLo,hellO', 'hello');
test(wave, 'Codewars,cOdewars,coDewars,codEwars,codeWars,codewArs,codewaRs,codewarS', 'codewars');
test(wave, ' Gap , gAp , gaP ', ' gap ');
