"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[728],{6799:function(e,t,o){o.d(t,{GalleryProvider:function(){return l},d:function(){return u}});var r=o(7437),n=o(2265),a=o(5351),i=o(2342);let s=(0,n.createContext)(void 0),l=e=>{let{children:t}=e,[o,l]=(0,n.useState)([]),[u,c]=(0,n.useState)(!1),[d,m]=(0,n.useState)(1),[h,g]=(0,n.useState)(null),[w,f]=(0,n.useState)("public"),y=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50;if(u||null!==h&&d>=h)return;let t=null;try{var o,r;c(!0);let n="private"===w?"".concat(null!==(o=(0,a.Aq)())&&void 0!==o?o:"","/users/images?page=").concat(d,"&entries=").concat(e):"".concat(null!==(r=(0,a.Aq)())&&void 0!==r?r:"","/images?page=").concat(d,"&entries=").concat(e);t=await new Promise(async(e,t)=>{try{let t=await (0,i._)(n,{method:"GET",cache:"no-store"}),o=t.totalPage;o&&"number"==typeof o?g(o):g(1),e(t.images)}catch(e){t(e)}})}catch(e){console.error("Error: ",e.message)}finally{t&&"object"==typeof t&&(l(e=>t?[...e,...t]:[...e]),m(e=>e+1)),c(!1)}};return(0,n.useEffect)(()=>{(async()=>{await y()})()},[w]),(0,r.jsx)(s.Provider,{value:{gallery:o,setGallery:l,loadingGallery:u,getGallery:y,displayImage:w,handleDisplayImages:e=>{e!==w&&(l([]),m(1),g(null),c(!1),f(e))}},children:t})},u=()=>{let e=(0,n.useContext)(s);if(!e)throw Error("useGallery must be used within a GalleryProvider");return e}},7979:function(e,t,o){o.d(t,{GridProvider:function(){return i},N:function(){return s}});var r=o(7437),n=o(2265);let a=(0,n.createContext)(void 0),i=e=>{let{children:t}=e,[o,i]=(0,n.useState)(!1);return(0,r.jsx)(a.Provider,{value:{grid:o,setGrid:i},children:t})},s=()=>{let e=(0,n.useContext)(a);if(!e)throw Error("useGrid must be used within a GridProvider");return e}},5627:function(e,t,o){o.d(t,{ImageProvider:function(){return i},d:function(){return s}});var r=o(7437),n=o(2265);let a=(0,n.createContext)(void 0),i=e=>{let{children:t}=e,[o,i]=(0,n.useState)(null);return(0,r.jsx)(a.Provider,{value:{image:o,setImage:i},children:t})},s=()=>{let e=(0,n.useContext)(a);if(!e)throw Error("useImage must be used within an ImageProvider");return e}},7693:function(e,t,o){o.d(t,{MessageProvider:function(){return u},U:function(){return c}});var r=o(7437),n=o(2265),a=o(5351),i=o(6799),s=o(2342);let l=(0,n.createContext)(void 0),u=e=>{let{children:t}=e,[o,u]=(0,n.useState)(null),[c,d]=(0,n.useState)(!1),[m,h]=(0,n.useState)(null),{setGallery:g}=(0,i.d)(),w=(0,n.useCallback)(async(e,t)=>{let o={token:(0,a.DO)(),type:e,message:t};u(e=>e?[...e,o]:[o]),Array.isArray(o.message)&&o.message.map(e=>{g(t=>t?[e,...t]:[e])})},[g]),f=(0,n.useCallback)(async e=>{d(!0);let t=null;try{t=await new Promise(async(t,o)=>{try{let{image:o}=await (0,s._)("".concat((0,a.Aq)(),"/send-message"),{method:"POST",body:JSON.stringify({prompt:e})});t(o)}catch(e){o(e)}})}catch(e){console.error("Error sending message to bot: ",e.message)}finally{return d(!1),t}},[]);return(0,n.useEffect)(()=>{if(o){let e=o[o.length-1];e&&"user"===e.type&&e.token!==m&&(h(e.token),(async()=>{let t=e.message;try{let e=await f(t);if(!e)throw Error("No image returned from the bot");w("bot",[e])}catch(e){w("__error","An excepted error occurred while processing the message. Please try again, if the error persists, contact our support."),console.error("Error sending message to bot: ",e)}})())}},[m,o,w,f]),(0,r.jsx)(l.Provider,{value:{messages:o,loadingMessage:c,setMessages:u,sendMessage:f,newMessage:w},children:t})},c=()=>{let e=(0,n.useContext)(l);if(!e)throw Error("useMessage must be used within a MessageProvider");return e}},6968:function(e,t,o){o.d(t,{A:function(){return s},SidebarProvider:function(){return i}});var r=o(7437),n=o(2265);let a=(0,n.createContext)(void 0),i=e=>{let{children:t}=e,[o,i]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{i(window.innerWidth>=1024)},[]),(0,r.jsx)(a.Provider,{value:{menuVisible:o,handleSidebar:()=>{i(e=>!e)}},children:t})},s=()=>{let e=(0,n.useContext)(a);if(!e)throw Error("useSidebar must be used within a SidebarProvider");return e}},4868:function(e,t,o){o.d(t,{F:function(){return s},ThemeProvider:function(){return i}});var r=o(7437),n=o(2265);let a=(0,n.createContext)(void 0),i=e=>{let{children:t}=e,[o,i]=(0,n.useState)("system"),s=e=>{switch(e){case"dark":i("dark"),localStorage.setItem("theme","dark"),document.documentElement.classList.add("dark"),document.documentElement.classList.remove("light");break;case"light":i("light"),localStorage.setItem("theme","light"),document.documentElement.classList.add("light"),document.documentElement.classList.remove("dark");break;default:i("system"),localStorage.setItem("theme","system"),l()}},l=()=>{window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.classList.add("dark"),document.documentElement.classList.remove("light")):(document.documentElement.classList.add("light"),document.documentElement.classList.remove("dark"))};return(0,n.useEffect)(()=>{let e=localStorage.getItem("theme");if(s(null!=e?e:"system"),"system"===e){let e=window.matchMedia("(prefers-color-scheme: dark)");return e.addEventListener("change",l),()=>{e.removeEventListener("change",l)}}},[]),(0,r.jsx)(a.Provider,{value:{theme:o,handleTheme:s},children:t})},s=()=>{let e=(0,n.useContext)(a);if(!e)throw Error("useTheme must be used within a ThemeProvider");return e}},6006:function(e,t,o){o.d(t,{UserProvider:function(){return u},a:function(){return c}});var r=o(7437),n=o(2265),a=o(4868),i=o(5351),s=o(2342);let l=(0,n.createContext)(void 0),u=e=>{let{children:t}=e,[o,u]=(0,n.useState)(null),[c,d]=(0,n.useState)(null),[m,h]=(0,n.useState)(!1),g=(0,n.useRef)(!1),{theme:w}=(0,a.F)(),f=e=>{v(e.credential)},y=async()=>{window.google&&!p()&&(g.current||(window.google.accounts.id.initialize({client_id:"717428728866-sb327sbru3vc2g0elm1fkhl5rt3j2o1i.apps.googleusercontent.com",auto_select:!0,use_fedcm_for_prompt:!0,cancel_on_tap_outside:!0,prompt_parent_id:"googleSignInButton",callback:f,context:"use",ux_mode:"popup",select_by:"auto"}),g.current=!0),document.getElementById("googleSignInButton")?window.google.accounts.id.renderButton(document.getElementById("googleSignInButton"),{theme:"system"===w?(window.matchMedia("(prefers-color-scheme: dark)").matches,"filled_black"):w,size:"large",text:"signin_with",type:window.matchMedia("(max-width: 640px)").matches?"icon":"standard"}):console.warn("googleSignInButton element doesn't exist."),window.google.accounts.id.prompt())},v=async e=>{h(!0);let t=null;try{t=await new Promise(async t=>{try{let o=await (0,s._)("".concat((0,i.Aq)(),"/users"),{method:"GET",cache:"no-store",headers:{Authorization:"Bearer ".concat(e)}});t(o&&"object"==typeof o&&Object.keys(o).length>0?o:null)}catch(e){console.log("Login process failed:",e),t(null)}})}catch(e){console.log(e)}t?(u(e),d(t),localStorage.setItem("userToken",e),localStorage.setItem("user",JSON.stringify(t))):await y(),h(!1)},p=()=>null!==o&&null!==c;return(0,r.jsx)(l.Provider,{value:{credentials:o,user:c,loadingLogin:m,initGoogle:y,login:v,logout:()=>{u(null),d(null),localStorage.removeItem("userToken"),localStorage.removeItem("user"),window.google&&(window.google.accounts.id.revoke(o,()=>{console.log("User disconnected.")}),window.google.accounts.id.disableAutoSelect(),window.location.reload())},isUserLoggedIn:p},children:t})},c=()=>{let e=(0,n.useContext)(l);if(!e)throw Error("useUser must be used within a UserProvider");return e}},2342:function(e,t,o){o.d(t,{_:function(){return r}});let r=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=localStorage.getItem("userToken"),r={...t,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o||""),...t.headers}};try{let t=await fetch(e,r);if(!t.ok){let e=await t.json();throw 401===e.status&&(localStorage.removeItem("userToken"),localStorage.removeItem("user"),window.google&&(window.google.accounts.id.revoke(o,()=>{console.log("User disconnected.")}),window.google.accounts.id.disableAutoSelect(),window.location.reload())),Error(e.message||"An error occurred")}return await t.json()}catch(e){throw console.error("Fetch error: ",e),e}}},5351:function(e,t,o){o.d(t,{Aq:function(){return l},DO:function(){return s},YE:function(){return n},gp:function(){return i},p6:function(){return a}});var r=o(920);function n(){let e=["What would you like to imagine today?","What type of image would you like to create?","Tell me, what do you wish to design today?","What creation inspires you today?","Do you have an image idea in mind?","What is your artistic project for the day?","What do you want to explore visually?","Share your vision for a new creation!","What story would you like to see illustrated?","What elements would you like to combine in your image?","How do you envision your next artwork?","Do you have a theme in mind for your creation?","What do you want to highlight in your image?","What atmosphere do you want to create today?","What details would you like to include in your design?"],t=Math.floor(Math.random()*e.length);return e[t]}function a(e){let t=new Date(e);return new Intl.DateTimeFormat("en-EN",{dateStyle:"long",timeStyle:"short"}).format(t)}let i=e=>{if(!e)return;let t=e.uri.startsWith("http")?e.uri:"https://picxob.borislukrece.pro/images/"+e.uri,o=document.createElement("a");o.href=t,o.download=e.uri,o.target="_blank",o.style.display="hidden",document.body.appendChild(o),o.click(),document.body.removeChild(o)};function s(){let e=(0,r.Z)();return"".concat(e)}function l(){return"https://picxob.borislukrece.pro/api"}}}]);