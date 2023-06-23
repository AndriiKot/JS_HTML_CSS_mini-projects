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

// Canvas

diagramCanvas.width = 500;
diagramCanvas.height = 500;

console.dir(diagramCanvas)
const ctx = diagramCanvas.getContext('2d');

const drawLine = (startX,startY,endX,endY,ctx) => {
  ctx.beginPath();
  ctx.moveTo(startX,startY);
  ctx.lineTo(endX,endY);
  ctx.stroke();
};

const drawArc = (centerX,centerY,startAngle,endAngle,radius,ctx) => {
  ctx.beginPath();
  ctx.arc(centerX,centerY,startAngle,endAngle,radius);
  ctx.stroke();
};

const drawSlice = (centerX,centerY,startAngle,endAngle,radius,ctx,color) => {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(centerX,centerY);
  ctx.arc(centerX,centerY,radius,startAngle,endAngle);
  ctx.closePath();
  ctx.fill();
};

const Diagrams = {
  red: 100,
  green: 100,
  blue: 100,
};

drawLine(100,100,200,200,ctx);
drawArc(150,150,150,0,Math.PI*2,ctx);
drawSlice(150,150,Math.PI/2,(Math.PI + Math.PI/2),150,ctx,'blue');
drawSlice(150,150,Math.PI,(Math.PI*1.5),150,ctx,'red')

