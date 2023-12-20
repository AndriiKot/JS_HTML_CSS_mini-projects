"use strict";

const links = document.querySelectorAll('a');

const highlight = document.createElement('span');
highlight.classList.add("highlight");
document.body.appendChild(highlight);


function displayHighlight() {
    const linkCoords = this.getBoundingClientRect();

    highlight.style.width = `${linkCoords.width}px`;
    highlight.style.height = `${linkCoords.height}px`;
    highlight.style.transform = `translate(${linkCoords.left}px,${linkCoords.top}px)`
}

links.forEach((link) => {
    link.addEventListener('mouseover', displayHighlight);
})
