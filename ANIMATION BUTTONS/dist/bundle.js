(()=>{"use strict";const n=n=>"function"==typeof n,t=function(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:n)(t)&&t()||t},o=document.querySelector("button"),e="animationGo",i=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.floor(Math.random()*t+n)}.bind(void 0,0,100),l=Array(8).fill(0),r=function(){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t;return[...new Array(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)].map((()=>o(o(n))))}.bind(void 0,8,i),c=((n,t)=>{n.classList.toggle(t)}).bind(void 0,o,e),d=function(n){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;return n?function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n=n.replace(/[%/]/g,""),n=n.replace("  "," "),n}(n),function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((n=>+n))}(function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split(" ")}(n))}(n):t};o.addEventListener("click",c),o.addEventListener("click",(async function(n){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r;const l=n.currentTarget,c=(t(l.style.borderRadius),i());l.classList.contains(e),o.style.borderRadius=`${c[0]}% \n                                      ${c[1]}% \n                                      ${c[2]}%\n                                      ${c[3]}% / \n                                      ${c[4]}% \n                                      ${c[5]}% \n                                      ${c[6]}% \n                                      ${c[7]}%`,function(){for(;;){console.log("While true!!!"),console.log("HI!!!");break}document.querySelector(".animationGo")?console.log("AnimationGo"):console.log("no Animation Go!"),console.log("NO Animation")}()}))})();
//# sourceMappingURL=bundle.js.map