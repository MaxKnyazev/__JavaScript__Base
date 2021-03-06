/*
Асинхронность setTimeout

Задача с собеседований
Что выведется в консоль?
*/

// for (var i = 0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 0 );
// }
//10 10 10 10 10 10 10 10 10 10

//Как исправить код, чтобы выводилось ожидаемое : 0 1 2 3 4 5 6 7 8 9 ?

//1. Заменить var на let, т к let имеет блочную область видимости
//   и для каждой анонимной функции будет своя переменная i
// for (let i = 0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 0 );
// }

//2. Использовать дополнительный параметр в setTimeout
//   теперь у каждой анонимной функции будет своя переменная i
// for (var i = 0; i < 10; i++) {
//     setTimeout(function(i) {
//         console.log(i);
//     }, 0, i );
// }

//3. Обернуть setTimeout в IIFE (самовызывающуюся) функцию
//   теперь у каждой анонимной функции будет своя переменная i
// for (var i = 0; i < 10; i++) {
//     (function(i) {
//         setTimeout(function() {
//             console.log(i);
//         }, 0 );
//     })(i);
// }

//------------------------------------------------------------
//Что надо сделать, чтобы значения i выводились в консоль
//с интервалом в 1 секунду?
//Ответ : использовать setTimeout рекурсивно
// function getGameOver() {
//     var count = 0;
//
//     setTimeout(function _hidden() {
//         count++;
//         console.log(count);
//         if (count < 5) {
//             setTimeout(_hidden, 1000);
//         }
//     }, 1000);
// }
//
// getGameOver();

