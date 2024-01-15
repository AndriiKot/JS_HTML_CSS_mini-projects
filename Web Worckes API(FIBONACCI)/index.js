"use strict";

const form_fibonacci = document.querySelector(
  ".text-number__fibonacci-wrapper"
);
const form_fibonacci_placeholder_text = document.querySelector(
  ".text-number__fibonacci-placeholder"
);
const input_number_fibonacci = document.querySelector(
  ".text-number__fibonacci-input"
);
const input_submit_fibonacci = document.querySelector(
  ".wrapper__fibonacci__input-submit"
);

const p_fibonacci_result = document.querySelector(
  ".wrapper__fibonacci__result-fibonacci"
);

form_fibonacci.addEventListener("mouseover", (e) => {
  e.target.focus();
  form_fibonacci_placeholder_text.style.opacity = "0.8";
});

const worker = (argMessage) => {
  if (window.Worker) {
    console.log("Worker!!!")
    const worker_fibonacci = new Worker("./worker_fibonacci.js");
    worker_fibonacci.postMessage(argMessage);

    worker_fibonacci.onmessage = (message) => {
      console.log(message.data);
      console.log("HI !!!")
      p_fibonacci_result.textContent += message.data;
    };
  }
};

input_number_fibonacci.addEventListener("focus", (e) => {
  document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const valid = e.target.validity.valid;
      if (valid) {
        const number = e.target.value;
        document.querySelector(".wrapper__fibonacci__input-submit").click();
        e.preventDefault();
        e.target.value = "";
        p_fibonacci_result.textContent = `Fibonacci(${number}): `;  
      }
    }
  });
});

