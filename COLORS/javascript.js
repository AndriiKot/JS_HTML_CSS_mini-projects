'use strict'

const body = document.querySelector('body');
const forms = createRandomGridElements;
const resetButton = document.querySelector('.reset');
const startButton = document.querySelector('.start');
const select = colorModel;
let saveValues = null;
let returnCallSubmit = false;


forms.addEventListener('submit',callsubmit);
resetButton.addEventListener('click',reset);
startButton.addEventListener('click' ,getNodeListClock())

function reset(){
    gridAxisX.value = '';
    gridAxisY.value = '';
    deleteDivWrapperToBody();
};

function callsubmit(event){
    returnCallSubmit = false
    event.preventDefault();
    noRESTARBackground(saveValues); 
    saveValues = saveAllValues();
    if(returnCallSubmit){ return };
    build();
    saveValues = saveAllValues();
};

function build() {
    deleteDivWrapperToBody();
    addDivWrapperToBody();
    createGridVIEW();
    setRandomColors();
    clockEvent();
    isdisabledInput();   
};

function clockEvent(){
   const locks = document.querySelectorAll('.lock');

   function handleClickClock(event){
     const lock = event.currentTarget.querySelector('.fa-solid');
     if(lock.className.includes('open')){
         lock.className = 'fa-solid fa-lock';
     } else {
         lock.className = 'fa-solid fa-lock-open'
     };
     isdisabledInput();
   };

    locks.forEach(lock => {
        lock.addEventListener('click', handleClickClock);
    });

};

function isdisabledInput(){
    const lock = document.querySelectorAll('.fa-lock');
    const disabled = document.querySelectorAll(['input[type="number"]']);
    let isdisabled = false
    if(!lock.length){ isdisabled = false 
    } else {
        isdisabled = true
    };
    for(let i = 0; i < disabled.length; i++){
        disabled[i].disabled = isdisabled;
    };
};


function getNumberAsisXandY(){
    const x = Number(gridAxisX.value) || 0;
    const y = Number(gridAxisY.value) || 0;
    return [x,y];
};

function getArrayStringAsisXandY(){
    const x = gridAxisX.value;
    const y = gridAxisY.value;
    return [x,y];
};

function getNumberOfElements() {
    const [x,y] = getNumberAsisXandY();
    return (x * y);
};

function getDivContainerWrapper(){
   return document.querySelector('.wrapper');
};

function getNodeListDivColors(){
    const nodeListGridElements = document.querySelectorAll("[class^='color-']");
    return nodeListGridElements;
};


function createGridElement(number = 0) {
    const gridElement = `
      <div class="color-${number}">
        <h3>Text ${number}</h3>
        <button class="lock">
            <i class="fa-solid fa-lock-open"></i>
        </button>
      </div>
    `;  
    return gridElement;
};

function createGridElements(numberOfElements) {
   numberOfElements = getNumberOfElements();
   let fullElements = '';  
   for(let i = 1; i <= numberOfElements; i++){
    const element = createGridElement(i);
    fullElements += element;
   };
   return fullElements;
};

function createDivWrapper(nameClass='wrapper'){
    const wrapper = document.createElement('div');
    wrapper.className = nameClass;
    return wrapper;
};


function addFullElementsToContainer(){
     const div = createDivWrapper();
     div.innerHTML= createGridElements();
     return div;
};

function addDivWrapperToBody() {
    body.append(addFullElementsToContainer());
};

function deleteDivWrapperToBody(){
    const divWrapper = document.querySelector('.wrapper');
    if(!divWrapper){ return};
    const parent = divWrapper.parentNode;
    parent.removeChild(divWrapper);
};

function createGridVIEW(){
    const nodelist = getNodeListDivColors();
    let statrIntRow = 1;

    for(let i = 0; i < nodelist.length; i++){
        const [column,row] = getNumberAsisXandY();

            nodelist[i].style.gridRowStart = `${statrIntRow}`;
            nodelist[i].style.gridRowEnd = `${statrIntRow+1}`;
            if (statrIntRow === row) {
                statrIntRow = 1;
            } else {
                statrIntRow += 1
            };
    };
};

function randomInteger(min,max){
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

function randomValueRange(){
   return randomInteger(0,255);
};

function getRandomColros(){
    const r = randomValueRange();
    const g = randomValueRange();
    const b = randomValueRange();
    return [r,g,b];
};

function setRandomColors(){
    // console.log(getNodeListDivColors().length)
    // console.log(saveAllValues()[2]);
    console.dir(startButton);
    getNodeListDivColors().forEach((col) => {
        const [r,g,b] = getRandomColros();
        const valueTextRGB = col.querySelector('h3');
        setColorModel(null,valueTextRGB,r,g,b);
        col.style.background = `rgb(${r},${g},${b})`;
        colorText(col,r,g,b);
    });
};

function getRGBColorString(element) {
    const stringRGBValue = element.style.background;
    return stringRGBValue;
};

function noRESTARBackground(fn){
    if(!fn) { return; };
    if(!(isDivWrapperContainer() && isValidValuesXandY())) { return; };
    const oldColorModel = fn[0];
    if(isOldValueSelectColorModelEqualsNew(oldColorModel)) { return; };
        if(!(isOldValueSelectColorModelEqualsNew(oldColorModel))){
            getRGBColorsToNodeListDivColors();     
        };

        if(returnCallSubmit === true){
            returnCallSubmit = false;
        } else {
            returnCallSubmit = true
        };
        
        return returnCallSubmit;
};


function getComponentsRGBColorsArray(element = ''){
    const array = [];
    const reg = (/(-?\d+(\.\d+)?)/g) 
    const newString = element.match(reg);
    const [r,g,b] = [newString[0],newString[1],newString[2]];
    array.push(r,g,b);
    return array;
};

function getRGBColorsToNodeListDivColors(){
    getNodeListDivColors().forEach((element) => {
        const [red,green,blue] = getComponentsRGBColorsArray(getRGBColorString(element));
        const valueTextRGB = element.querySelector('h3');
        setColorModel(null,valueTextRGB,red,green,blue);
    });
};

function isDivWrapperContainer(){
  const boolean = getDivContainerWrapper();
  if(boolean === null  || boolean === undefined){
    return false;
  } else {
    return true;
  };
};

function getIndexSelectColorModel(){
    const indexSelectColorModel = select.options.selectedIndex;
    return indexSelectColorModel;
};

function isOldVauleAsisXandYeaylasNew(old = []){
    const newValue = getNumberAsisXandY();
    return (old.toString() === newValue.toString());
};

function isOldValueSelectColorModelEqualsNew(old = 1){
    const newValue = getIndexSelectColorModel();
    return (old === newValue);
};

function isValidValuesXandY(){
    const [validX,validY] = getArrayStringAsisXandY();
    if(validX && validY){
        return true;
    } else {
        return false;
    };
};

function saveAllValues(){
    const arrAllValues = [];
    const saveIndexSelect = getIndexSelectColorModel();
    const saveArrStrXandY = getArrayStringAsisXandY();
    const saveClockNodeList = getNodeListClock();
    arrAllValues.push(saveIndexSelect,saveArrStrXandY,saveClockNodeList);
    return arrAllValues;
};

function getNodeListClock(){
    const nodeList = document.querySelectorAll('.fa-solid');
    console.log(nodeList);
    return nodeList;
};


function setColorModel(_,element,red,green,blue){
    const value = select.options[getIndexSelectColorModel()].value;
    if(value === 'HEX') {
        return element.innerText = rgbToHex(rgbComponentsToHex(red,green,blue));
    };
    if(value === 'RGB') {
        return element.textContent = `rgb(${red},${green},${blue})`;
    };
    if(value === 'HSL') {
        let [h,s,l] = RGBToHSL(red,green,blue);
        h = Math.round(h);
        s = Math.round(s);
        l = Math.round(l);
        return element.innerText = `hsl(${h},${s}%,${l}%)`;
    };
};


function colorText(element,r,g,b) {
    const hsl = RGBToHSL(r,g,b);
    hsl[2] = hsl[2] > 50 ? 20 : 100;
    const h = String(hsl[0]);
    const s = String(hsl[1]) + '%';
    const l = String(hsl[2]) + '%';
    element.style.color = `hsl(${h} ${s} ${l})`;
};

function RGBToHSL(red, green, blue) {
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

function rgbComponentsToHex(red,green,blue) {
    const r = Number(red).toString(16);
    const g = Number(green).toString(16);
    const b = Number(blue).toString(16);
    return [r.length == 1 ? "0" + r : r,
            g.length == 1 ? "0" + g : g,
            b.length == 1 ? "0" + b : b];
};

function rgbToHex(arrayColorsRGB) {
    return "" + arrayColorsRGB[0] + arrayColorsRGB[1] + arrayColorsRGB[2];
};






  







