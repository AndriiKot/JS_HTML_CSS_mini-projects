'use strict';

const form_fibonacci = document.querySelector('.text-number__fibonacci-wrapper');
const input_number_fibonacci = document.querySelector('.text-number__fibonacci-input');
const input_submit_fibonacci = document.querySelector('.wrapper__fibonacci__input-submit')

form_fibonacci.addEventListener('mouseover', (e) => { 
    e.target.focus()
})


input_number_fibonacci.addEventListener('focus', (e) => {
    document.addEventListener('keypress', (e) => {
      if (!e.target.value) { return }
        if (e.key === "Enter" ) {
            e.preventDefault();
            console.log("Enter!!!!")
            // document.getElementById("myBtn").click();
          }
      
    })
})


