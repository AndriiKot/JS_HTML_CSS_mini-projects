(()=>{"use strict";const n=n=>"function"==typeof n,t=function(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:n)(t)&&t()||t},o=document.querySelector("button"),e="animationGo",i=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.floor(Math.random()*t+n)}.bind(void 0,0,100),l=Array(8).fill(0),c=function(){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t;return[...new Array(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)].map((()=>o(o(n))))}.bind(void 0,8,i),r=((n,t)=>{n.classList.toggle(t)}).bind(void 0,o,e);o.addEventListener("click",r),o.addEventListener("click",(async function(n,t,o){const i=n.currentTarget;(function(n){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;console.log(n?(n=>{const t=(n=(n=n.replace(/[%/]/g,"")).replace("  "," ")).split(" ").map((n=>+n));return console.log(t),t})(n):t)})(i.style.borderRadius="50% 100% / 10% 10%"),c(),i.classList.contains(e)?console.log("ON"):console.log("OFF")}))})();
//# sourceMappingURL=bundle.js.map