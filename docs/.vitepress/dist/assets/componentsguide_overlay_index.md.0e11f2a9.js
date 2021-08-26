import{r as n,d as a,o as s,c as t,w as o,e,j as p,t as l,a as c}from"./app.381f6a48.js";const u={setup:()=>({center:n([40,40]),projection:n("EPSG:4326"),zoom:n(8),rotation:n(0)})},i={class:"overlay-content"},r=p(" Hello world!"),k=e("br",null,null,-1);u.render=function(n,c,u,d,g,h){const v=a("ol-view"),f=a("ol-source-osm"),m=a("ol-tile-layer"),y=a("ol-overlay"),w=a("ol-map");return s(),t(w,{style:{height:"400px"}},{default:o((()=>[e(v,{ref:"view",center:d.center,rotation:d.rotation,zoom:d.zoom,projection:d.projection},null,8,["center","rotation","zoom","projection"]),e(m,null,{default:o((()=>[e(f)])),_:1}),e(y,{position:[40,40]},{default:o((n=>[e("div",i,[r,k,p(" Position: "+l(n.position),1)])])),_:1})])),_:1})};const d=e("h1",{id:"vl-overlay"},[e("a",{class:"header-anchor",href:"#vl-overlay","aria-hidden":"true"},"#"),p(" vl-overlay")],-1),g=e("blockquote",null,[e("p",null,"HTML element attached to geographical coordinate")],-1),h=e("p",null,[e("code",null,"ol-overlay"),p(" component creates a HTML element that would be displayed over the map. It has "),e("strong",null,"default"),p(" scoped slot to render your custom content.")],-1),v=c('<h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Example below shows how to add custom content on to the map.</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-map</span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token style language-css"><span class="token property">height</span><span class="token punctuation">:</span>400px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-view</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>view<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:center</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:rotation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rotation<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:zoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zoom<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:projection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>projection<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-tile-layer</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-source-osm</span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-tile-layer</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-overlay</span> <span class="token attr-name">:position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[40,40]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slotProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>overlay-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n                Hello world!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>\n                Position: {{ slotProps.position }}\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-overlay</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-map</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n<span class="token selector">.overlay-content</span> <span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> #efefef<span class="token punctuation">;</span>\n    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 5px 10px <span class="token function">rgb</span><span class="token punctuation">(</span>2 2 2 / 20%<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token property">padding</span><span class="token punctuation">:</span> 10px 20px<span class="token punctuation">;</span>\n    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>\n    ref\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> center <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> projection <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;EPSG:4326&#39;</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> zoom <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> rotation <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            center<span class="token punctuation">,</span>\n            projection<span class="token punctuation">,</span>\n            zoom<span class="token punctuation">,</span>\n            rotation\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="properties"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2><h1 id="position"><a class="header-anchor" href="#position" aria-hidden="true">#</a> position</h1><ul><li><strong>Type</strong>: <code>number[]</code></li><li><strong>Required</strong></li></ul><p>Coordinate of the overlay position in view</p><h1 id="offset"><a class="header-anchor" href="#offset" aria-hidden="true">#</a> offset</h1><ul><li><strong>Type</strong>: <code>number[]</code></li><li><strong>Default</strong>: <code>[0, 0]</code></li></ul><p>XY axis offset in pixels used when positioning the overlay.</p><h1 id="positioning"><a class="header-anchor" href="#positioning" aria-hidden="true">#</a> positioning</h1><ul><li><strong>Type</strong>: <code>string</code></li><li><strong>Default</strong>: <code>top-left</code></li></ul><p>The overlay positioning relative to its Possible values: <code>bottom-left</code>, <code>bottom-center</code>, <code>bottom-right</code>, <code>center-left</code>, <code>center-center</code>, <code>center-right</code>, <code>top-left</code>, <code>top-center</code>, and <code>top-right</code>.</p><h1 id="stopevent"><a class="header-anchor" href="#stopevent" aria-hidden="true">#</a> stopEvent</h1><ul><li><strong>Type</strong>: <code>boolean</code></li><li><strong>Default</strong>: <code>true</code></li></ul><p>Whether pointer event propagation from overlay element to the map viewport should be stopped. When set to <code>true</code> the overlay will be placed in the same container with map controls.</p><h1 id="insertfirst"><a class="header-anchor" href="#insertfirst" aria-hidden="true">#</a> insertFirst</h1><ul><li><strong>Type</strong>: <code>boolean</code></li><li><strong>Default</strong>: <code>true</code></li></ul><p>Determines whether the overlay will be prepended or appended in the overlay container. When <code>stop-event</code> is set to <code>true</code> you will probably set <code>insert-first</code> to <code>true</code> so the overlay is displayed below controls.</p><h1 id="autopan"><a class="header-anchor" href="#autopan" aria-hidden="true">#</a> autoPan</h1><ul><li><strong>Type</strong>: <code>boolean</code></li><li><strong>Default</strong>: <code>false</code></li></ul><p>Enables map panning when the overlay will be added, so the overlay will be visible in the current viewport.</p><h1 id="autopanmargin"><a class="header-anchor" href="#autopanmargin" aria-hidden="true">#</a> autoPanMargin</h1><ul><li><strong>Type</strong>: <code>boolean</code></li><li><strong>Default</strong>: <code>20</code></li></ul><p>The margin (in pixels) between the overlay and the viewport borders.</p><h1 id="autopananimation"><a class="header-anchor" href="#autopananimation" aria-hidden="true">#</a> autoPanAnimation</h1><ul><li><strong>Type</strong>: <code>Object</code></li><li><strong>Default</strong>: <code>undefined</code></li></ul><p>The animation options used to pan the overlay into view.</p><h2 id="events"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><ul><li><code>elementChanged</code></li><li><code>offsetChanged</code></li><li><code>positionChanged</code></li><li><code>positioningChanged</code></li></ul>',31),f='{"title":"vl-overlay","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Events","slug":"events"}],"relativePath":"componentsguide/overlay/index.md","lastUpdated":1628604536818}',m={};const y=Object.assign(m,{expose:[],setup:function(n){return(n,p)=>{const l=a("ClientOnly");return s(),t("div",null,[d,g,h,e(l,null,{default:o((()=>[e(u)])),_:1}),v])}}});export default y;export{f as __pageData};
