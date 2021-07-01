import{r as n,b as a,o as s,c as t,w as o,d as p,a as e,h as l}from"./app.3cdf7d30.js";const c={setup:()=>({center:n([-98.8449,19.6869]),projection:n("EPSG:4326"),zoom:n(15),rotation:n(0),radius:n(40),strokeWidth:n(10),strokeColor:n("red")})};c.render=function(n,e,l,c,u,k){const i=a("ol-view"),r=a("ol-source-osm"),g=a("ol-tile-layer"),d=a("ol-geom-multi-polygon"),m=a("ol-style-stroke"),h=a("ol-style"),y=a("ol-feature"),f=a("ol-source-vector"),q=a("ol-vector-layer"),v=a("ol-map");return s(),t(v,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"400px"}},{default:o((()=>[p(i,{ref:"view",center:c.center,rotation:c.rotation,zoom:c.zoom,projection:c.projection},null,8,["center","rotation","zoom","projection"]),p(g,null,{default:o((()=>[p(r)])),_:1}),p(q,null,{default:o((()=>[p(f,null,{default:o((()=>[p(y,null,{default:o((()=>[p(d,{coordinates:[[[[-98.844959,19.691586],[-98.842749,19.69098],[-98.84217,19.693122],[-98.844358,19.693667],[-98.844959,19.691586]]],[[[-98.84777,19.684212],[-98.849079,19.680596],[-98.845453,19.679585],[-98.844466,19.683384],[-98.84777,19.684212]]]]},null,8,["coordinates"]),p(h,null,{default:o((()=>[p(m,{color:c.strokeColor,width:c.strokeWidth},null,8,["color","width"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})};const u=e('',6),k=l(" ## Properties "),i=p("h1",{id:"coordinates"},[p("a",{class:"header-anchor",href:"#coordinates","aria-hidden":"true"},"#"),l(" coordinates")],-1),r=p("ul",null,[p("li",null,[p("strong",null,"Type"),l(": "),p("code",null,"number[][][][]"),l(" An array of polygons with coordinates in the map's projection.")])],-1),g='{"title":"ol-geom-multi-polygon","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"}],"relativePath":"componentsguide/geometries/geommultipolygon/index.md","lastUpdated":1624465545541}',d={};const m=Object.assign(d,{expose:[],setup:function(n){return(n,e)=>{const l=a("ClientOnly");return s(),t("div",null,[u,p(l,null,{default:o((()=>[p(c)])),_:1}),k,i,r])}}});export default m;export{g as __pageData};