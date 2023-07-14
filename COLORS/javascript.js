'use strict'

const body = document.querySelector('body');
const forms = createRandomGridElements;
const resetButton = document.querySelector('.reset');
const startButton = document.querySelector('.start');
const select = colorModel;
let saveNodeListLock = null;
let saveValues = null;
let returnCallSubmit = false;
let isdisabled = false;

forms.addEventListener('submit',callsubmit);
resetButton.addEventListener('click',reset);

function reset(){
    resetInputNumber();
    startButton.disabled = false;
    gridAxisX.value = '';
    gridAxisY.value = '';
    deleteDivWrapperToBody();
};

function callsubmit(event){
    returnCallSubmit = false;
    event.preventDefault();
    noRESTARBackground(saveValues); 
    saveValues = saveAllValues();
    if(returnCallSubmit){ return };
    saveNodeListLock = getNodeListClock();
    build();
    saveValues = saveAllValues();
};

function build() {
    deleteDivWrapperToBody();
    addDivWrapperToBody();
    createGridVIEW();
    setRandomColors();
    clockEvent();
};

function clockEvent(){
   const locks = document.querySelectorAll('.lock');

   function handleClick(event){
     const lock = event.currentTarget.querySelector('.fa-solid');
     if(lock.className.includes('open')){
         lock.className = 'fa-solid fa-lock';
     } else {
         lock.className = 'fa-solid fa-lock-open'
     };
     isdisabledInput();
     isdisabledButtonStart();
   };

    locks.forEach(lock => {
        lock.addEventListener('click', handleClick);
    });
};

function getInputNumberNodeList(){
    const input = document.querySelectorAll('input[type="number"]');
    return input;
};

function resetInputNumber(nodeList){
   nodeList = getInputNumberNodeList();
   for(let i = 0; i < nodeList.length; i++){
    nodeList[i].disabled = false;
   };
};

function isdisabledInput(){
    const lock = document.querySelectorAll('.fa-lock');
    let disabled = getInputNumberNodeList();
    if(lock.length){ isdisabled = true; 
    } else {
        isdisabled = false;
    };
    for(let i = 0; i < disabled.length; i++){
        disabled[i].disabled = isdisabled;
    };
   return isdisabled = false;
};


function isdisabledButtonStart(){
    const [x,y] = getNumberAsisXandY();
    const disabled = document.querySelector('input[type="number"]').disabled;
    const openLock = document.querySelectorAll('.fa-lock-open');
    if(x === 1 &&  y === 1  && disabled){
       startButton.disabled = true;
    } else {
        startButton.disabled = false;
    };

    if(openLock.length === 0){startButton.disabled = true};
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
    const nodeList = getNodeListDivColors();
    if(saveNodeListLock.length === 0) {
        for(let i = 0;i < nodeList.length; i++) {
            const [r,g,b] = getRandomColros();
            const col = nodeList[i];
            const valueTextRGB = col.querySelector('h3');
            setColorModel(null,valueTextRGB,r,g,b);
            col.style.background = `rgb(${r},${g},${b})`;
            colorText(col,r,g,b);
        };
    }  else {
        for(let i = 0;i < nodeList.length; i++) {
            const oldElement =  saveNodeListLock[i];
            const col = nodeList[i];
            const valueTextRGB = col.querySelector('h3');
            
        if (oldElement){
            if(oldElement.querySelector('i').className == 'fa-solid fa-lock'){
                const [r,g,b] = getComponentsRGBColorsArray(getRGBColorString(oldElement));
                const colLock = col.querySelector('.fa-solid')
                col.style.background =  saveNodeListLock[i].style.background;
                setColorModel(null,valueTextRGB,r,g,b);
                colorText(col,r,g,b);
                colLock.className = 'fa-solid fa-lock';
            } else {
                const [r,g,b] = getRandomColros();
                setColorModel(null,valueTextRGB,r,g,b);
                col.style.background = `rgb(${r},${g},${b})`;
                colorText(col,r,g,b);
            };
        }  else {
            const [r,g,b] = getRandomColros();
            setColorModel(null,valueTextRGB,r,g,b);
            col.style.background = `rgb(${r},${g},${b})`;
            colorText(col,r,g,b);
        };
        };
    }
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
    arrAllValues.push(saveIndexSelect,saveArrStrXandY);
    return arrAllValues;
};


function getNodeListClock(){
    const nodeList = document.querySelectorAll('[class^="color"]');
    return nodeList;
};


function setColorModel(_,element,red,green,blue){
    const value = select.options[getIndexSelectColorModel()].value;
    if(value === 'HEX') {
        return element.innerText = (rgbToHex(rgbComponentsToHex(red,green,blue))+'         ').substring(0,18);
    };
    if(value === 'RGB') {
        return element.textContent = `rgb(${red},${green},${blue})                `.substring(0,18);
    };
    if(value === 'HSL') {
        let [h,s,l] = RGBToHSL(red,green,blue);
        h = Math.round(h);
        s = Math.round(s);
        l = Math.round(l);
        return element.innerText = `hsl(${h},${s}%,${l}%)     `.substring(0,18);
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






  







