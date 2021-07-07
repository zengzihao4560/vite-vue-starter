var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,c=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,r=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&c(e,a,t[a]);if(s)for(var a of s(t))o.call(t,a)&&c(e,a,t[a]);return e};import{_ as i,a as u,b as l,c as d,d as p,p as v,e as m,o as h,f as b,w as f,g as x,h as y,u as g,r as _,i as O,t as k,j as C,k as A,l as P,m as V,n as E,q as T,s as j,v as w,x as L,y as I,z as H,F as M,A as R,B as S}from"./vendor.b917d661.js";let F;const N={};var U=p({name:"Home"});const D=f("data-v-1c3cb368");v("data-v-1c3cb368");const B={class:"home-container page-container"},q=x("img",{class:"vue-element-plus-logo",alt:"Vue logo",src:"./assets/logo.03d6d6da.png"},null,-1),$=x("div",{class:"page-title"},"Vite2.x + Vue3.x + TypeScript + Element Plus",-1);m();const z=D(((e,t,a,s,n,o)=>(h(),b("div",B,[q,$]))));U.render=z,U.__scopeId="data-v-1c3cb368";const G=y({state:{text:"This is Vuex Root.state.text"},getters:{},mutations:{},actions:{},modules:{numFactoryModule:{namespaced:!0,state:{name:"numFactory-module",count:1},mutations:{DOUBLE_COUNT(e){e.count*=2}},actions:{}}}}),W=Symbol("vue-store");var X=p({name:"Vuex",setup(){const e=g(W),s=_({text:O((()=>e.state.text)),count:O((()=>e.state.numFactoryModule.count))});return n=r({},k(s)),t(n,a({double:()=>{e.commit("numFactoryModule/DOUBLE_COUNT")}}));var n}});const J={class:"vuex-container page-container"},K=x("div",{class:"page-title"},"Vuex Test Page",-1),Q=V("double");X.render=function(e,t,a,s,n,o){const c=P("el-button");return h(),b("div",J,[K,x("p",null,"store Root is: "+C(e.text),1),x("p",null,"store doubleCount is: "+C(e.count),1),x(c,{type:"primary",onClick:e.double},{default:A((()=>[Q])),_:1},8,["onClick"])])};var Y=p({name:"Vuex",setup(){const e=E(0);return{count:e,increment:()=>{e.value+=1}}}});const Z=f("data-v-249d2418");v("data-v-249d2418");const ee={class:"test-container page-container"},te=x("div",{class:"page-title"},"Unit Test Page",-1);m();const ae=Z(((e,t,a,s,n,o)=>(h(),b("div",ee,[te,x("p",null,"count is: "+C(e.count),1),x("button",{onClick:t[1]||(t[1]=(...t)=>e.increment&&e.increment(...t))},"increment")]))));Y.render=ae,Y.__scopeId="data-v-249d2418";const se=[{path:"/",name:"Home",component:U},{path:"/vuex",name:"Vuex",component:X},{path:"/axios",name:"Axios",component:()=>function(e,t){if(!t)return e();if(void 0===F){const e=document.createElement("link").relList;F=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in N)return;N[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":F,t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>import("./Axios.af822966.js")),["./assets/Axios.af822966.js","./assets/Axios.fd4f0749.css","./assets/vendor.b917d661.js"])},{path:"/test",name:"Test",component:Y}],ne=T({history:j(),routes:se});v("data-v-f972afcc");const oe={class:"header"},ce=x("i",{class:"icon el-icon-s-promotion"},null,-1),re=V(" GitHub ");m();var ie=p({setup(e){const t=w(),a=()=>{window.open("https://github.com/XPoet/vite-vue3-starter")};return(e,s)=>(h(),b("div",oe,[x("div",{class:"title",onClick:s[1]||(s[1]=e=>L(t).push("/"))}," Vite2.x + Vue3.x + TypeScript Starter "),x("div",{class:"go-github",onClick:a},[ce,re])]))}});ie.__scopeId="data-v-f972afcc";var ue=p({name:"Nav",setup(){const e=w(),t=_({navList:[{name:"Home",isActive:!1,path:"/"},{name:"Vuex",isActive:!1,path:"/vuex"},{name:"Axios",isActive:!1,path:"/axios"},{name:"Test",isActive:!1,path:"/test"}],navClick(t){e.push(t.path)}}),a=e=>{t.navList.forEach((t=>{const a=t;return a.isActive=a.path===e,a}))};return I((()=>e.currentRoute.value),(e=>{a(e.path)})),H((()=>{e.isReady().then((()=>{a(e.currentRoute.value.path)}))})),r({},k(t))}});const le=f("data-v-3d10c317");v("data-v-3d10c317");const de={class:"nav"},pe={class:"nav-list"};m();const ve=le(((e,t,a,s,n,o)=>(h(),b("aside",de,[x("ul",pe,[(h(!0),b(M,null,R(e.navList,((t,a)=>(h(),b("li",{class:["nav-item flex-center",{active:t.isActive}],key:a,onClick:a=>e.navClick(t)},C(t.name),11,["onClick"])))),128))])]))));ue.render=ve,ue.__scopeId="data-v-3d10c317";var me=p({name:"Main",components:{Header:ie,Nav:ue}});const he=f("data-v-3ee40658");v("data-v-3ee40658");const be={class:"main-container"},fe={class:"top"},xe={class:"bottom"},ye={class:"left"},ge={class:"right"},_e={class:"content"};m();const Oe=he(((e,t,a,s,n,o)=>{const c=P("Header"),r=P("Nav"),i=P("router-view");return h(),b("main",be,[x("div",fe,[x(c)]),x("div",xe,[x("div",ye,[x(r)]),x("div",ge,[x("div",_e,[x(i)])])])])}));me.render=Oe,me.__scopeId="data-v-3ee40658";var ke=p({name:"App",components:{Main:me}});ke.render=function(e,t,a,s,n,o){const c=P("Main");return h(),b(c)};const Ce=S(ke);var Ae;(Ae=Ce,Ae.use(i).use(u).use(l).use(d),Ae).use(ne).use(G,W).mount("#app");
