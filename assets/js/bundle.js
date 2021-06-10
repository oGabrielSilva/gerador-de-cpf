(()=>{"use strict";var n={455:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(15),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]),a.push([n.id,":root {\n    --background: #320c8b;\n    --background-hover: #1c0552;\n    --form: #ececec;\n}\n\n@keyframes btn {\n    100% {\n        transform: scale(.9);\n    }\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    border: none;\n    outline: 0;\n    font-family: 'Roboto', sans-serif;\n}\n\nbody {\n    background: var(--background);\n    font-size: 14.44px;\n}\n\nform {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: var(--form);\n    min-height: 50vh;\n    width: 90vw;\n    border-radius: .5em;\n    box-shadow: 1px 1px 5px #000;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column;\n    text-align: right;\n}\n\nform div {\n    display: flex;\n}\n\ninput {\n    padding: .5em 1em;\n    border-radius: .5em;\n    text-align: center;\n    font-weight: bold;\n}\n\na {\n    font-size: 10px;\n    position: fixed;\n    bottom: 10px;\n    right: 1em;\n    text-decoration: none;\n}\n\nbutton, .copy {\n    background: var(--background);\n    color: var(--form);\n    font-weight: bold;\n    padding: .7em;\n    border-radius: .3em;\n    cursor: pointer;\n}\n\nbutton:hover, .copy:hover {\n    transition: .5s;\n    background: var(--background-hover);\n}\n\n.copy {\n    padding: .5em;\n}\n\n.copied {\n    animation: btn .3s ease;\n}\n","",{version:3,sources:["webpack://./src/assets/css/master.css"],names:[],mappings:"AAEA;IACI,qBAAqB;IACrB,2BAA2B;IAC3B,eAAe;AACnB;;AAEA;IACI;QACI,oBAAoB;IACxB;AACJ;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,YAAY;IACZ,UAAU;IACV,iCAAiC;AACrC;;AAEA;IACI,6BAA6B;IAC7B,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,uBAAuB;IACvB,gBAAgB;IAChB,WAAW;IACX,mBAAmB;IACnB,4BAA4B;IAC5B,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,eAAe;IACf,YAAY;IACZ,UAAU;IACV,qBAAqB;AACzB;;AAEA;IACI,6BAA6B;IAC7B,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,mCAAmC;AACvC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,uBAAuB;AAC3B",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n\n:root {\n    --background: #320c8b;\n    --background-hover: #1c0552;\n    --form: #ececec;\n}\n\n@keyframes btn {\n    100% {\n        transform: scale(.9);\n    }\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    border: none;\n    outline: 0;\n    font-family: 'Roboto', sans-serif;\n}\n\nbody {\n    background: var(--background);\n    font-size: 14.44px;\n}\n\nform {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: var(--form);\n    min-height: 50vh;\n    width: 90vw;\n    border-radius: .5em;\n    box-shadow: 1px 1px 5px #000;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column;\n    text-align: right;\n}\n\nform div {\n    display: flex;\n}\n\ninput {\n    padding: .5em 1em;\n    border-radius: .5em;\n    text-align: center;\n    font-weight: bold;\n}\n\na {\n    font-size: 10px;\n    position: fixed;\n    bottom: 10px;\n    right: 1em;\n    text-decoration: none;\n}\n\nbutton, .copy {\n    background: var(--background);\n    color: var(--form);\n    font-weight: bold;\n    padding: .7em;\n    border-radius: .3em;\n    cursor: pointer;\n}\n\nbutton:hover, .copy:hover {\n    transition: .5s;\n    background: var(--background-hover);\n}\n\n.copy {\n    padding: .5em;\n}\n\n.copied {\n    animation: btn .3s ease;\n}\n"],sourceRoot:""}]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},15:n=>{function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}n.exports=function(n){var t,r,o=(r=4,function(n){if(Array.isArray(n))return n}(t=n)||function(n,e){var t=n&&("undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"]);if(null!=t){var r,o,i=[],a=!0,c=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(n){c=!0,o=n}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}}(t,r)||function(n,t){if(n){if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(n,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[1],a=o[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),u="/*# ".concat(s," */"),A=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}));return[i].concat(A).concat([u]).join("\n")}return[i].join("\n")}},379:(n,e,t)=>{var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function a(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},r=[],o=0;o<n.length;o++){var c=n[o],s=e.base?c[0]+e.base:c[0],u=t[s]||0,A="".concat(s," ").concat(u);t[s]=u+1;var l=a(A),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(i[l].references++,i[l].updater(f)):i.push({identifier:A,updater:m(f,e),references:1}),r.push(A)}return r}function s(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,A=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function l(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=A(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function f(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var d=null,p=0;function m(n,e){var t,r,o;if(e.singleton){var i=p++;t=d||(d=s(e)),r=l.bind(null,t,i,!1),o=l.bind(null,t,i,!0)}else t=s(e),r=f.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var s=c(n,e),u=0;u<t.length;u++){var A=a(t[u]);0===i[A].references&&(i[A].updater(),i.splice(A,1))}t=s}}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(455);function o(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}e()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var i=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.number=e}var e,t;return e=n,t=[{key:"generator",value:function(){return String(Math.floor(1e9*Math.random()))}}],null&&o(e.prototype,null),t&&o(e,t),n}();function a(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var c,s=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.origins=e,this.digit=n.val(e),this.digit2=n.val(e+this.digit),this.cpf=n.formatted(e,this.digit,this.digit2)}var e,t;return e=n,t=[{key:"val",value:function(n){var e=n.split("");for(var t in e)e[t]=e[t]*(e.length+1-t);return(e=11-(e=e.reduce((function(n,e){return n+e}),0))%11)>9?"0":String(e)}},{key:"formatted",value:function(n,e,t){for(var r=n.split(""),o="",i=0;i<r.length;i++)3===(o+=r[i]).length&&(o+="."),7===o.length&&(o+="."),11===o.length&&(o+="-");return o+(e+t)}}],null&&a(e.prototype,null),t&&a(e,t),n}(),u=document.querySelector("form"),A=u.querySelector("input"),l=u.querySelector(".copy");function f(){if(14!==(c=new s(i.generator())).cpf.length)return console.warn("CPF invalid - new one generated"),void f();A.value=c.cpf,d(u.querySelector("button"),"copied")}function d(n,e){n.classList.add(e),setTimeout((function(){return n.classList.remove(e)}),300)}u.addEventListener("submit",(function(n){n.preventDefault(),f()})),l.addEventListener("click",(function(){navigator.clipboard.writeText(A.value),d(l,"copied")}))})()})();
//# sourceMappingURL=bundle.js.map