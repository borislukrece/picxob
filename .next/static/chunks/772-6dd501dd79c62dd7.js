(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[772],{357:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(8081)},905:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},default:function(){return u},isEqualNode:function(){return i}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:n}=e,o=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let i=r[e]||e.toLowerCase();"script"===t&&("async"===i||"defer"===i||"noModule"===i)?o[i]=!!n[e]:o.setAttribute(i,n[e])}let{children:i,dangerouslySetInnerHTML:u}=n;return u?o.innerHTML=u.__html||"":i&&(o.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):""),o}function i(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function u(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,o="";if(r){let{children:e}=r.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),u=Number(r.content),l=[];for(let t=0,n=r.previousElementSibling;t<u;t++,n=(null==n?void 0:n.previousElementSibling)||null){var a;(null==n?void 0:null==(a=n.tagName)?void 0:a.toLowerCase())===e&&l.push(n)}let c=t.map(o).filter(e=>{for(let t=0,n=l.length;t<n;t++)if(i(l[t],e))return l.splice(t,1),!1;return!0});l.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),c.forEach(e=>n.insertBefore(e,r)),r.content=(u-l.length+c.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9189:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4080:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return b},handleClientScriptLoad:function(){return m},initScriptLoader:function(){return g}});let r=n(9920),o=n(1452),i=n(7437),u=r._(n(4887)),l=o._(n(2265)),a=n(6590),c=n(905),s=n(9189),f=new Map,d=new Set,p=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],y=e=>{if(u.default.preinit){e.forEach(e=>{u.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},h=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:o=null,dangerouslySetInnerHTML:i,children:u="",strategy:l="afterInteractive",onError:a,stylesheets:s}=e,h=n||t;if(h&&d.has(h))return;if(f.has(t)){d.add(h),f.get(t).then(r,a);return}let m=()=>{o&&o(),d.add(h)},g=document.createElement("script"),v=new Promise((e,t)=>{g.addEventListener("load",function(t){e(),r&&r.call(this,t),m()}),g.addEventListener("error",function(e){t(e)})}).catch(function(e){a&&a(e)});for(let[n,r]of(i?(g.innerHTML=i.__html||"",m()):u?(g.textContent="string"==typeof u?u:Array.isArray(u)?u.join(""):"",m()):t&&(g.src=t,f.set(t,v)),Object.entries(e))){if(void 0===r||p.includes(n))continue;let e=c.DOMAttributeNames[n]||n.toLowerCase();g.setAttribute(e,r)}"worker"===l&&g.setAttribute("type","text/partytown"),g.setAttribute("data-nscript",l),s&&y(s),document.body.appendChild(g)};function m(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>h(e))}):h(e)}function g(e){e.forEach(m),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");d.add(t)})}function v(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:o=null,strategy:c="afterInteractive",onError:f,stylesheets:p,...y}=e,{updateScripts:m,scripts:g,getIsSsr:v,appDir:b,nonce:_}=(0,l.useContext)(a.HeadManagerContext),w=(0,l.useRef)(!1);(0,l.useEffect)(()=>{let e=t||n;w.current||(o&&e&&d.has(e)&&o(),w.current=!0)},[o,t,n]);let E=(0,l.useRef)(!1);if((0,l.useEffect)(()=>{!E.current&&("afterInteractive"===c?h(e):"lazyOnload"===c&&("complete"===document.readyState?(0,s.requestIdleCallback)(()=>h(e)):window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>h(e))})),E.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(m?(g[c]=(g[c]||[]).concat([{id:t,src:n,onLoad:r,onReady:o,onError:f,...y}]),m(g)):v&&v()?d.add(t||n):v&&!v()&&h(e)),b){if(p&&p.forEach(e=>{u.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return n?(u.default.preload(n,y.integrity?{as:"script",integrity:y.integrity,nonce:_,crossOrigin:y.crossOrigin}:{as:"script",nonce:_,crossOrigin:y.crossOrigin}),(0,i.jsx)("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...y,id:t}])+")"}})):(y.dangerouslySetInnerHTML&&(y.children=y.dangerouslySetInnerHTML.__html,delete y.dangerouslySetInnerHTML),(0,i.jsx)("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...y,id:t}])+")"}}));"afterInteractive"===c&&n&&u.default.preload(n,y.integrity?{as:"script",integrity:y.integrity,nonce:_,crossOrigin:y.crossOrigin}:{as:"script",nonce:_,crossOrigin:y.crossOrigin})}return null}Object.defineProperty(v,"__nextScript",{value:!0});let b=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8081:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function u(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(e){n=u}}();var a=[],c=!1,s=-1;function f(){c&&r&&(c=!1,r.length?a=r.concat(a):s=-1,a.length&&d())}function d(){if(!c){var e=l(f);c=!0;for(var t=a.length;t;){for(r=a,a=[];++s<t;)r&&r[s].run();s=-1,t=a.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new p(e,t)),1!==a.length||c||l(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},u=!0;try{t[e](i,i.exports,r),u=!1}finally{u&&delete n[e]}return i.exports}r.ab="//";var o=r(229);e.exports=o}()},920:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});for(var r,o={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},i=new Uint8Array(16),u=[],l=0;l<256;++l)u.push((l+256).toString(16).slice(1));var a=function(e,t,n){if(o.randomUUID&&!t&&!e)return o.randomUUID();var l=(e=e||{}).random||(e.rng||function(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(i)})();if(l[6]=15&l[6]|64,l[8]=63&l[8]|128,t){n=n||0;for(var a=0;a<16;++a)t[n+a]=l[a];return t}return function(e,t=0){return(u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]).toLowerCase()}(l)}}}]);