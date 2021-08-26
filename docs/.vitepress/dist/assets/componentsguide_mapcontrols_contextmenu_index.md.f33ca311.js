import{r as n,i as a,d as s,o as t,c as p,w as o,e,j as c,a as l}from"./app.381f6a48.js";import{m as u}from"./marker.4b23fbad.js";const r={setup(){const s=n([40,40]),t=n("EPSG:4326"),p=n(8),o=n(0),e=n([]),c=n(null),l=n(null),r=a("ol-feature"),k=a("ol-geom");return e.value=[{text:"Center map here",classname:"some-style-class",callback:n=>{l.value.setCenter(n.coordinate)}},{text:"Add a Marker",classname:"some-style-class",icon:u,callback:n=>{console.log(n);let a=new r({geometry:new k.Point(n.coordinate)});c.value.source.addFeature(a)}},"-"],{center:s,projection:t,zoom:p,rotation:o,contextMenuItems:e,marker:u,markers:c,view:l}}};r.render=function(n,a,c,l,u,r){const k=s("ol-view"),i=s("ol-source-osm"),m=s("ol-tile-layer"),d=s("ol-context-menu"),g=s("ol-source-vector"),f=s("ol-style-icon"),h=s("ol-style"),y=s("ol-vector-layer"),v=s("ol-map");return t(),p(v,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"400px"},ref:"map"},{default:o((()=>[e(k,{center:l.center,rotation:l.rotation,zoom:l.zoom,projection:l.projection,ref:"view"},null,8,["center","rotation","zoom","projection"]),e(m,null,{default:o((()=>[e(i)])),_:1}),e(d,{items:l.contextMenuItems},null,8,["items"]),e(y,null,{default:o((()=>[e(g,{ref:"markers"},null,512),e(h,null,{default:o((()=>[e(f,{src:l.marker,scale:.1},null,8,["src","scale"])])),_:1})])),_:1})])),_:1},512)};const k=e("h1",{id:"ol-context-menu"},[e("a",{class:"header-anchor",href:"#ol-context-menu","aria-hidden":"true"},"#"),c(" ol-context-menu")],-1),i=e("blockquote",null,[e("p",null,"A contextmenu extension for OpenLayers.")],-1),m=l('<h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Add context menu to map</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-map</span> <span class="token attr-name">:loadTilesWhileAnimating</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:loadTilesWhileInteracting</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token style language-css"><span class="token property">height</span><span class="token punctuation">:</span>400px</span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>map<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-view</span> <span class="token attr-name">:center</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:rotation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rotation<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:zoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zoom<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:projection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>projection<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>view<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-tile-layer</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-source-osm</span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-tile-layer</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-context-menu</span> <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>contextMenuItems<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-vector-layer</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-source-vector</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>markers<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-source-vector</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-style</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-style-icon</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>marker<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:scale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0.1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-style-icon</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-style</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-vector-layer</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-map</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>\n    ref<span class="token punctuation">,</span>\n    inject\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n\n<span class="token keyword">import</span> marker <span class="token keyword">from</span> <span class="token string">&quot;@/assets/marker.png&quot;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> center <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> projection <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;EPSG:4326&#39;</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> zoom <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> rotation <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n\n        <span class="token keyword">const</span> contextMenuItems <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n        <span class="token keyword">const</span> markers <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">const</span> view <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">const</span> Feature <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;ol-feature&#39;</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> Geom <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;ol-geom&#39;</span><span class="token punctuation">)</span>\n\n\n        contextMenuItems<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n                text<span class="token operator">:</span> <span class="token string">&#39;Center map here&#39;</span><span class="token punctuation">,</span>\n                classname<span class="token operator">:</span> <span class="token string">&#39;some-style-class&#39;</span><span class="token punctuation">,</span> <span class="token comment">// add some CSS rules</span>\n                <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n                    view<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">setCenter</span><span class="token punctuation">(</span>val<span class="token punctuation">.</span>coordinate<span class="token punctuation">)</span>\n\n                <span class="token punctuation">}</span> <span class="token comment">// `center` is your callback function</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                text<span class="token operator">:</span> <span class="token string">&#39;Add a Marker&#39;</span><span class="token punctuation">,</span>\n                classname<span class="token operator">:</span> <span class="token string">&#39;some-style-class&#39;</span><span class="token punctuation">,</span> <span class="token comment">// you can add this icon with a CSS class</span>\n                <span class="token comment">// instead of `icon` property (see next line)</span>\n                icon<span class="token operator">:</span> marker<span class="token punctuation">,</span> <span class="token comment">// this can be relative or absolute</span>\n                <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>\n                    <span class="token keyword">let</span> feature <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Feature</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                        geometry<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Geom<span class="token punctuation">.</span>Point</span><span class="token punctuation">(</span>val<span class="token punctuation">.</span>coordinate<span class="token punctuation">)</span><span class="token punctuation">,</span>\n                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                    markers<span class="token punctuation">.</span>value<span class="token punctuation">.</span>source<span class="token punctuation">.</span><span class="token function">addFeature</span><span class="token punctuation">(</span>feature<span class="token punctuation">)</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token string">&#39;-&#39;</span> <span class="token comment">// this is a separator</span>\n        <span class="token punctuation">]</span>\n\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            center<span class="token punctuation">,</span>\n            projection<span class="token punctuation">,</span>\n            zoom<span class="token punctuation">,</span>\n            rotation<span class="token punctuation">,</span>\n            contextMenuItems<span class="token punctuation">,</span>\n            marker<span class="token punctuation">,</span>\n            markers<span class="token punctuation">,</span>\n            view\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="properties"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2><h1 id="eventtype"><a class="header-anchor" href="#eventtype" aria-hidden="true">#</a> eventType</h1><ul><li><strong>Type</strong>: <code>String</code></li><li><strong>Default</strong>: <code>contextmenu</code></li></ul><p>The listening event type (You could use &#39;click&#39;, &#39;dblclick&#39;)</p><h1 id="defaultitems"><a class="header-anchor" href="#defaultitems" aria-hidden="true">#</a> defaultItems</h1><ul><li><strong>Type</strong>: <code>Boolean</code></li><li><strong>Default</strong>: <code>true</code></li></ul><p>Whether the default items (which are: Zoom In/Out) are enabled</p><h1 id="width"><a class="header-anchor" href="#width" aria-hidden="true">#</a> width</h1><ul><li><strong>Type</strong>: <code>Number</code></li><li><strong>Default</strong>: <code>150</code></li></ul><p>The menu&#39;s width</p><h1 id="items"><a class="header-anchor" href="#items" aria-hidden="true">#</a> items</h1><ul><li><strong>Type</strong>: <code>Array</code></li><li><strong>Default</strong>: <code>[]</code></li></ul><p>An array of object|string</p>',17),d='{"title":"ol-context-menu","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"}],"relativePath":"componentsguide/mapcontrols/contextmenu/index.md","lastUpdated":1628604521729}',g={};const f=Object.assign(g,{expose:[],setup:function(n){return(n,a)=>{const c=s("ClientOnly");return t(),p("div",null,[k,i,e(c,null,{default:o((()=>[e(r)])),_:1}),m])}}});export default f;export{d as __pageData};
