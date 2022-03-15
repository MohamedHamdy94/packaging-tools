(()=>{"use strict";var e={873:(e,n,r)=>{r.d(n,{Z:()=>i});var t=r(645),o=r.n(t)()((function(e){return e[1]}));o.push([e.id,"\r\n.info{\r\n    \r\n  background-color: rgba(80, 171, 223, 0.822);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n\r\n\r\n\r\n    \r\n    height: 70px;\r\n    /* color: black; */\r\n    color: aliceblue;\r\n    font-size: 50px;\r\n    line-height: 1.4;\r\n  }\r\n  img{\r\n    padding-left: 20px;\r\n  }",""]);const i=o},426:(e,n,r)=>{r.d(n,{Z:()=>i});var t=r(645),o=r.n(t)()((function(e){return e[1]}));o.push([e.id,"\r\n\r\nbody{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    box-sizing: border-box;\r\n    /* background-color: rgba(80, 171, 223, 0.822); */\r\n    justify-content: center;\r\n    text-align: center;\r\n    font-size: 50px;\r\n    \r\n  }\r\n\r\n\r\n  ",""]);const i=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r=e(n);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},n.i=function(e,r,t){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);t&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),n.push(s))}},n}},379:(e,n,r)=>{var t,o=function(){var e={};return function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[n]=r}return e[n]}}(),i=[];function a(e){for(var n=-1,r=0;r<i.length;r++)if(i[r].identifier===e){n=r;break}return n}function c(e,n){for(var r={},t=[],o=0;o<e.length;o++){var c=e[o],s=n.base?c[0]+n.base:c[0],l=r[s]||0,d="".concat(s," ").concat(l);r[s]=l+1;var u=a(d),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:d,updater:m(f,n),references:1}),t.push(d)}return t}function s(e){var n=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var i=r.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function u(e,n,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=d(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function f(e,n,r){var t=r.css,o=r.media,i=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var p=null,h=0;function m(e,n){var r,t,o;if(n.singleton){var i=h++;r=p||(p=s(n)),t=u.bind(null,r,i,!1),o=u.bind(null,r,i,!0)}else r=s(n),t=f.bind(null,r,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var r=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<r.length;t++){var o=a(r[t]);i[o].references--}for(var s=c(e,n),l=0;l<r.length;l++){var d=a(r[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}r=s}}}},284:(e,n,r)=>{e.exports=r.p+"images/cover.jpg"},940:(e,n,r)=>{e.exports=r.p+"images/image.png"}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,exports:{}};return e[t](i,i.exports,r),i.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var n=r.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e=r(379),n=r.n(e),t=r(426);n()(t.Z,{insert:"head",singleton:!1}),t.Z.locals;var o=r(873);n()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var i=r(940);const a=document.createElement("header");a.innerHTML="this is webpack demo",a.classList.add("info"),document.body.appendChild(a);const c=document.createElement("img");c.src=i,c.style.width="50px",c.style.height="50px",a.appendChild(c),document.body.appendChild(function(){const e=document.createElement("div");return e.innerHTML="Mohamed Hamdy Ahmed",e.classList.add("myDiv"),e}()),r(284),console.log("hello world ")})()})();