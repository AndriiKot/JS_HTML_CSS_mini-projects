"use strict";

const links = document.querySelectorAll('a');

const highlight = document.createElement('span');
highlight.classList.add("highlight");
document.body.appendChild(highlight);

let firstMouseover = true


function displayHighlight(currentElement,animationElement) {
    const linkCoords = currentElement.getBoundingClientRect();

    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX,
    };
    animationElement.style.width = `${linkCoords.width}px`;
    animationElement.style.height = `${linkCoords.height}px`;

    if(firstMouseover) {
        console.log("HI!")
        animationElement.style.transitionProperty = 'all';
        animationElement.style.transitionDuration = '0s';
        animationElement.style.transform = `translate(${coords.left}px,${coords.top}px)`;
        firstMouseover = false
        console.log(firstMouseover)
        console.log(animationElement.style.transitionDuration)
        console.log(animationElement.style.transitionProperty)
        return;
    }
    console.log("Bye!")
    animationElement.style.transitionProperty = 'all';
    animationElement.style.transitionDuration = '.2s';
    animationElement.style.transform = `translate(${coords.left}px,${coords.top}px)`;

}

links.forEach((link) => {
    link.addEventListener('mouseover', displayHighlight.bind(this,link,highlight));
})
