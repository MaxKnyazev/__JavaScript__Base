/*
Base-001

Дана строка из символов латинского алфавита. Написать функцию transStr(str),
которая строчные гласные буквы делает прописными, а прописные – строчными.
Функция должна возвратить результат. Например :

console.log(transStr(‘colOr’));    // ‘cOlor’
console.log(transStr(‘sOrrY’));    // ‘sorry’
*/

function transStr(str) {
    str = str || '';
    let i,
        len = str.length,
        char,
        result = '',
        obj = {
            a : 'A',
            e : 'E',
            o : 'O',
            i : 'I',
            u : 'U',
            y : 'Y'
        };

    for (i = 0; i < len; i++) {
        char = str[i].toLowerCase();
        if (char in obj) {
            result += (obj[char] === str[i]) ? str[i].toLowerCase() : str[i].toUpperCase();
        }else{
            result += str[i];
        }
    }
    return result;
}

/* ===================   the testing function   ======================= */
function test (testedFunc, result, ...data) {
    testedFunc(...data) === result ?
        console.log(`+ + + + + + + : ${data} --> ${result}`) :
        console.log(`- - - - - - - : ${data} --> ${result}`);
}

/* ===================         tests          ======================= */
test(transStr, '', '');
test(transStr, 'colOr', 'cOlor');
test(transStr, '  cOOOOr   alisA  ', '  coooor   AlIsa  ');
test(transStr, 'auaueoiuaueye', 'AUAUEOIUAUEYE');
test(transStr, 'dfrtfdrfggtrfd', 'dfrtfdrfggtrfd');
test(transStr, '^^^*&%$###$#!@#@!~~', '^^^*&%$###$#!@#@!~~');
test(transStr, '', undefined);
test(transStr, '', 12345);
test(transStr, 'a', 'A', 'O');
