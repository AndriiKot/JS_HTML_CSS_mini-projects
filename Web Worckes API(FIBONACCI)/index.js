'use strict';

const form_fibonacci = document.querySelector('.text-number__fibonacci-wrapper');
const input_number_fibonacci = document.querySelector('.text-number__fibonacci-input');
const input_submit_fibonacci = document.querySelector('.wrapper__fibonacci__input-submit')

form_fibonacci.addEventListener('mouseover', (e) => { 
    e.target.focus()
})

console.log(input_submit_fibonacci)

// input_number_fibonacci.addEventListener('focus', (e) => {
//     console.log('Focus!!!')
//     document.addEventListener('keypress' (e) => {
//         if (e.key === "Enter") {
//             e.preventDefault();
//             document.getElementById("myBtn").click();
//           }
      
//     })
// })


