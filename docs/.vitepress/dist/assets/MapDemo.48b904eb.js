import{r as o,b as e,o as t,c as n,w as r,d as i}from"./app.3cdf7d30.js";const a={setup:()=>({center:o([40,40]),projection:o("EPSG:4326"),zoom:o(8),rotation:o(0)})};a.render=function(o,a,l,s,c,p){const m=e("ol-view"),d=e("ol-source-osm"),u=e("ol-tile-layer"),f=e("ol-map");return t(),n(f,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"400px"}},{default:r((()=>[i(m,{ref:"view",center:s.center,rotation:s.rotation,zoom:s.zoom,projection:s.projection},null,8,["center","rotation","zoom","projection"]),i(u,null,{default:r((()=>[i(d)])),_:1})])),_:1})};export{a as _};
