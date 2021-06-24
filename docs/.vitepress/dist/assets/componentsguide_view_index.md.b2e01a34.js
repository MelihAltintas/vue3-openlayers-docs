import{r as n,b as e,o as t,c as o,d as a,f as s,t as i,F as r,a as l}from"./app.b1d4a8a0.js";const p={setup:()=>({center:n([40,40]),projection:n("EPSG:4326"),zoom:n(8),rotation:n(0)}),data(){return{currentCenter:this.center,currentZoom:this.zoom,currentResolution:this.resolution,currentRotation:this.rotation}},methods:{zoomChanged(n){this.currentZoom=n},resolutionChanged(n){this.currentResolution=n},centerChanged(n){this.currentCenter=n},rotationChanged(n){this.currentRotation=n}}};p.render=function(n,l,p,c,u,d){const h=e("ol-view"),m=e("ol-source-osm"),g=e("ol-tile-layer"),k=e("ol-map");return t(),o(r,null,[a(k,{style:{height:"400px"}},{default:s((()=>[a(h,{ref:"view",center:c.center,rotation:c.rotation,zoom:c.zoom,projection:c.projection,onZoomChanged:d.zoomChanged,onCenterChanged:d.centerChanged,onResolutionChanged:d.resolutionChanged,onRotationChanged:d.rotationChanged},null,8,["center","rotation","zoom","projection","onZoomChanged","onCenterChanged","onResolutionChanged","onRotationChanged"]),a(g,null,{default:s((()=>[a(m)])),_:1})])),_:1}),a("div",null," center : "+i(u.currentCenter)+" zoom : "+i(u.currentZoom)+" resolution : "+i(u.currentResolution)+" rotation : "+i(u.currentRotation),1)],64)};const c=l('<h1 id="ol-view"><a class="header-anchor" href="#ol-view" aria-hidden="true">#</a> ol-view</h1><p>A View object represents a simple 2D view of the map.</p><p>This is the object to act upon to change the center, resolution, and rotation of the map.</p><p>A View has a projection. The projection determines the coordinate system of the center, and its units determine the units of the resolution (projection units per pixel). The default projection is Spherical Mercator (EPSG:3857).</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Example of simple map with view in EPSG:4326 projection. See also documentation of ol-map component</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-map</span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token style language-css"><span class="token property">height</span><span class="token punctuation">:</span>400px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-view</span>\n      <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>view<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:center</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:rotation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rotation<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:zoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zoom<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:projection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>projection<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@zoomChanged</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zoomChanged<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@centerChanged</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>centerChanged<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@resolutionChanged</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>resolutionChanged<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@rotationChanged</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rotationChanged<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">/&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-tile-layer</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-source-osm</span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-tile-layer</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-map</span><span class="token punctuation">&gt;</span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    center : {{currentCenter}} zoom : {{currentZoom}} resolution :\n    {{currentResolution}} rotation : {{currentRotation}}\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> center <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> projection <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;EPSG:4326&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> zoom <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> rotation <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      center<span class="token punctuation">,</span>\n      projection<span class="token punctuation">,</span>\n      zoom<span class="token punctuation">,</span>\n      rotation<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      currentCenter<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>center<span class="token punctuation">,</span>\n      currentZoom<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>zoom<span class="token punctuation">,</span>\n      currentResolution<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>resolution<span class="token punctuation">,</span>\n      currentRotation<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>rotation<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">zoomChanged</span><span class="token punctuation">(</span><span class="token parameter">currentZoom</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>currentZoom <span class="token operator">=</span> currentZoom<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">resolutionChanged</span><span class="token punctuation">(</span><span class="token parameter">resolution</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>currentResolution <span class="token operator">=</span> resolution<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">centerChanged</span><span class="token punctuation">(</span><span class="token parameter">center</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>currentCenter <span class="token operator">=</span> center<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">rotationChanged</span><span class="token punctuation">(</span><span class="token parameter">rotation</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>currentRotation <span class="token operator">=</span> rotation<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><h1 id="output"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h1>',9),u=l('<h2 id="properties"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2><h1 id="center"><a class="header-anchor" href="#center" aria-hidden="true">#</a> center</h1><ul><li><strong>Type</strong>: <code>number[]</code></li><li><strong>Default</strong>: <code>[0, 0]</code></li></ul><p>The center coordinate of the map view in the provided <code>projection</code>.</p><h1 id="zoom"><a class="header-anchor" href="#zoom" aria-hidden="true">#</a> zoom</h1><ul><li><strong>Type</strong>: <code>number</code></li><li><strong>Default</strong>: <code>0</code></li></ul><p>Zoom level used to calculate the resolution for the view as <code>int</code> value. Only used if <code>resolution</code> is not defined.</p><h1 id="rotation"><a class="header-anchor" href="#rotation" aria-hidden="true">#</a> rotation</h1><ul><li><strong>Type</strong>: <code>number</code></li><li><strong>Default</strong>: <code>0</code></li></ul><p>The initial rotation for the view in <strong>radians</strong> (positive rotation clockwise).</p><h1 id="resolution"><a class="header-anchor" href="#resolution" aria-hidden="true">#</a> resolution</h1><ul><li><strong>Type</strong>: <code>number</code></li><li><strong>Default</strong>: <code>undefined</code></li></ul><p>The initial resolution for the view. The units are projection units per pixel (e.g. meters per pixel). An alternative to setting this is to set <code>zoom</code></p><h1 id="resolutions"><a class="header-anchor" href="#resolutions" aria-hidden="true">#</a> resolutions</h1><ul><li><strong>Type</strong>: <code>number[]</code></li><li><strong>Default</strong>: <code>undefined</code></li></ul><p>Resolutions to determine the resolution constraint. If set the <code>max-resolution</code>, <code>min-resolution</code>, <code>min-zoom</code>, <code>max-zoom</code>, and <code>zoom-factor</code> options are ignored.</p><h1 id="projection"><a class="header-anchor" href="#projection" aria-hidden="true">#</a> projection</h1><ul><li><strong>Type</strong>: <code>string</code> or <code>object (options projection)</code></li><li><strong>Default</strong>: <code>EPSG:3857</code></li></ul><p>The view internal projection. This is the projection with which OpenLayers component</p><h1 id="maxzoom"><a class="header-anchor" href="#maxzoom" aria-hidden="true">#</a> maxZoom</h1><ul><li><strong>Type</strong>: <code>number</code></li><li><strong>Default</strong>: <code>28</code></li></ul><p>The maximum zoom level used to determine the resolution constraint.</p><h1 id="minzoom"><a class="header-anchor" href="#minzoom" aria-hidden="true">#</a> minZoom</h1><ul><li><strong>Type</strong>: <code>number</code></li><li><strong>Default</strong>: <code>0</code></li></ul><p>The minimum zoom level used to determine the resolution constraint.</p><h1 id="maxresolution"><a class="header-anchor" href="#maxresolution" aria-hidden="true">#</a> maxResolution</h1><ul><li><strong>Type</strong>: <code>number</code></li><li><strong>Default</strong>: <code>undefined</code></li></ul><p>The maximum resolution used to determine the resolution constraint.</p><h1 id="minresolution"><a class="header-anchor" href="#minresolution" aria-hidden="true">#</a> minResolution</h1><ul><li><strong>Type</strong>: <code>number</code></li><li><strong>Default</strong>: <code>undefined</code></li></ul><p>The minimum resolution used to determine the resolution constraint.</p><h1 id="constrainrotation"><a class="header-anchor" href="#constrainrotation" aria-hidden="true">#</a> constrainRotation</h1><ul><li><strong>Type</strong>: <code>boolean | number</code></li><li><strong>Default</strong>: <code>true</code></li></ul><p>Rotation constraint. <code>false</code> means no constraint. <code>true</code> means no constraint, but snap to zero near zero. A number constrains the rotation to that number of values. For example, <code>4</code> will constrain the rotation to <code>0</code>, <code>90</code>, <code>180</code>, and <code>270</code> degrees.</p><h1 id="enablerotation"><a class="header-anchor" href="#enablerotation" aria-hidden="true">#</a> enableRotation</h1><ul><li><strong>Type</strong>: <code>boolean</code></li><li><strong>Default</strong>: <code>true</code></li></ul><p>Enable rotation. Default is <code>true</code>. If <code>false</code> a rotation constraint that always sets the rotation to zero is used.</p><h1 id="extent"><a class="header-anchor" href="#extent" aria-hidden="true">#</a> extent</h1><ul><li><strong>Type</strong>: <code>number[leftBottomX, leftBottomY, rightTopX, rightTopY]</code></li><li><strong>Default</strong>: <code>undefined</code></li></ul><p>The extent that constrains the <code>center</code> defined in the view projection, in other words, center cannot be set outside this extent.</p><h1 id="zoomfactor"><a class="header-anchor" href="#zoomfactor" aria-hidden="true">#</a> zoomFactor</h1><ul><li><strong>Type</strong>: <code>number</code></li><li><strong>Default</strong>: <code>2</code></li></ul><p>The zoom factor used to determine the resolution constraint.</p><h1 id="constrainonlycenter"><a class="header-anchor" href="#constrainonlycenter" aria-hidden="true">#</a> constrainOnlyCenter</h1><ul><li><strong>Type</strong>: <code>Boolean</code></li><li><strong>Default</strong>: <code>false</code></li></ul><p>If true, the extent constraint will only apply to the view center and not the whole extent.</p><h1 id="smoothextentconstraint"><a class="header-anchor" href="#smoothextentconstraint" aria-hidden="true">#</a> smoothExtentConstraint</h1><ul><li><strong>Type</strong>: <code>Boolean</code></li><li><strong>Default</strong>: <code>true</code></li></ul><p>If true, the extent constraint will be applied smoothly, i.e. allow the view to go slightly outside of the given extent.</p><h1 id="multiworld"><a class="header-anchor" href="#multiworld" aria-hidden="true">#</a> multiWorld</h1><ul><li><strong>Type</strong>: <code>Boolean</code></li><li><strong>Default</strong>: <code>false</code></li></ul><p>If false the view is constrained so only one world is visible, and you cannot pan off the edge. If true the map may show multiple worlds at low zoom levels. Only used if the projection is global. Note that if extent is also provided it is given precedence.</p><h1 id="constrainresolution"><a class="header-anchor" href="#constrainresolution" aria-hidden="true">#</a> constrainResolution</h1><ul><li><strong>Type</strong>: <code>Boolean</code></li><li><strong>Default</strong>: <code>false</code></li></ul><p>If true, the view will always animate to the closest zoom level after an interaction; false means intermediary zoom levels are allowed.</p><h1 id="smoothresolutionconstraint"><a class="header-anchor" href="#smoothresolutionconstraint" aria-hidden="true">#</a> smoothResolutionConstraint</h1><ul><li><strong>Type</strong>: <code>Boolean</code></li><li><strong>Default</strong>: <code>true</code></li></ul><p>If true, the resolution min/max values will be applied smoothly, i. e. allow the view to exceed slightly the given resolution or zoom bounds.</p><h1 id="showfullextent"><a class="header-anchor" href="#showfullextent" aria-hidden="true">#</a> showFullExtent</h1><ul><li><strong>Type</strong>: <code>Boolean</code></li><li><strong>Default</strong>: <code>false</code></li></ul><p>If true, the resolution min/max values will be applied smoothly, i. e. allow the view to exceed slightly the given resolution or zoom bounds.</p><h1 id="padding"><a class="header-anchor" href="#padding" aria-hidden="true">#</a> padding</h1><ul><li><strong>Type</strong>: <code>Array</code></li><li><strong>Default</strong>: <code>() =&gt; [0, 0, 0, 0]</code></li></ul><p>If true, the resolution min/max values will be applied smoothly, i. e. allow the view to exceed slightly the given resolution or zoom bounds.</p><h2 id="events"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><ul><li><code>centerChanged</code></li><li><code>zoomChanged</code></li><li><code>resolutionChanged</code></li><li><code>rotationChanged</code></li></ul><h2 id="methods"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2><h1 id="adjustcenter-deltacoordinates"><a class="header-anchor" href="#adjustcenter-deltacoordinates" aria-hidden="true">#</a> adjustCenter(deltaCoordinates)</h1><p>Adds relative coordinates to the center of the view. Any extent constraint will apply.</p><ul><li><strong>Arguments</strong>:</li><li><code>deltaCoordinates {module:ol/coordinate~Coordinate}</code> Relative value to add.</li></ul><h1 id="adjustresolution-ratio-opt-anchor"><a class="header-anchor" href="#adjustresolution-ratio-opt-anchor" aria-hidden="true">#</a> adjustResolution(ratio, opt_anchor)</h1><p>Multiply the view resolution by a ratio, optionally using an anchor. Any resolution constraint will apply.</p><ul><li><strong>Arguments</strong>:</li><li><code>ratio {number}</code> The ratio to apply on the view resolution.</li><li><code>anchor {module:ol/coordinate~Coordinate}</code> The origin of the transformation.</li></ul><h1 id="adjustrotation-delta-opt-anchor"><a class="header-anchor" href="#adjustrotation-delta-opt-anchor" aria-hidden="true">#</a> adjustRotation(delta, opt_anchor)</h1><p>Adds a value to the view rotation, optionally using an anchor. Any rotation constraint will apply.</p><ul><li><strong>Arguments</strong>:</li><li><code>delta {number}</code> Relative value to add to the zoom rotation, in radians.</li><li><code>anchor {module:ol/coordinate~Coordinate}</code> The rotation center.</li></ul><h1 id="adjustzoom-delta-opt-anchor"><a class="header-anchor" href="#adjustzoom-delta-opt-anchor" aria-hidden="true">#</a> adjustZoom(delta, opt_anchor)</h1><p>Adds a value to the view zoom level, optionally using an anchor. Any resolution constraint will apply.</p><ul><li><strong>Arguments</strong>:</li><li><code>delta {number}</code> Relative value to add to the zoom level.</li><li><code>anchor {module:ol/coordinate~Coordinate}</code> The origin of the transformation.</li></ul><h1 id="begininteraction"><a class="header-anchor" href="#begininteraction" aria-hidden="true">#</a> beginInteraction()</h1><p>Notify the View that an interaction has started. The view state will be resolved to a stable one if needed (depending on its constraints).</p><h1 id="calculateextent-opt-size"><a class="header-anchor" href="#calculateextent-opt-size" aria-hidden="true">#</a> calculateExtent(opt_size)</h1><p>Calculate the extent for the current view state and the passed size. The size is the pixel dimensions of the box into which the calculated extent should fit. In most cases you want to get the extent of the entire map, that is map.getSize().</p><ul><li><strong>Arguments</strong>:</li><li><code>size {module:ol/size~Size}</code> Box pixel size. If not provided, the size of the map that uses this view will be used.</li></ul><h1 id="cancelanimations"><a class="header-anchor" href="#cancelanimations" aria-hidden="true">#</a> cancelAnimations()</h1><p>Cancel any ongoing animations.</p><h1 id="centeron-coordinate-size-position"><a class="header-anchor" href="#centeron-coordinate-size-position" aria-hidden="true">#</a> centerOn(coordinate, size, position)</h1><p>Center on coordinate and view position.</p><ul><li><strong>Arguments</strong>:</li><li><code>coordinate {module:ol/coordinate~Coordinate}</code> Coordinate.</li><li><code>size {module:ol/size~Size}</code> Box pixel size.</li><li><code>position {module:ol/pixel~Pixel}</code> Position on the view to center on.</li></ul><h1 id="endinteraction-opt-duration-opt-resolutiondirection-opt-anchor"><a class="header-anchor" href="#endinteraction-opt-duration-opt-resolutiondirection-opt-anchor" aria-hidden="true">#</a> endInteraction(opt_duration, opt_resolutionDirection, opt_anchor)</h1><p>Notify the View that an interaction has ended. The view state will be resolved to a stable one if needed (depending on its constraints).</p><ul><li><strong>Arguments</strong>:</li><li><code>duration {number}</code> Animation duration in ms.</li><li><code>resolutionDirection {number}</code> Which direction to zoom.</li><li><code>anchor {module:ol/coordinate~Coordinate}}</code> The origin of the transformation.</li></ul><h1 id="getanimating"><a class="header-anchor" href="#getanimating" aria-hidden="true">#</a> getAnimating()</h1><p>Determine if the view is being animated.</p><p>Returns: The view is being animated.</p><h1 id="getcenter"><a class="header-anchor" href="#getcenter" aria-hidden="true">#</a> getCenter()</h1><p>Get the view center.</p><p>Returns: The center of the view.</p><h1 id="getinteracting"><a class="header-anchor" href="#getinteracting" aria-hidden="true">#</a> getInteracting()</h1><p>Determine if the user is interacting with the view, such as panning or zooming.</p><p>Returns: The view is being interacted with.</p><h1 id="getmaxresolution"><a class="header-anchor" href="#getmaxresolution" aria-hidden="true">#</a> getMaxResolution()</h1><p>Get the maximum resolution of the view.</p><p>Returns: The maximum resolution of the view.</p><h1 id="getmaxzoom"><a class="header-anchor" href="#getmaxzoom" aria-hidden="true">#</a> getMaxZoom()</h1><p>Get the maximum zoom level for the view.</p><p>Returns: The maximum zoom level.</p><h1 id="getminresolution"><a class="header-anchor" href="#getminresolution" aria-hidden="true">#</a> getMinResolution()</h1><p>Get the minimum resolution of the view.</p><p>Returns: The minimum resolution of the view.</p><h1 id="getminzoom"><a class="header-anchor" href="#getminzoom" aria-hidden="true">#</a> getMinZoom()</h1><p>Get the minimum zoom level for the view.</p><p>Returns: The minimum zoom level.</p><h1 id="getprojection"><a class="header-anchor" href="#getprojection" aria-hidden="true">#</a> getProjection()</h1><p>Get the view projection.</p><p>Returns: The projection of the view.</p><h1 id="getresolution"><a class="header-anchor" href="#getresolution" aria-hidden="true">#</a> getResolution()</h1><p>Get the view resolution.</p><p>Returns: The resolution of the view.</p><h1 id="getresolutionforextent-extent-opt-size"><a class="header-anchor" href="#getresolutionforextent-extent-opt-size" aria-hidden="true">#</a> getResolutionForExtent(extent, opt_size)</h1><p>Get the resolution for a provided extent (in map units) and size (in pixels).</p><ul><li><strong>Arguments</strong>:</li><li><code>extent {module:ol/extent~Extent}</code> Extent.</li><li><code>size {module:ol/size~Size}</code> Box pixel size.</li></ul><p>Returns: The resolution at which the provided extent will render at the given size.</p><h1 id="getresolutionforzoom-zoom"><a class="header-anchor" href="#getresolutionforzoom-zoom" aria-hidden="true">#</a> getResolutionForZoom(zoom)</h1><p>Get the resolution for a zoom level.</p><ul><li><strong>Arguments</strong>:</li><li><code>zoom {number}</code> Zoom level.</li></ul><p>Returns: The view resolution for the provided zoom level.</p><h1 id="getresolutions"><a class="header-anchor" href="#getresolutions" aria-hidden="true">#</a> getResolutions()</h1><p>Get the resolutions for the view. This returns the array of resolutions passed to the constructor of the View, or undefined if none were given.</p><p>Returns: The resolutions of the view.</p><h1 id="getrotation"><a class="header-anchor" href="#getrotation" aria-hidden="true">#</a> getRotation()</h1><p>Get the view rotation.</p><p>Returns: The rotation of the view in radians.</p><h1 id="getzoom"><a class="header-anchor" href="#getzoom" aria-hidden="true">#</a> getZoom()</h1><p>Get the current zoom level. This method may return non-integer zoom levels if the view does not constrain the resolution, or if an interaction or animation is underway.</p><p>Returns: Zoom.</p><h1 id="getzoomforresolution-resolution"><a class="header-anchor" href="#getzoomforresolution-resolution" aria-hidden="true">#</a> getZoomForResolution(resolution)</h1><p>Get the zoom level for a resolution.</p><ul><li><strong>Arguments</strong>:</li><li><code>resolution {number}</code> The resolution.</li></ul><p>Returns: The zoom level for the provided resolution.</p><h1 id="setcenter-center"><a class="header-anchor" href="#setcenter-center" aria-hidden="true">#</a> setCenter(center)</h1><p>Set the center of the current view. Any extent constraint will apply.</p><ul><li><strong>Arguments</strong>:</li><li><code>center { module:ol/coordinate~Coordinate | undefined}</code> The center of the view.</li></ul><h1 id="setconstrainresolution-enabled"><a class="header-anchor" href="#setconstrainresolution-enabled" aria-hidden="true">#</a> setConstrainResolution(enabled)</h1><p>Set whether the view shoud allow intermediary zoom levels.</p><ul><li><strong>Arguments</strong>:</li><li><code>enabled {boolean}</code> Whether the resolution is constrained.</li></ul><h1 id="setmaxzoom-zoom"><a class="header-anchor" href="#setmaxzoom-zoom" aria-hidden="true">#</a> setMaxZoom(zoom)</h1><p>Set a new maximum zoom level for the view.</p><ul><li><strong>Arguments</strong>:</li><li><code>zoom {number}</code> The maximum zoom level.</li></ul><h1 id="setminzoom-zoom"><a class="header-anchor" href="#setminzoom-zoom" aria-hidden="true">#</a> setMinZoom(zoom)</h1><p>Set a new minimum zoom level for the view.</p><ul><li><strong>Arguments</strong>:</li><li><code>zoom {number}</code> The minimum zoom level.</li></ul><h1 id="setresolution-resolution"><a class="header-anchor" href="#setresolution-resolution" aria-hidden="true">#</a> setResolution(resolution)</h1><p>Set the resolution for this view. Any resolution constraint will apply.</p><ul><li><strong>Arguments</strong>:</li><li><code>resolution {number | undefined}</code> The resolution of the view.</li></ul><h1 id="setrotation-rotation"><a class="header-anchor" href="#setrotation-rotation" aria-hidden="true">#</a> setRotation(rotation)</h1><p>Set the rotation for this view. Any rotation constraint will apply.</p><ul><li><strong>Arguments</strong>:</li><li><code>rotation {number}</code> The rotation of the view in radians.</li></ul><h1 id="setzoom-zoom"><a class="header-anchor" href="#setzoom-zoom" aria-hidden="true">#</a> setZoom(zoom)</h1><p>Zoom to a specific zoom level. Any resolution constrain will apply.</p><ul><li><strong>Arguments</strong>:</li><li><code>zoom {number}</code> Zoom level.</li></ul><h1 id="fit-geometryorextent-opt-options"><a class="header-anchor" href="#fit-geometryorextent-opt-options" aria-hidden="true">#</a> fit(geometryOrExtent, opt_options)</h1><p>Fit the given geometry or extent based on the given map size and border. The size is pixel dimensions of the box to fit the extent into. In most cases you will want to use the map size, that is map.getSize(). Takes care of the map angle.</p>',163),d='{"title":"ol-view","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Methods","slug":"methods"}],"relativePath":"componentsguide/view/index.md","lastUpdated":1624531141650}',h={};const m=Object.assign(h,{expose:[],setup:function(n){return(n,i)=>{const r=e("ClientOnly");return t(),o("div",null,[c,a(r,null,{default:s((()=>[a(p)])),_:1}),u])}}});export default m;export{d as __pageData};
