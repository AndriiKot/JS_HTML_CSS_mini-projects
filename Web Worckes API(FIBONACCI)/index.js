'use strict';

const form_fibonacci = document.querySelector('.text-number__fibonacci-wrapper');
const form_fibonacci_placeholder_text = document.querySelector('.text-number__fibonacci-placeholder');
const input_number_fibonacci = document.querySelector('.text-number__fibonacci-input');
const input_submit_fibonacci = document.querySelector('.wrapper__fibonacci__input-submit');

console.log(form_fibonacci_placeholder_text);

form_fibonacci.addEventListener('mouseover', (e) => { 
    e.target.focus()
})


input_number_fibonacci.addEventListener('focus', (e) => {
    document.addEventListener('keypress', (e) => {
        if (!e.target.value) { return }
        if (e.key === "Enter" ) {
            document.querySelector('.wrapper__fibonacci__input-submit').click();
            e.target.type = 'text'
            console.log('Click')
            console.dir(e.target.type)
            e.target.value = 'Идёт вычисление!!'

          }
      
    })
})


