System.register(["./index-legacy-3af63de1.js","./AppHeader.vue_vue_type_style_index_0_lang-legacy-0034c0c1.js"],(function(e,a){"use strict";var o,t,l,p,s,n,c,r,i,d,g,m,u,f,h,v,b,y,_,j,w,x,U,k,C,A,S,T,M,P,D;return{setters:[e=>{o=e.d,t=e.r,l=e.o,p=e.m,s=e.c,n=e.w,c=e.a,r=e.u,i=e.h,d=e.n,g=e.I,m=e.g,u=e.p,f=e.e,h=e.t,v=e.j,b=e.F,y=e.q,_=e.s,j=e.v,w=e._,x=e.x,U=e.y,k=e.z,C=e.b,A=e.A,S=e.B,T=e.C,M=e.k},e=>{P=e.D,D=e._}],execute:function(){var a=document.createElement("style");a.textContent=".bg-banner[data-v-76ae1bff]{background-image:url(/cv/assets/banner-5a21def5.png)}.bg-banner-notch[data-v-76ae1bff]{background-image:url(/cv/assets/banner-notch-cc4ffee3.png)}.icon-white[data-v-76ae1bff]{color:#fff}#container[data-v-9bc6a43e]{text-align:center;position:absolute;left:0;right:0;top:10%;transform:translateY(-50%)}#container strong[data-v-9bc6a43e]{font-size:20px;line-height:26px}#container p[data-v-9bc6a43e]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container a[data-v-9bc6a43e]{text-decoration:none}@keyframes growAnimation-9bc6a43e{0%{transform:scale(.8);opacity:0}to{transform:scale(1);opacity:1}}.project-animate[data-v-9bc6a43e]{animation:growAnimation-9bc6a43e .5s ease-in-out forwards}.blue-background{background-image:url(https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif)}\n",document.head.appendChild(a);const L={class:"w-full flex"},E=["src"],I=(e=>(_("data-v-76ae1bff"),e=e(),j(),e))((()=>m("p",null,null,-1))),z=w(o({__name:"ProjectModal",props:{project:{}},setup(e){const a=e,o=t(!1);return(async()=>{const e=await P.getInfo();o.value="ios"===e.platform,console.log(e)})(),(e,t)=>(l(),p(b,null,[o.value?(l(),s(r(g),{key:1,class:"h-[16vh] pt-[env(safe-area-inset-top)] bg-banner-notch bg-cover bg-center bg-no-repeat flex"})):(l(),s(r(g),{key:0,class:"h-[12vh] pt-[env(safe-area-inset-top)] bg-banner bg-cover bg-center bg-no-repeat flex"},{default:n((()=>[c(r(i),{class:"h-10 w-10 m-8 icon-white",icon:r(d),onClick:t[0]||(t[0]=e=>{y.dismiss()})},null,8,["icon"])])),_:1})),c(r(v),null,{default:n((()=>[m("div",L,[c(r(u),{class:"h-20 w-20 rounded-[100%]"},{default:n((()=>[m("img",{src:`${a.project.logo}`,class:"h-20 w-20"},null,8,E)])),_:1}),c(r(f),{class:"my-8 mx-4"},{default:n((()=>[m("h3",null,h(a.project.name),1),I])),_:1})])])),_:1})],64))}}),[["__scopeId","data-v-76ae1bff"]]),G=["src"],J=o({__name:"Project",props:{project:{}},setup(e){const a=e;return(e,o)=>(l(),p("div",{onClick:o[0]||(o[0]=e=>async function(){const e=y.create({component:z,componentProps:{project:a.project}});return(await e).present()}())},[c(r(u),{class:"h-[80%] w-[80%] rounded-[100%] mb-0"},{default:n((()=>[m("img",{src:`${a.project.logo}`},null,8,G)])),_:1})]))}}),O=e=>(_("data-v-9bc6a43e"),e=e(),j(),e),V={class:"h-auto w-20 justify-center align-middle text-center ml-[32%]"},B=["src"],R={class:"whitespace-break-spaces"},F=O((()=>m("h1",null,"Projects",-1))),N={class:"flex flex-wrap"},$=O((()=>m("h1",null,"Responsabilities",-1))),q={class:"whitespace-break-spaces"},H=w(o({__name:"CompanyModal",props:{company:{}},setup(e){const a=e,o=y,d=t([]);return x((()=>{a.company.projects.forEach(((e,a)=>{setTimeout((()=>{d.value.push(a)}),100*a)}))})),(e,t)=>(l(),p(b,null,[c(r(g),{class:"flex mt-[env(safe-area-inset-top)] p-4 pt-10"},{default:n((()=>[c(r(i),{src:r(U),onClick:t[0]||(t[0]=e=>{o.dismiss()}),class:"h-6 w-6"},null,8,["src"]),m("div",V,[m("img",{src:`/companies/${a.company.logo}.png`,class:"max-w-[100%] max-h-[100%]"},null,8,B)])])),_:1}),c(r(v),null,{default:n((()=>[c(r(u),null,{default:n((()=>[c(r(k),{class:"text-center pb-0"},{default:n((()=>[c(r(C),null,{default:n((()=>[c(r(f),null,{default:n((()=>[m("h1",R,h(a.company.role),1)])),_:1})])),_:1})])),_:1}),c(r(A),{class:"m-4"},{default:n((()=>[c(r(f),null,{default:n((()=>[m("h2",null,h(a.company.duration),1)])),_:1})])),_:1})])),_:1}),c(r(u),null,{default:n((()=>[c(r(k),{class:"text-center pb-0"},{default:n((()=>[c(r(C),null,{default:n((()=>[c(r(f),null,{default:n((()=>[F])),_:1})])),_:1})])),_:1}),c(r(A),{class:""},{default:n((()=>[m("div",N,[(l(!0),p(b,null,S(a.company.projects,((e,a)=>(l(),p("div",{key:a,class:T(["w-1/4",{"project-animate":d.value.includes(a)}])},[c(J,{project:e},null,8,["project"])],2)))),128))])])),_:1})])),_:1}),c(r(u),null,{default:n((()=>[c(r(k),{class:"text-center pb-0"},{default:n((()=>[c(r(C),null,{default:n((()=>[c(r(f),null,{default:n((()=>[$])),_:1})])),_:1})])),_:1}),c(r(A),null,{default:n((()=>[(l(!0),p(b,null,S(a.company.responsabilities,(e=>(l(),s(r(C),null,{default:n((()=>[c(r(f),null,{default:n((()=>[m("p",q,h(e),1)])),_:2},1024)])),_:2},1024)))),256))])),_:1})])),_:1})])),_:1})],64))}}),[["__scopeId","data-v-9bc6a43e"]]),W={class:"p-5 grid justify-center items-center sm:flex sm:justify-around sm:pt-20 sm:px-10"},Y=["src"];e("default",o({__name:"Career",setup(e){const a=[{name:"Meinestadt",logo:"logo-meinestadt",url:"https://www.meinestadt.de/",duration:"Jan 2023 - Jan 2025",role:"Frontend Developer",responsabilities:["Develop the app that represents the company's web portal","Communicate, improve and apply internal product concepts","Be in charge of the deployment of apps in the stores"],projects:[{name:"Meinestadt App",logo:"/projects/meine-app-logo.png",googleUrl:"https://play.google.com/store/apps/details?id=com.meinestadt.appv3&gl=DE",appleUrl:"https://apps.apple.com/de/app/meinestadt-de/id1603822055"}]},{name:"NTT Data",logo:"logo_nttdata",role:"FullStack Developer, Team Leader",duration:"Nov 2021 - Dec 2022",responsabilities:["Working on several apps simultaneously to resolve bugs in production","To be in charge of a team of 4 people managing and organizing the tasks of 3 projects while covering a paternity leave","Develop and enhance apps for external customers improving product quality and effectiveness"],url:"https://www.nttdata.com/global/en/",projects:[{name:"Reciclos",logo:"/projects/reciclos-app-logo.png",googleUrl:"https://play.google.com/store/apps/details?id=com.ecoembes.reciclos",appleUrl:"https://apps.apple.com/es/app/reciclos-tu-app-para-reciclar/id1487106432"},{name:"Tarjeta Social Digital",logo:"/projects/tsd-app-logo.png",googleUrl:"https://play.google.com/store/apps/details?id=es.megss.tsu.android",appleUrl:"https://apps.apple.com/es/app/tarjeta-social-digital/id1444737323"},{name:"ColeChef",logo:"/projects/colechef-app-logo.png",googleUrl:"https://play.google.com/store/apps/details?id=com.colechef.educa.app.movil",appleUrl:"https://apps.apple.com/es/app/colechef/id1510330780"},{name:"ColeChef Pro",logo:"/projects/colepro-app-logo.png",googleUrl:"https://play.google.com/store/apps/details?id=com.colechef.educa.app.monitores",appleUrl:""},{name:"Calidad del Aire",logo:"/projects/calidad-app-logo.png",googleUrl:"https://play.google.com/store/apps/details?id=es.juntadeandalucia.cma.cda",appleUrl:"https://apps.apple.com/uz/app/calidad-del-aire-andaluc%C3%ADa/id1667232352"},{name:"Digitalízate Plus",logo:"/projects/logo_fundae.svg",googleUrl:"",appleUrl:""},{name:"Roble",logo:"/projects/mova_icon.png"}]},{name:"Magtel",logo:"logo-magtel",role:"Fullstack developer",duration:"Jun 2021 - Oct 2021",responsabilities:["WEB, Android and iOS application development in Ionic - Angular - Cordova. BackEnd with Laravel.","Applications: 'Museums of Malaga', 'Our Lady of la Leche' and 'Nuestra Señora del Juncal, Galeón'","Version control: GIT. Agile, Scrum.","Virtual Reality and Augmented Reality on Android devices."],url:"https://magtel.es/",projects:[{name:"Museos de Málaga",logo:"/projects/museos-app.png",googleUrl:"https://play.google.com/store/apps/details?id=com.magtel.museosmalaga"},{name:"Universidad de Málaga",logo:"/projects/malaga-app.png",googleUrl:"https://play.google.com/store/apps/details?id=es.uma.appuma",appleUrl:"https://apps.apple.com/es/app/uma/id997729022"},{name:"Our Lady Of La Leche",logo:"/projects/laleche-app.png",googleUrl:"https://play.google.com/store/apps/details?id=com.overlaping.mission_nombre_de_dios"},{name:"Exposición Galeón Juncal",logo:"/projects/galeon-app.png",googleUrl:"https://play.google.com/store/apps/details?id=com.magtel.galeon"}]},{name:"PTV Telecom",logo:"logo-ptv-telecom",role:"Mobile developer",duration:"Sept 2020 - Jun 2021",responsabilities:["Development of WEB, Android and iOS application from scratch for the technical service of PTV Telecom clients.","Using Ionic - Angular, Github, HTML, CSS, TypeScript, and PHP drivers.","Deployment in AppStore and GooglePlay.","Use of native Google Maps, sending SMS, card payments ..."],url:"https://www.ptvtelecom.com/",projects:[{name:"PTV SAT",logo:"/projects/ptvsat-app.png",googleUrl:"https://play.google.com/store/apps/details?id=com.ptv.sat&pcampaignid=web_share",appleUrl:"https://apps.apple.com/es/app/ptv-sat/id1542582727?l=en"},{name:"Mi PTV",logo:"/projects/miptv-app.png",googleUrl:"https://play.google.com/store/apps/details?id=com.ptvtelecom.sistemas.miptv&pcampaignid=web_share",appleUrl:"https://apps.apple.com/jm/app/mi-ptv/id1019419013"}]}];return(e,o)=>(l(),s(r(M),null,{default:n((()=>[c(D),c(r(v),{fullscreen:!0,class:"blue-background"},{default:n((()=>[m("div",W,[(l(),p(b,null,S(a,((e,a)=>c(r(u),{class:"animate-fade-left w-80 text-center flex justify-center items-center my-2 h-28 hover:bg-slate-200 active:bg-slate-50",onClick:a=>async function(e){const a=y.create({component:H,componentProps:{company:e}});return(await a).present()}(e)},{default:n((()=>[c(r(A),{class:"p-0 text-center flex justify-center items-center"},{default:n((()=>[m("img",{src:`/companies/${e.logo}.png`,class:"max-w-[60%] max-h-auto"},null,8,Y)])),_:2},1024)])),_:2},1032,["onClick"]))),64))])])),_:1})])),_:1}))}}))}}}));
