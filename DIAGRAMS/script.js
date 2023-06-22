'use strict'

const body = document.querySelector('body');
const forms = document.querySelector('.rang');


const RGBToHSL = (red, green, blue) => {
    red /= 255; 
    green /= 255; 
    blue /= 255;

    const l = Math.max(red, green, blue);
    const s = l - Math.min(red, green, blue);
    const h = s
      ? l === red
        ? (green - blue) / s
        : l === green
        ? 2 + (blue - red) / s
        : 4 + (red - green) / s
      : 0;
    return [
      60 * h < 0 ? 60 * h + 360 : 60 * h,
      100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
      (100 * (2 * l - s)) / 2,
    ];
};

const activeBackground = (r,g,b) => {
  Object.assign(document.documentElement, {
    style: `
      --rgb-red: ${r};
      --rgb-green: ${g};
      --rgb-blue: ${b};   
    `
  });
};

const colorText = (element,r,g,b) => {
  const hsl = RGBToHSL(r,g,b);
  hsl[2] = hsl[2] > 50 ? 0 : 100;
  const h = String(hsl[0]);
  const s = String(hsl[1]) + '%';
  const l = String(hsl[2]) + '%';
  element.style.color = `hsl(${h} ${s} ${l})`;
};

const colorValid = (color) => {
  if(color >= 10 && color <= 255) {
    return color;
  };
  return '0';
};

const colorRang = (event) => {
  event.preventDefault();
  const r = colorValid(red.value);
  const g = colorValid(green.value);
  const b = colorValid(blue.value);
  activeBackground(r,g,b);
  colorText(body,r,g,b);
};

forms.addEventListener('submit',colorRang);

