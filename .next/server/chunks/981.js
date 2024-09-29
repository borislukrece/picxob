exports.id=981,exports.ids=[981],exports.modules={96344:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,12994,23)),Promise.resolve().then(r.t.bind(r,96114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,79671,23)),Promise.resolve().then(r.t.bind(r,41868,23)),Promise.resolve().then(r.t.bind(r,84759,23))},1533:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,44064,23)),Promise.resolve().then(r.bind(r,92417)),Promise.resolve().then(r.bind(r,34220)),Promise.resolve().then(r.bind(r,17444)),Promise.resolve().then(r.bind(r,87562)),Promise.resolve().then(r.bind(r,75272)),Promise.resolve().then(r.bind(r,90224)),Promise.resolve().then(r.bind(r,50359))},92417:(e,t,r)=>{"use strict";r.d(t,{GalleryProvider:()=>c,d:()=>l});var s=r(10326),o=r(17577),i=r(42757),a=r(7843);let n=(0,o.createContext)(void 0),c=({children:e})=>{let[t,r]=(0,o.useState)([]),[c,l]=(0,o.useState)(!1),[u,d]=(0,o.useState)(1),[m,p]=(0,o.useState)(null),[h,x]=(0,o.useState)("public"),g=async(e=50)=>{if(c||null!==m&&u>=m)return;let t=null;try{l(!0);let r="private"===h?`${(0,i.Aq)()??""}/users/images?page=${u}&entries=${e}`:`${(0,i.Aq)()??""}/images?page=${u}&entries=${e}`;t=await new Promise(async(e,t)=>{try{let t=await (0,a._)(r,{method:"GET",cache:"no-store"}),s=t.totalPage;s&&"number"==typeof s?p(s):p(1),e(t.images)}catch(e){t(e)}})}catch(e){console.error("Error: ",e.message)}finally{t&&"object"==typeof t&&(r(e=>t?[...e,...t]:[...e]),d(e=>e+1)),l(!1)}};return(0,o.useEffect)(()=>{(async()=>{await g()})()},[h]),s.jsx(n.Provider,{value:{gallery:t,setGallery:r,loadingGallery:c,getGallery:g,displayImage:h,handleDisplayImages:e=>{e!==h&&(r([]),d(1),p(null),l(!1),x(e))}},children:e})},l=()=>{let e=(0,o.useContext)(n);if(!e)throw Error("useGallery must be used within a GalleryProvider");return e}},34220:(e,t,r)=>{"use strict";r.d(t,{GridProvider:()=>a,N:()=>n});var s=r(10326),o=r(17577);let i=(0,o.createContext)(void 0),a=({children:e})=>{let[t,r]=(0,o.useState)(!1);return s.jsx(i.Provider,{value:{grid:t,setGrid:r},children:e})},n=()=>{let e=(0,o.useContext)(i);if(!e)throw Error("useGrid must be used within a GridProvider");return e}},17444:(e,t,r)=>{"use strict";r.d(t,{ImageProvider:()=>a,d:()=>n});var s=r(10326),o=r(17577);let i=(0,o.createContext)(void 0),a=({children:e})=>{let[t,r]=(0,o.useState)(null);return s.jsx(i.Provider,{value:{image:t,setImage:r},children:e})},n=()=>{let e=(0,o.useContext)(i);if(!e)throw Error("useImage must be used within an ImageProvider");return e}},87562:(e,t,r)=>{"use strict";r.d(t,{MessageProvider:()=>l,U:()=>u});var s=r(10326),o=r(17577),i=r(42757),a=r(92417),n=r(7843);let c=(0,o.createContext)(void 0),l=({children:e})=>{let[t,r]=(0,o.useState)(null),[l,u]=(0,o.useState)(!1),[d,m]=(0,o.useState)(null),{setGallery:p}=(0,a.d)(),h=(0,o.useCallback)(async(e,t)=>{let s={token:(0,i.DO)(),type:e,message:t};r(e=>e?[...e,s]:[s]),Array.isArray(s.message)&&s.message.map(e=>{p(t=>t?[e,...t]:[e])})},[p]),x=(0,o.useCallback)(async e=>{u(!0);let t=null;try{t=await new Promise(async(t,r)=>{try{let{image:r}=await (0,n._)(`${(0,i.Aq)()}/send-message`,{method:"POST",body:JSON.stringify({prompt:e})});t(r)}catch(e){r(e)}})}catch(e){console.error("Error sending message to bot: ",e.message)}finally{return u(!1),t}},[]);return(0,o.useEffect)(()=>{if(t){let e=t[t.length-1];e&&"user"===e.type&&e.token!==d&&(m(e.token),(async()=>{let t=e.message;try{let e=await x(t);if(!e)throw Error("No image returned from the bot");h("bot",[e])}catch(e){h("__error","An excepted error occurred while processing the message. Please try again, if the error persists, contact our support."),console.error("Error sending message to bot: ",e)}})())}},[d,t,h,x]),s.jsx(c.Provider,{value:{messages:t,loadingMessage:l,setMessages:r,sendMessage:x,newMessage:h},children:e})},u=()=>{let e=(0,o.useContext)(c);if(!e)throw Error("useMessage must be used within a MessageProvider");return e}},75272:(e,t,r)=>{"use strict";r.d(t,{A:()=>n,SidebarProvider:()=>a});var s=r(10326),o=r(17577);let i=(0,o.createContext)(void 0),a=({children:e})=>{let[t,r]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{r(!1)},[]),s.jsx(i.Provider,{value:{menuVisible:t,handleSidebar:()=>{r(e=>!e)}},children:e})},n=()=>{let e=(0,o.useContext)(i);if(!e)throw Error("useSidebar must be used within a SidebarProvider");return e}},90224:(e,t,r)=>{"use strict";r.d(t,{F:()=>n,ThemeProvider:()=>a});var s=r(10326),o=r(17577);let i=(0,o.createContext)(void 0),a=({children:e})=>{let[t,r]=(0,o.useState)("system"),a=e=>{switch(e){case"dark":r("dark"),localStorage.setItem("theme","dark"),document.documentElement.classList.add("dark"),document.documentElement.classList.remove("light");break;case"light":r("light"),localStorage.setItem("theme","light"),document.documentElement.classList.add("light"),document.documentElement.classList.remove("dark");break;default:r("system"),localStorage.setItem("theme","system"),n()}},n=()=>{window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.classList.add("dark"),document.documentElement.classList.remove("light")):(document.documentElement.classList.add("light"),document.documentElement.classList.remove("dark"))};return(0,o.useEffect)(()=>{let e=localStorage.getItem("theme");if(a(e??"system"),"system"===e){let e=window.matchMedia("(prefers-color-scheme: dark)");return e.addEventListener("change",n),()=>{e.removeEventListener("change",n)}}},[]),s.jsx(i.Provider,{value:{theme:t,handleTheme:a},children:e})},n=()=>{let e=(0,o.useContext)(i);if(!e)throw Error("useTheme must be used within a ThemeProvider");return e}},50359:(e,t,r)=>{"use strict";r.d(t,{UserProvider:()=>l,a:()=>u});var s=r(10326),o=r(17577),i=r(90224),a=r(42757),n=r(7843);let c=(0,o.createContext)(void 0),l=({children:e})=>{let[t,r]=(0,o.useState)(null),[l,u]=(0,o.useState)(null),[d,m]=(0,o.useState)(!1);(0,o.useRef)(!1);let{theme:p}=(0,i.F)(),h=async()=>{},x=async e=>{m(!0);let t=null;try{t=await new Promise(async t=>{try{let r=await (0,n._)(`${(0,a.Aq)()}/users`,{method:"GET",cache:"no-store",headers:{Authorization:`Bearer ${e}`}});t(r&&"object"==typeof r&&Object.keys(r).length>0?r:null)}catch(e){console.log("Login process failed:",e),t(null)}})}catch(e){console.log(e)}t?(r(e),u(t),localStorage.setItem("userToken",e),localStorage.setItem("user",JSON.stringify(t))):await h(),m(!1)};return s.jsx(c.Provider,{value:{credentials:t,user:l,loadingLogin:d,initGoogle:h,login:x,logout:()=>{r(null),u(null),localStorage.removeItem("userToken"),localStorage.removeItem("user")},isUserLoggedIn:()=>null!==t&&null!==l},children:e})},u=()=>{let e=(0,o.useContext)(c);if(!e)throw Error("useUser must be used within a UserProvider");return e}},7843:(e,t,r)=>{"use strict";r.d(t,{_:()=>s});let s=async(e,t={})=>{let r=localStorage.getItem("userToken"),s={"Content-Type":"application/json",Authorization:`Bearer ${r||""}`},o={...t,headers:{...s,...t.headers}};try{let t=await fetch(e,o);if(!t.ok){let e=await t.json();throw 401===t.status&&(localStorage.removeItem("userToken"),localStorage.removeItem("user"),window.location.reload(),console.log("logout")),Error(e.message||"An error occurred")}return await t.json()}catch(e){throw console.error("Fetch error: ",e),e}}},42757:(e,t,r)=>{"use strict";r.d(t,{Aq:()=>n,DO:()=>a,gp:()=>i,p6:()=>o});var s=r(47463);function o(e){let t=new Date(e);return new Intl.DateTimeFormat("en-EN",{dateStyle:"long",timeStyle:"short"}).format(t)}let i=e=>{if(!e)return;let t=e.uri.startsWith("http")?e.uri:"https://picxob.borislukrece.pro/images/"+e.uri,r=document.createElement("a");r.href=t,r.download=e.uri,r.target="_blank",r.style.display="hidden",document.body.appendChild(r),r.click(),document.body.removeChild(r)};function a(){let e=(0,s.Z)();return`${e}`}function n(){return"https://picxob.borislukrece.pro/api"}},73652:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>y,metadata:()=>v});var s=r(19510),o=r(79355),i=r.n(o),a=r(11711),n=r.n(a);r(5023),r(51123);var c=r(9720),l=r(68570);let u=(0,l.createProxy)(String.raw`C:\Users\hp\Desktop\projects\picxob.borislukrece.com\picxob\src\app\context\ThemeContext.tsx#ThemeProvider`);(0,l.createProxy)(String.raw`C:\Users\hp\Desktop\projects\picxob.borislukrece.com\picxob\src\app\context\ThemeContext.tsx#useTheme`);let d=(0,l.createProxy)(String.raw`C:\Users\hp\Desktop\projects\picxob.borislukrece.com\picxob\src\app\context\SidebarContext.tsx#SidebarProvider`);(0,l.createProxy)(String.raw`C:\Users\hp\Desktop\projects\picxob.borislukrece.com\picxob\src\app\context\SidebarContext.tsx#useSidebar`);let m=(0,l.createProxy)(String.raw`C:\Users\hp\Desktop\projects\picxob.borislukrece.com\picxob\src\app\context\UserContext.tsx#UserProvider`);(0,l.createProxy)(String.raw`C:\Users\hp\Desktop\projects\picxob.borislukrece.com\picxob\src\app\context\UserContext.tsx#useUser`);let p=(0,l.createProxy)(String.raw`C:\Users\hp\Desktop\projects\picxob.borislukrece.com\picxob\src\app\context\MessageContext.tsx#MessageProvider`);(0,l.createProxy)(String.raw`C:\Users\hp\Desktop\projects\picxob.borislukrece.com\picxob\src\app\context\MessageContext.tsx#useMessage`);let h=(0,l.createProxy)(String.raw`C:\Users\hp\Desktop\projects\picxob.borislukrece.com\picxob\src\app\context\GalleryContext.tsx#GalleryProvider`);(0,l.createProxy)(String.raw`C:\Users\hp\Desktop\projects\picxob.borislukrece.com\picxob\src\app\context\GalleryContext.tsx#useGallery`);let x=(0,l.createProxy)(String.raw`C:\Users\hp\Desktop\projects\picxob.borislukrece.com\picxob\src\app\context\GridContext.tsx#GridProvider`);(0,l.createProxy)(String.raw`C:\Users\hp\Desktop\projects\picxob.borislukrece.com\picxob\src\app\context\GridContext.tsx#useGrid`);let g=(0,l.createProxy)(String.raw`C:\Users\hp\Desktop\projects\picxob.borislukrece.com\picxob\src\app\context\ImageContext.tsx#ImageProvider`);(0,l.createProxy)(String.raw`C:\Users\hp\Desktop\projects\picxob.borislukrece.com\picxob\src\app\context\ImageContext.tsx#useImage`);var b=r(36352);let v={title:"AI Image Generator - Create Your Own Images in One Click with PicXOB",description:"Use our AI image generator to create unique images. Perfect for artists, designers, and anyone looking to explore creativity with artificial intelligence.",keywords:"image generator, AI, artificial intelligence, image creation, digital art, PicXOB",authors:{name:"PicXOB"},openGraph:{title:"AI Image Generator",description:"Create unique images with our AI image generator.",images:[{url:`${(0,b.FX)()??""}/presentation.png`}],url:(0,b.FX)()??"",type:"website"},twitter:{card:"summary_large_image",title:"AI Image Generator",description:"Create unique images with our AI image generator.",images:[`${(0,b.FX)()}/presentation.png`]},alternates:{canonical:(0,b.FX)()??""}};function y({children:e}){return(0,s.jsxs)("html",{lang:"en",className:"dark",children:[(0,s.jsxs)("head",{children:[s.jsx("link",{rel:"icon",href:"/favicon.ico",sizes:"any"}),s.jsx("link",{rel:"apple-touch-icon",href:"/apple-touch-icon.png",sizes:"any"}),s.jsx("link",{rel:"manifest",href:"/site.webmanifest"})]}),(0,s.jsxs)("body",{className:`${i().variable} ${n().variable} antialiased transition-colors duration-150`,children:[s.jsx(u,{children:s.jsx(d,{children:s.jsx(m,{children:s.jsx(h,{children:s.jsx(x,{children:s.jsx(p,{children:s.jsx(g,{children:e})})})})})})}),s.jsx(c.default,{src:"https://accounts.google.com/gsi/client?hl=en",strategy:"beforeInteractive"})]})]})}},36352:(e,t,r)=>{"use strict";r.d(t,{DO:()=>o,FX:()=>i,uj:()=>a});var s=r(9576);function o(){let e=(0,s.Z)();return`${e}`}function i(){return"https://picxob.borislukrece.pro"}function a(){return{DB_HOST:process.env.DB_HOST,DB_USER:process.env.DB_USER,DB_NAME:process.env.DB_NAME,DB_PASSWORD:process.env.DB_PASSWORD}}},51123:()=>{},5023:()=>{}};