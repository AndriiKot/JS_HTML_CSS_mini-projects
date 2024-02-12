function displayHighlight(currentElement, animationElement) {
  const linkCoords = currentElement.getBoundingClientRect();
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };
  animationElement.style.width = ''.concat(linkCoords.width, 'px');
  animationElement.style.height = ''.concat(linkCoords.height, 'px');
  if (firstMouseover) {
    animationElement.style.transitionDuration = '0s';
    firstMouseover = false;
  } else {
    animationElement.style.transitionDuration = '.2s';
  }
  animationElement.style.transform = 'translate('.concat(coords.left, 'px,').concat(coords.top, 'px)');
}
const links = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);
var firstMouseover = true;
links.forEach((link) => {
  link.addEventListener('mouseover', () => { displayHighlight(link, highlight); });
});
