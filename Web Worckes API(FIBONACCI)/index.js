'use strict';

const form_fibonacci = document.querySelector('.text-number__fibonacci-wrapper');
const input_fibonacci = document.querySelector('.text-number__fibonacci-input');

form_fibonacci.addEventListener('mouseover', (e) => { 
    e.target.focus()
})

input_fibonacci.addEventListener('focus', (e) => {
    console.log('Focus!!!')
})

// document.onkeyup = function (e) {
//             e = e || window.event;
//             if (e.keyCode === 13) {
//                 searchtov();
//             }
//             // Отменяем действие браузера
//             return false;
// }