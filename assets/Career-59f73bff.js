import{d as b,r as M,o as p,m,c as j,w as a,a as o,u as e,h as P,n as A,I as x,g as t,p as _,e as g,t as v,j as I,F as f,q as w,s as S,v as $,_ as D,x as B,y as L,z as C,b as h,A as y,B as U,C as O,k as V}from"./index-62867806.js";import{D as E,_ as G}from"./AppHeader.vue_vue_type_style_index_0_lang-91d982d7.js";const J=l=>(S("data-v-76ae1bff"),l=l(),$(),l),N={class:"w-full flex"},z=["src"],F=J(()=>t("p",null,null,-1)),R=b({__name:"ProjectModal",props:{project:{}},setup(l){const s=l,i=M(!1),n=async()=>{const c=await E.getInfo();i.value=c.platform==="ios",console.log(c)};function d(){w.dismiss()}return n(),(c,r)=>(p(),m(f,null,[i.value?(p(),j(e(x),{key:1,class:"h-[16vh] pt-[env(safe-area-inset-top)] bg-banner-notch bg-cover bg-center bg-no-repeat flex"})):(p(),j(e(x),{key:0,class:"h-[12vh] pt-[env(safe-area-inset-top)] bg-banner bg-cover bg-center bg-no-repeat flex"},{default:a(()=>[o(e(P),{class:"h-10 w-10 m-8 icon-white",icon:e(A),onClick:r[0]||(r[0]=u=>d())},null,8,["icon"])]),_:1})),o(e(I),null,{default:a(()=>[t("div",N,[o(e(_),{class:"h-20 w-20 rounded-[100%]"},{default:a(()=>[t("img",{src:"".concat(s.project.logo),class:"h-20 w-20"},null,8,z)]),_:1}),o(e(g),{class:"my-8 mx-4"},{default:a(()=>[t("h3",null,v(s.project.name),1),F]),_:1})])]),_:1})],64))}});const H=D(R,[["__scopeId","data-v-76ae1bff"]]),W=["src"],q=b({__name:"Project",props:{project:{}},setup(l){const s=l;async function i(){return(await w.create({component:H,componentProps:{project:s.project}})).present()}return(n,d)=>(p(),m("div",{onClick:d[0]||(d[0]=c=>i())},[o(e(_),{class:"h-[80%] w-[80%] rounded-[100%] mb-0"},{default:a(()=>[t("img",{src:"".concat(s.project.logo)},null,8,W)]),_:1})]))}}),T=l=>(S("data-v-9bc6a43e"),l=l(),$(),l),K={class:"h-auto w-20 justify-center align-middle text-center ml-[32%]"},Q=["src"],X={class:"whitespace-break-spaces"},Y=T(()=>t("h1",null,"Projects",-1)),Z={class:"flex flex-wrap"},ee=T(()=>t("h1",null,"Responsabilities",-1)),oe={class:"whitespace-break-spaces"},ae=b({__name:"CompanyModal",props:{company:{}},setup(l){const s=l,i=w,n=M([]);B(()=>{s.company.projects.forEach((c,r)=>{setTimeout(()=>{n.value.push(r)},r*100)})});function d(){i.dismiss()}return(c,r)=>(p(),m(f,null,[o(e(x),{class:"flex mt-[env(safe-area-inset-top)] p-4 pt-10"},{default:a(()=>[o(e(P),{src:e(L),onClick:r[0]||(r[0]=u=>d()),class:"h-6 w-6"},null,8,["src"]),t("div",K,[t("img",{src:"/companies/".concat(s.company.logo,".png"),class:"max-w-[100%] max-h-[100%]"},null,8,Q)])]),_:1}),o(e(I),null,{default:a(()=>[o(e(_),null,{default:a(()=>[o(e(C),{class:"text-center pb-0"},{default:a(()=>[o(e(h),null,{default:a(()=>[o(e(g),null,{default:a(()=>[t("h1",X,v(s.company.role),1)]),_:1})]),_:1})]),_:1}),o(e(y),{class:"m-4"},{default:a(()=>[o(e(g),null,{default:a(()=>[t("h2",null,v(s.company.duration),1)]),_:1})]),_:1})]),_:1}),o(e(_),null,{default:a(()=>[o(e(C),{class:"text-center pb-0"},{default:a(()=>[o(e(h),null,{default:a(()=>[o(e(g),null,{default:a(()=>[Y]),_:1})]),_:1})]),_:1}),o(e(y),{class:""},{default:a(()=>[t("div",Z,[(p(!0),m(f,null,U(s.company.projects,(u,k)=>(p(),m("div",{key:k,class:O(["w-1/4",{"project-animate":n.value.includes(k)}])},[o(q,{project:u},null,8,["project"])],2))),128))])]),_:1})]),_:1}),o(e(_),null,{default:a(()=>[o(e(C),{class:"text-center pb-0"},{default:a(()=>[o(e(h),null,{default:a(()=>[o(e(g),null,{default:a(()=>[ee]),_:1})]),_:1})]),_:1}),o(e(y),null,{default:a(()=>[(p(!0),m(f,null,U(s.company.responsabilities,u=>(p(),j(e(h),null,{default:a(()=>[o(e(g),null,{default:a(()=>[t("p",oe,v(u),1)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1})],64))}});const te=D(ae,[["__scopeId","data-v-9bc6a43e"]]),le={class:"p-5 grid justify-center items-center sm:flex sm:justify-around sm:pt-20 sm:px-10"},se=["src"],ce=b({__name:"Career",setup(l){const s=[{name:"Meinestadt",logo:"logo-meinestadt",url:"https://www.meinestadt.de/",duration:"Jan 2023 - Jan 2025",role:"Frontend Developer",responsabilities:["Develop the app that represents the company's web portal","Communicate, improve and apply internal product concepts","Be in charge of the deployment of apps in the stores"],projects:[{name:"Meinestadt App",logo:"/projects/meine-app-logo.png",googleUrl:"https://play.google.com/store/apps/details?id=com.meinestadt.appv3&gl=DE",appleUrl:"https://apps.apple.com/de/app/meinestadt-de/id1603822055"}]},{name:"NTT Data",logo:"logo_nttdata",role:"FullStack Developer, Team Leader",duration:"Nov 2021 - Dec 2022",responsabilities:["Working on several apps simultaneously to resolve bugs in production","To be in charge of a team of 4 people managing and organizing the tasks of 3 projects while covering a paternity leave","Develop and enhance apps for external customers improving product quality and effectiveness"],url:"https://www.nttdata.com/global/en/",projects:[{name:"Reciclos",logo:"/projects/reciclos-app-logo.png",googleUrl:"https://play.google.com/store/apps/details?id=com.ecoembes.reciclos",appleUrl:"https://apps.apple.com/es/app/reciclos-tu-app-para-reciclar/id1487106432"},{name:"Tarjeta Social Digital",logo:"/projects/tsd-app-logo.png",googleUrl:"https://play.google.com/store/apps/details?id=es.megss.tsu.android",appleUrl:"https://apps.apple.com/es/app/tarjeta-social-digital/id1444737323"},{name:"ColeChef",logo:"/projects/colechef-app-logo.png",googleUrl:"https://play.google.com/store/apps/details?id=com.colechef.educa.app.movil",appleUrl:"https://apps.apple.com/es/app/colechef/id1510330780"},{name:"ColeChef Pro",logo:"/projects/colepro-app-logo.png",googleUrl:"https://play.google.com/store/apps/details?id=com.colechef.educa.app.monitores",appleUrl:""},{name:"Calidad del Aire",logo:"/projects/calidad-app-logo.png",googleUrl:"https://play.google.com/store/apps/details?id=es.juntadeandalucia.cma.cda",appleUrl:"https://apps.apple.com/uz/app/calidad-del-aire-andaluc%C3%ADa/id1667232352"},{name:"Digitalízate Plus",logo:"/projects/logo_fundae.svg",googleUrl:"",appleUrl:""},{name:"Roble",logo:"/projects/mova_icon.png"}]},{name:"Magtel",logo:"logo-magtel",role:"Fullstack developer",duration:"Jun 2021 - Oct 2021",responsabilities:["WEB, Android and iOS application development in Ionic - Angular - Cordova. BackEnd with Laravel.","Applications: 'Museums of Malaga', 'Our Lady of la Leche' and 'Nuestra Señora del Juncal, Galeón'","Version control: GIT. Agile, Scrum.","Virtual Reality and Augmented Reality on Android devices."],url:"https://magtel.es/",projects:[{name:"Museos de Málaga",logo:"/projects/museos-app.png",googleUrl:"https://play.google.com/store/apps/details?id=com.magtel.museosmalaga"},{name:"Universidad de Málaga",logo:"/projects/malaga-app.png",googleUrl:"https://play.google.com/store/apps/details?id=es.uma.appuma",appleUrl:"https://apps.apple.com/es/app/uma/id997729022"},{name:"Our Lady Of La Leche",logo:"/projects/laleche-app.png",googleUrl:"https://play.google.com/store/apps/details?id=com.overlaping.mission_nombre_de_dios"},{name:"Exposición Galeón Juncal",logo:"/projects/galeon-app.png",googleUrl:"https://play.google.com/store/apps/details?id=com.magtel.galeon"}]},{name:"PTV Telecom",logo:"logo-ptv-telecom",role:"Mobile developer",duration:"Sept 2020 - Jun 2021",responsabilities:["Development of WEB, Android and iOS application from scratch for the technical service of PTV Telecom clients.","Using Ionic - Angular, Github, HTML, CSS, TypeScript, and PHP drivers.","Deployment in AppStore and GooglePlay.","Use of native Google Maps, sending SMS, card payments ..."],url:"https://www.ptvtelecom.com/",projects:[{name:"PTV SAT",logo:"/projects/ptvsat-app.png",googleUrl:"https://play.google.com/store/apps/details?id=com.ptv.sat&pcampaignid=web_share",appleUrl:"https://apps.apple.com/es/app/ptv-sat/id1542582727?l=en"},{name:"Mi PTV",logo:"/projects/miptv-app.png",googleUrl:"https://play.google.com/store/apps/details?id=com.ptvtelecom.sistemas.miptv&pcampaignid=web_share",appleUrl:"https://apps.apple.com/jm/app/mi-ptv/id1019419013"}]}];async function i(n){return(await w.create({component:te,componentProps:{company:n}})).present()}return(n,d)=>(p(),j(e(V),null,{default:a(()=>[o(G),o(e(I),{fullscreen:!0,class:"blue-background"},{default:a(()=>[t("div",le,[(p(),m(f,null,U(s,(c,r)=>o(e(_),{class:"animate-fade-left w-80 text-center flex justify-center items-center my-2 h-28 hover:bg-slate-200 active:bg-slate-50",onClick:u=>i(c)},{default:a(()=>[o(e(y),{class:"p-0 text-center flex justify-center items-center"},{default:a(()=>[t("img",{src:"/companies/".concat(c.logo,".png"),class:"max-w-[60%] max-h-auto"},null,8,se)]),_:2},1024)]),_:2},1032,["onClick"])),64))])]),_:1})]),_:1}))}});export{ce as default};