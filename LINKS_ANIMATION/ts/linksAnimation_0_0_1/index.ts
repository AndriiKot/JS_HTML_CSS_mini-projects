
interface Coords {
  width: number;
  height: number;
  top: number;
  left: number;
}

function displayHighlight(
  currentElement: HTMLAnchorElement,
  animationElement: HTMLElement
): void {
  const linkCoords = currentElement.getBoundingClientRect();

  const coords: Coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };
  animationElement.style.width = `${linkCoords.width}px`;
  animationElement.style.height = `${linkCoords.height}px`;

  if (firstMouseover) {
    animationElement.style.transitionDuration = '0s';
    firstMouseover = false;
  } else {
    animationElement.style.transitionDuration = '.2s';
  }

  animationElement.style.transform = `translate(${coords.left}px,${coords.top}px)`;
}

const links = document.querySelectorAll('a');

const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);

let firstMouseover = true;

links.forEach((link) => {
  link.addEventListener('mouseover', () => {displayHighlight(link, highlight)});
});
