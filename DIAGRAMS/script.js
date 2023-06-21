const body = document.querySelector('body');
const label = document.querySelector('label');
const forms = document.querySelector('.rang')

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
  
  // const b = RGBToHSL(255, 0, 0);
  // h2.style.color = `hsl(${String(b[0]+180)} ${String(b[1])}% ${String(b[2])}%)`;

  const colorRang = (event) => {
    event.preventDefault();
    console.log(red.value,green.value,blue.value);
    RGBToHSL(red.value,green.value,blue.value)
  };

  forms.addEventListener('submit',colorRang);

  