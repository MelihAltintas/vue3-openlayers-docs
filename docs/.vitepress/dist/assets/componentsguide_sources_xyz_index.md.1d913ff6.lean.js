import{r as n,b as a,o as s,c as t,w as e,v as o,d as p,e as l,t as c,f as u,F as r,a as i}from"./app.1e7d02ad.js";const k={setup:()=>({center:n([40,40]),projection:n("EPSG:4326"),zoom:n(8),rotation:n(0),selected:n("https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png")})},d=p("option",{value:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"},"OSM",-1),g=p("option",{value:"https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"},"GOOGLE",-1);k.render=function(n,i,k,h,m,y){const f=a("ol-view"),q=a("ol-source-xyz"),z=a("ol-tile-layer"),v=a("ol-map");return s(),t(r,null,[e(p("select",{"onUpdate:modelValue":i[1]||(i[1]=n=>h.selected=n)},[d,g],512),[[o,h.selected]]),l(" "+c(h.selected)+" ",1),p(v,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"400px"}},{default:u((()=>[p(f,{ref:"view",center:h.center,rotation:h.rotation,zoom:h.zoom,projection:h.projection},null,8,["center","rotation","zoom","projection"]),p(z,null,{default:u((()=>[p(q,{url:h.selected},null,8,["url"])])),_:1})])),_:1})],64)};const h=i('',9),m=i('',27),y='{"title":"ol-source-xyz","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"}],"relativePath":"componentsguide/sources/xyz/index.md","lastUpdated":1624465700183}',f={};const q=Object.assign(f,{expose:[],setup:function(n){return(n,e)=>{const o=a("ClientOnly");return s(),t("div",null,[h,p(o,null,{default:u((()=>[p(k)])),_:1}),m])}}});export default q;export{y as __pageData};
