/*
Base-002.

*/


/* ===================   the testing function   ======================= */

function test (testedFunc, result, ...data) {
    if ( testedFunc(...data) === result ) {
        console.log('+ + + + + + +');
        console.log(data);
        console.log(result);
    }else{
        console.log('- - - - - - -');
        console.log(data);
        console.log(result);
    }
}


/* ===================         tests          ======================= */

//test(func, undefined, undefined);
