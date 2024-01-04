"use strict";

const links: NodeListOf<HTMLAnchorElement> = document.querySelectorAll("a");

const highlight: HTMLSpanElement = document.createElement("span");
highlight.classList.add("highlight");
document.body.appendChild(highlight);

function displayHighlight(
  currentElement: HTMLAnchorElement,
  animationElement: HTMLSpanElement
): void {
  const linkCoords: DOMRect = currentElement.getBoundingClientRect();

  const coords: { width: number; height: number; top: number; left: number } = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  animationElement.style.width = `${linkCoords.width}px`;
  animationElement.style.height = `${linkCoords.height}px`;
  animationElement.style.transform = `translate(${coords.left}px,${coords.top}px)`;
}

// function twoParams(a: number, b: number) {
//   return a + b;
// }
// let curryOne = (x: number) => twoParams(123, x);
// curryOne(456); // Okay и тип проверен!
// curryOne("456");

links.forEach((link: HTMLAnchorElement) => {
  link.addEventListener(
    "mouseover",
    ():void => {displayHighlight(link, highlight)}
  );
});
