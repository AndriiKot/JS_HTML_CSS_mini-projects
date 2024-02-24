"use strict";

const form_fibonacci = document.querySelector(
  ".text-number__fibonacci-wrapper"
);
const input_number_fibonacci = document.querySelector(
  ".text-number__fibonacci-input"
);
const input_submit_fibonacci = document.querySelector(
  ".wrapper__fibonacci__input-submit"
);

const p_fibonacci_result = document.querySelector(
  ".wrapper__fibonacci__result-fibonacci__text"
);

const span_fibonacci_result_number = 'wrapper__fibonacci__result-fibonacci__number';

document.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(form_fibonacci);
  const form =document.getElementById("text-number__fibonacci-wrapper")
  const input = form.elements['text-number__fibonacci-input']
  console.dir(form)
  console.dir(input)
	if ( ! withinBoundaries ) {
    console.dir(input.value)
    // input.value = ''
	}
})

form_fibonacci.addEventListener("mouseover", (e) => {
  e.target.focus();
});

const worker = (argMessage) => {
  if (window.Worker) {
    const worker_fibonacci = new Worker("./worker_fibonacci.js");
    worker_fibonacci.postMessage(argMessage);

    worker_fibonacci.onmessage = (message) => {
      p_fibonacci_result.innerHTML += `<span class="${span_fibonacci_result_number}">${message.data}</span>`;
    };
  }
};

input_number_fibonacci.addEventListener("focus", (e) => {
  document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const valid = e.target.validity.valid;
      if (valid) {
        const number = e.target.value;
        worker(number);
        document.querySelector(".wrapper__fibonacci__input-submit").click();
        e.preventDefault();
        e.target.value = "";
        p_fibonacci_result.innerHTML = `Fibonacci(${number}): `;  
      }
    }
  });
});

