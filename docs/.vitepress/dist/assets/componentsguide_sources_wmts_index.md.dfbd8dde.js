import{d as a,o as n,c as s,e as t,w as e,j as o,a as p}from"./app.381f6a48.js";import{_ as l}from"./TileLayerDemo.eb168e00.js";const r=t("h1",{id:"ol-source-wmts"},[t("a",{class:"header-anchor",href:"#ol-source-wmts","aria-hidden":"true"},"#"),o(" ol-source-wmts")],-1),c=t("p",null,"Layer source for tile data from WMTS servers.",-1),i=p('<h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Example below shows how to use ol-layer-tile component together with ol-source-wmts and with ol-source-osm.</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-map</span> <span class="token attr-name">:loadTilesWhileAnimating</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:loadTilesWhileInteracting</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token style language-css"><span class="token property">height</span><span class="token punctuation">:</span>400px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-view</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>view<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:center</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:rotation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rotation<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:zoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zoom<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-tile-layer</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-source-osm</span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-tile-layer</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-tile-layer</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-source-wmts</span> <span class="token attr-name">:attributions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>attribution<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:matrixSet</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>matrixSet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>format<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:layer</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>layerName<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>styleName<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-source-wmts</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-tile-layer</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-map</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>\n    ref\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> center <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> zoom <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> rotation <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;https://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_Population_Density/MapServer/WMTS/&#39;</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> layerName <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> matrixSet <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;EPSG:3857&#39;</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> format <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;image/png&#39;</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> styleName <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;default&#39;</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> attribution <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;Tiles © &lt;a href=&quot;https://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_Population_Density/MapServer/&quot;&gt;ArcGIS&lt;/a&gt;&#39;</span><span class="token punctuation">)</span>\n\n        \n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            center<span class="token punctuation">,</span>\n            zoom<span class="token punctuation">,</span>\n            rotation<span class="token punctuation">,</span>\n            url<span class="token punctuation">,</span>\n            layerName<span class="token punctuation">,</span>\n            matrixSet<span class="token punctuation">,</span>\n            format<span class="token punctuation">,</span>\n            styleName<span class="token punctuation">,</span>\n            attribution\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="properties"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2><h1 id="attributions"><a class="header-anchor" href="#attributions" aria-hidden="true">#</a> attributions</h1><ul><li><strong>Type</strong>: <code>string</code></li></ul><p>Attributions.</p><h1 id="cachesize"><a class="header-anchor" href="#cachesize" aria-hidden="true">#</a> cacheSize</h1><ul><li><strong>Type</strong>: <code>number</code></li></ul><p>Initial tile cache size. Will auto-grow to hold at least the number of tiles in the viewport.</p><h1 id="crossorigin"><a class="header-anchor" href="#crossorigin" aria-hidden="true">#</a> crossOrigin</h1><ul><li><strong>Type</strong>: <code>string</code></li><li><strong>Default</strong>: <code>ol-layer</code></li></ul><p>Initial tile cache size. Will auto-grow to hold at least the number of tiles in the viewport.</p><h1 id="imagesmoothing"><a class="header-anchor" href="#imagesmoothing" aria-hidden="true">#</a> imageSmoothing</h1><ul><li><strong>Type</strong>: <code>boolean </code></li><li><strong>Default</strong>: true</li></ul><p>Enable image smoothing.</p><h1 id="projection"><a class="header-anchor" href="#projection" aria-hidden="true">#</a> projection</h1><ul><li><strong>Type</strong>: <code>[String, Object]</code></li><li><strong>Default</strong>: true</li></ul><p>Projection. Default is the view projection.</p><h1 id="reprojectionerrorthreshold"><a class="header-anchor" href="#reprojectionerrorthreshold" aria-hidden="true">#</a> reprojectionErrorThreshold</h1><ul><li><strong>Type</strong>: <code>Number</code></li><li><strong>Default</strong>: 0.5</li></ul><p>Maximum allowed reprojection error (in pixels). Higher values can increase reprojection performance, but decrease precision.</p><h1 id="tilepixelratio"><a class="header-anchor" href="#tilepixelratio" aria-hidden="true">#</a> tilePixelRatio</h1><ul><li><strong>Type</strong>: <code>Number</code></li><li><strong>Default</strong>: 1</li></ul><p>The pixel ratio used by the tile service. For example, if the tile service advertizes 256px by 256px tiles but actually sends 512px by 512px images (for retina/hidpi devices) then tilePixelRatio should be set to 2.</p><h1 id="format"><a class="header-anchor" href="#format" aria-hidden="true">#</a> format</h1><ul><li><strong>Type</strong>: <code>String</code></li><li><strong>Default</strong>: <code>image/jpeg</code></li></ul><p>Image format. Only used when requestEncoding is &#39;KVP&#39;.</p><h1 id="version"><a class="header-anchor" href="#version" aria-hidden="true">#</a> version</h1><ul><li><strong>Type</strong>: <code>String</code></li><li><strong>Default</strong>: <code>1.0.0</code></li></ul><p>WMTS version.</p><h1 id="matrixset"><a class="header-anchor" href="#matrixset" aria-hidden="true">#</a> matrixSet</h1><ul><li><strong>Type</strong>: <code>String</code></li></ul><p>Matrix set.</p><h1 id="dimensions"><a class="header-anchor" href="#dimensions" aria-hidden="true">#</a> dimensions</h1><ul><li><strong>Type</strong>: <code>Object</code></li></ul><p>Additional &quot;dimensions&quot; for tile requests. This is an object with properties named like the advertised WMTS dimensions.</p><h1 id="url"><a class="header-anchor" href="#url" aria-hidden="true">#</a> url</h1><ul><li><strong>Type</strong>: <code>string</code></li></ul><p>A URL for the service. For the RESTful request encoding, this is a URL template. For KVP encoding, it is normal URL. A {?-?} template pattern, for example subdomain{a-f}.domain.com, may be used instead of defining each one separately in the urls option.</p><h1 id="urls"><a class="header-anchor" href="#urls" aria-hidden="true">#</a> urls</h1><ul><li><strong>Type</strong>: <code>Array.&lt;string&gt;</code></li></ul><p>An array of URLs. Requests will be distributed among the URLs in this array.</p><h1 id="wrapx"><a class="header-anchor" href="#wrapx" aria-hidden="true">#</a> wrapX</h1><ul><li><strong>Type</strong>: <code>boolean </code></li><li><strong>Default</strong>: false</li></ul><p>Whether to wrap the world horizontally.</p><h1 id="transition"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> transition</h1><ul><li><strong>Type</strong>: <code>number</code></li></ul><p>Duration of the opacity transition for rendering. To disable the opacity transition, pass transition: 0.</p><h1 id="layer"><a class="header-anchor" href="#layer" aria-hidden="true">#</a> layer</h1><ul><li><strong>Type</strong>: <code>string</code></li></ul><p>Layer name as advertised in the WMTS capabilities.</p><h1 id="style"><a class="header-anchor" href="#style" aria-hidden="true">#</a> style</h1><ul><li><strong>Type</strong>: <code>string</code></li></ul><p>Style name as advertised in the WMTS capabilities.</p>',56),u='{"title":"ol-source-wmts","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"}],"relativePath":"componentsguide/sources/wmts/index.md","lastUpdated":1628604644216}',k={};const d=Object.assign(k,{expose:[],setup:function(o){return(o,p)=>{const u=a("ClientOnly");return n(),s("div",null,[r,c,t(u,null,{default:e((()=>[t(l)])),_:1}),i])}}});export default d;export{u as __pageData};
