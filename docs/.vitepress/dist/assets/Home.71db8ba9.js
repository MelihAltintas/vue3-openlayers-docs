import{l as e,u as t,m as a,n as s,o as i,c as o,d as l,p as n,h as c,t as r,_ as d,q as v,s as f,F as u,x as p,b as m,y as k}from"./app.1e7d02ad.js";v("data-v-0cb9fda2");const h={key:0,class:"home-hero"},x={key:0,class:"figure"},y={key:1,id:"main-title",class:"title"},g={key:2,class:"description"};f();var _=e({expose:[],setup(e){const{site:v,frontmatter:f}=t(),u=a((()=>{const{heroImage:e,heroText:t,tagline:a,actionLink:s,actionText:i}=f.value;return e||t||a||s&&i})),p=a((()=>f.value.heroText||v.value.title));return(e,t)=>s(u)?(i(),o("header",h,[s(f).heroImage?(i(),o("figure",x,[l("img",{class:"image",src:s(n)(s(f).heroImage),alt:s(f).heroAlt},null,8,["src","alt"])])):c("v-if",!0),s(p)?(i(),o("h1",y,r(s(p)),1)):c("v-if",!0),s(f).tagline?(i(),o("p",g,r(s(f).tagline),1)):c("v-if",!0),s(f).actionLink&&s(f).actionText?(i(),o(d,{key:3,item:{link:s(f).actionLink,text:s(f).actionText},class:"action"},null,8,["item"])):c("v-if",!0),s(f).altActionLink&&s(f).altActionText?(i(),o(d,{key:4,item:{link:s(f).altActionLink,text:s(f).altActionText},class:"action alt"},null,8,["item"])):c("v-if",!0)])):c("v-if",!0)}});_.__scopeId="data-v-0cb9fda2",v("data-v-e39c13e0");const I={key:0,class:"home-features"},T={class:"wrapper"},b={class:"container"},A={class:"features"},L={key:0,class:"title"},$={key:1,class:"details"};f();var j=e({expose:[],setup(e){const{frontmatter:n}=t(),d=a((()=>n.value.features&&n.value.features.length>0)),v=a((()=>n.value.features?n.value.features:[]));return(e,t)=>s(d)?(i(),o("div",I,[l("div",T,[l("div",b,[l("div",A,[(i(!0),o(u,null,p(s(v),((e,t)=>(i(),o("section",{key:t,class:"feature"},[e.title?(i(),o("h2",L,r(e.title),1)):c("v-if",!0),e.details?(i(),o("p",$,r(e.details),1)):c("v-if",!0)])))),128))])])])])):c("v-if",!0)}});j.__scopeId="data-v-e39c13e0",v("data-v-30918238");const q={key:0,class:"footer"},w={class:"container"},C={class:"text"};f();var F=e({expose:[],setup(e){const{frontmatter:a}=t();return(e,t)=>s(a).footer?(i(),o("footer",q,[l("div",w,[l("p",C,r(s(a).footer),1)])])):c("v-if",!0)}});F.__scopeId="data-v-30918238",v("data-v-32eddf2f");const z={class:"home","aria-labelledby":"main-title"},B={class:"home-content"};f();var D=e({expose:[],setup:e=>(e,t)=>{const a=m("Content");return i(),o("main",z,[l(_),k(e.$slots,"hero",{},void 0,!0),l(j),l("div",B,[l(a)]),k(e.$slots,"features",{},void 0,!0),l(F),k(e.$slots,"footer",{},void 0,!0)])}});D.__scopeId="data-v-32eddf2f";export default D;