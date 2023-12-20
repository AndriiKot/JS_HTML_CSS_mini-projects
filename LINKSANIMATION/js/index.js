"use strict";

const links = document.querySelectorAll('a');

const highlight = document.createElement('span');
highlight.classList.add("highlight");
document.body.appendChild(highlight);

const displayHighlight = () => {
    console.log("Hi!!!")
}

links.forEach((link) => {
    link.addEventListener('mouseover',displayHighlight);
})
