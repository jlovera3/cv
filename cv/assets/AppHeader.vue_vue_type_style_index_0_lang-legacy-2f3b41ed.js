System.register(["./index-legacy-7f89eae3.js"],(function(e,t){"use strict";var n,r,s,o,a,i,l,c,d;return{setters:[e=>{n=e.D,r=e.d,s=e.r,o=e.o,a=e.c,i=e.w,l=e.u,c=e.I,d=e.g}],execute:function(){var u=document.createElement("style");u.textContent=".bg-banner{background-image:url(assets/banner2-9d89b80c.png)}.bg-banner-notch{background-image:url(assets/banner-notch-cc4ffee3.png)}\n",document.head.appendChild(u);const m="assets/me-white-de031a5f.png",p=(e=>e.CapacitorPlatforms=(e=>{const t=new Map;t.set("web",{name:"web"});const n=e.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:t};return n.addPlatform=(e,t)=>{n.platforms.set(e,t)},n.setPlatform=e=>{n.platforms.has(e)&&(n.currentPlatform=n.platforms.get(e))},n})(e))("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{});/*! Capacitor: https://capacitorjs.com/ - MIT License */var f;p.addPlatform,p.setPlatform,function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"}(f||(f={}));class g extends Error{constructor(e,t,n){super(e),this.message=e,this.code=t,this.data=n}}const w=e=>{var t,n,r,s,o;const a=e.CapacitorCustomPlatform||null,i=e.Capacitor||{},l=i.Plugins=i.Plugins||{},c=e.CapacitorPlatforms,d=(null===(t=null==c?void 0:c.currentPlatform)||void 0===t?void 0:t.getPlatform)||(()=>null!==a?a.name:(e=>{var t,n;return(null==e?void 0:e.androidBridge)?"android":(null===(n=null===(t=null==e?void 0:e.webkit)||void 0===t?void 0:t.messageHandlers)||void 0===n?void 0:n.bridge)?"ios":"web"})(e)),u=(null===(n=null==c?void 0:c.currentPlatform)||void 0===n?void 0:n.isNativePlatform)||(()=>"web"!==d()),m=(null===(r=null==c?void 0:c.currentPlatform)||void 0===r?void 0:r.isPluginAvailable)||(e=>{const t=w.get(e);return!!(null==t?void 0:t.platforms.has(d()))||!!p(e)}),p=(null===(s=null==c?void 0:c.currentPlatform)||void 0===s?void 0:s.getPluginHeader)||(e=>{var t;return null===(t=i.PluginHeaders)||void 0===t?void 0:t.find((t=>t.name===e))}),w=new Map,h=(null===(o=null==c?void 0:c.currentPlatform)||void 0===o?void 0:o.registerPlugin)||((e,t={})=>{const n=w.get(e);if(n)return console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`),n.proxy;const r=d(),s=p(e);let o;const c=n=>{let l;const c=(...c)=>{const d=(async()=>(!o&&r in t?o=o="function"==typeof t[r]?await t[r]():t[r]:null!==a&&!o&&"web"in t&&(o=o="function"==typeof t.web?await t.web():t.web),o))().then((t=>{const o=((t,n)=>{var o,a;if(!s){if(t)return null===(a=t[n])||void 0===a?void 0:a.bind(t);throw new g(`"${e}" plugin is not implemented on ${r}`,f.Unimplemented)}{const r=null==s?void 0:s.methods.find((e=>n===e.name));if(r)return"promise"===r.rtype?t=>i.nativePromise(e,n.toString(),t):(t,r)=>i.nativeCallback(e,n.toString(),t,r);if(t)return null===(o=t[n])||void 0===o?void 0:o.bind(t)}})(t,n);if(o){const e=o(...c);return l=null==e?void 0:e.remove,e}throw new g(`"${e}.${n}()" is not implemented on ${r}`,f.Unimplemented)}));return"addListener"===n&&(d.remove=async()=>l()),d};return c.toString=()=>`${n.toString()}() { [capacitor code] }`,Object.defineProperty(c,"name",{value:n,writable:!1,configurable:!1}),c},u=c("addListener"),m=c("removeListener"),h=(e,t)=>{const n=u({eventName:e},t),r=async()=>{const r=await n;m({eventName:e,callbackId:r},t)},s=new Promise((e=>n.then((()=>e({remove:r})))));return s.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await r()},s},b=new Proxy({},{get(e,t){switch(t){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return s?h:u;case"removeListener":return m;default:return c(t)}}});return l[e]=b,w.set(e,{name:e,proxy:b,platforms:new Set([...Object.keys(t),...s?[r]:[]])}),b});return i.convertFileSrc||(i.convertFileSrc=e=>e),i.getPlatform=d,i.handleError=t=>e.console.error(t),i.isNativePlatform=u,i.isPluginAvailable=m,i.pluginMethodNoop=(e,t,n)=>Promise.reject(`${n} does not have an implementation of "${t}".`),i.registerPlugin=h,i.Exception=g,i.DEBUG=!!i.DEBUG,i.isLoggingEnabled=!!i.isLoggingEnabled,i.platform=i.getPlatform(),i.isNative=i.isNativePlatform(),i},h=(e=>e.Capacitor=w(e))("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}),b=h.registerPlugin;h.Plugins;class v{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);const n=this.windowListeners[e];n&&!n.registered&&this.addWindowListener(n);const r=async()=>this.removeListener(e,t),s=Promise.resolve({remove:r});return Object.defineProperty(s,"remove",{value:async()=>{console.warn("Using addListener() without 'await' is deprecated."),await r()}}),s}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t){const n=this.listeners[e];n&&n.forEach((e=>e(t)))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:e=>{this.notifyListeners(t,e)}}}unimplemented(e="not implemented"){return new h.Exception(e,f.Unimplemented)}unavailable(e="not available"){return new h.Exception(e,f.Unavailable)}async removeListener(e,t){const n=this.listeners[e];if(!n)return;const r=n.indexOf(t);this.listeners[e].splice(r,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}e("W",v);const y=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),P=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class L extends v{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach((e=>{if(e.length<=0)return;let[n,r]=e.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");n=P(n).trim(),r=P(r).trim(),t[n]=r})),t}async setCookie(e){try{const t=y(e.key),n=y(e.value),r=`; expires=${(e.expires||"").replace("expires=","")}`,s=(e.path||"/").replace("path=",""),o=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${n||""}${r}; path=${s}; ${o};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}b("CapacitorCookies",{web:()=>new L});const C=(e,t={})=>{const n=Object.assign({method:e.method||"GET",headers:e.headers},t),r=((e={})=>{const t=Object.keys(e);return Object.keys(e).map((e=>e.toLocaleLowerCase())).reduce(((n,r,s)=>(n[r]=e[t[s]],n)),{})})(e.headers)["content-type"]||"";if("string"==typeof e.data)n.body=e.data;else if(r.includes("application/x-www-form-urlencoded")){const t=new URLSearchParams;for(const[n,r]of Object.entries(e.data||{}))t.set(n,r);n.body=t.toString()}else if(r.includes("multipart/form-data")){const t=new FormData;if(e.data instanceof FormData)e.data.forEach(((e,n)=>{t.append(n,e)}));else for(const n of Object.keys(e.data))t.append(n,e.data[n]);n.body=t;const r=new Headers(n.headers);r.delete("content-type"),n.headers=r}else(r.includes("application/json")||"object"==typeof e.data)&&(n.body=JSON.stringify(e.data));return n};class E extends v{async request(e){const t=C(e,e.webFetchExtra),n=((e,t=!0)=>e?Object.entries(e).reduce(((e,n)=>{const[r,s]=n;let o,a;return Array.isArray(s)?(a="",s.forEach((e=>{o=t?encodeURIComponent(e):e,a+=`${r}=${o}&`})),a.slice(0,-1)):(o=t?encodeURIComponent(s):s,a=`${r}=${o}`),`${e}&${a}`}),"").substr(1):null)(e.params,e.shouldEncodeUrlParams),r=n?`${e.url}?${n}`:e.url,s=await fetch(r,t),o=s.headers.get("content-type")||"";let a,i,{responseType:l="text"}=s.ok?e:{};switch(o.includes("application/json")&&(l="json"),l){case"arraybuffer":case"blob":i=await s.blob(),a=await(async e=>new Promise(((t,n)=>{const r=new FileReader;r.onload=()=>{const e=r.result;t(e.indexOf(",")>=0?e.split(",")[1]:e)},r.onerror=e=>n(e),r.readAsDataURL(e)})))(i);break;case"json":a=await s.json();break;default:a=await s.text()}const c={};return s.headers.forEach(((e,t)=>{c[t]=e})),{data:a,headers:c,status:s.status,url:s.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}b("CapacitorHttp",{web:()=>new E});const j=e("D",b("Device",{web:()=>n((()=>t.import("./web-legacy-f6aa244b.js")),void 0).then((e=>new e.DeviceWeb))})),$=d("img",{src:m,class:"h-16 w-16 rounded-[100%] ml-6 mt-4"},null,-1),k=d("img",{src:m,class:"h-16 w-16 rounded-[100%] ml-6 mt-0"},null,-1);e("_",r({__name:"AppHeader",setup(e){const t=s(!1);return(async()=>{const e=await j.getInfo();t.value="ios"===e.platform,console.log(e)})(),(e,n)=>t.value?(o(),a(l(c),{key:1,class:"h-[16vh] pt-[env(safe-area-inset-top)] bg-banner-notch bg-cover bg-center bg-no-repeat flex"},{default:i((()=>[k])),_:1})):(o(),a(l(c),{key:0,class:"h-[12vh] pt-[env(safe-area-inset-top)] bg-banner bg-cover bg-center bg-no-repeat flex"},{default:i((()=>[$])),_:1}))}}))}}}));
