"use strict";

const links = document.querySelectorAll('a');

const highlight = document.createElement('span');
highlight.classList.add("highlight");
document.body.appendChild(highlight);


function displayHighlight() {
    console.log("Hi!!!")
    console.log(this)
}

links.forEach((link) => {
    link.addEventListener('mouseover', displayHighlight);
})
