import{r as n,d as a,o as s,c as t,w as o,e as p,F as e,g as c,j as l,a as u}from"./app.4dd796d2.js";import{s as i}from"./star.309f7afc.js";const r={setup:()=>({center:n([40,40]),projection:n("EPSG:4326"),zoom:n(6),rotation:n(0),getRandomInRange:(n,a,s)=>1*(Math.random()*(a-n)+n).toFixed(s),starIcon:i})};r.render=function(n,l,u,i,r,k){const d=a("ol-view"),g=a("ol-source-osm"),m=a("ol-tile-layer"),f=a("ol-geom-point"),h=a("ol-style-icon"),q=a("ol-style"),y=a("ol-feature"),v=a("ol-animation-teleport"),w=a("ol-source-vector"),_=a("ol-vector-layer"),I=a("ol-map");return s(),t(I,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"700px"}},{default:o((()=>[p(d,{ref:"view",center:i.center,rotation:i.rotation,zoom:i.zoom,projection:i.projection},null,8,["center","rotation","zoom","projection"]),p(m,null,{default:o((()=>[p(g)])),_:1}),p(_,{updateWhileAnimating:!0,updateWhileInteracting:!0},{default:o((()=>[p(w,{ref:"vectorsource"},{default:o((()=>[p(v,{duration:2e3},{default:o((()=>[(s(),t(e,null,c(20,(n=>p(y,{key:n},{default:o((()=>[p(f,{coordinates:[i.getRandomInRange(24,45,3),i.getRandomInRange(35,41,3)]},null,8,["coordinates"]),p(q,null,{default:o((()=>[p(h,{src:i.starIcon,scale:.1},null,8,["src","scale"])])),_:1})])),_:2},1024))),64))])),_:1})])),_:1},512)])),_:1})])),_:1})};const k=p("h1",{id:"ol-animation-teleport"},[p("a",{class:"header-anchor",href:"#ol-animation-teleport","aria-hidden":"true"},"#"),l(" ol-animation-teleport")],-1),d=p("blockquote",null,[p("p",null,"Teleport animation for feature")],-1),g=u('',21),m='{"title":"ol-animation-teleport","description":"","frontmatter":{},"headers":[{"level":2,"title":"Properties","slug":"properties"}],"relativePath":"componentsguide/animations/teleport/index.md","lastUpdated":1628662093494}',f={};const h=Object.assign(f,{expose:[],setup:function(n){return(n,e)=>{const c=a("ClientOnly");return s(),t("div",null,[k,d,p(c,null,{default:o((()=>[p(r)])),_:1}),g])}}});export default h;export{m as __pageData};