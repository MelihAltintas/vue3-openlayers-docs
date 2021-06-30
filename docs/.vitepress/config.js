module.exports = {
    title: 'Vue3 OpenLayers',
    description: 'Vue3 OpenLayers',
    themeConfig: {
        repo: 'MelihAltintas/vue3-openlayers',
        docsDir: 'docs',
        nav: [],

        sidebar: {
            '/': [{
                text: 'Introduction',
                link: '/'
            }, {
                text: 'Demo',
                link: '/demo/'
            }, {
                text: 'Components',
                collapsable: false,
                children: [{
                        text: 'ol-map',
                        link: '/componentsguide/map/'
                    }, {
                        text: 'ol-view',
                        link: '/componentsguide/view/'
                    }, {
                        text: 'ol-overlay',
                        link: '/componentsguide/overlay/'
                    },{
                        text: 'ol-geolocation',
                        link: '/componentsguide/geolocation/'
                    },
                    {
                        text: 'Layers',
                        children: [{
                                text: 'ol-tile-layer',
                                link: '/componentsguide/layers/tilelayer/'
                            },
                            {
                                text: 'ol-image-layer',
                                link: '/componentsguide/layers/imagelayer/'
                            },
                            {
                                text: 'ol-vector-layer',
                                link: '/componentsguide/layers/vectorlayer/'
                            }
                        ]
                    },
                    {
                        text: 'Sources',
                        children: [{
                                text: 'ol-source-image-static',
                                link: '/componentsguide/sources/imagestatic/'
                            },
                            {
                                text: 'ol-source-osm',
                                link: '/componentsguide/sources/osm/'
                            }, {
                                text: 'ol-source-xyz',
                                link: '/componentsguide/sources/xyz/'
                            }, {
                                text: 'ol-source-bingmaps',
                                link: '/componentsguide/sources/bing/'
                            },
                            {
                                text: 'ol-source-wmts',
                                link: '/componentsguide/sources/wmts/'
                            },
                            {
                                text: 'ol-source-vector',
                                link: '/componentsguide/sources/vector/'
                            },
                            {
                                text: 'ol-source-cluster',
                                link: '/componentsguide/sources/cluster/'
                            }
                        ]
                    },
                    {
                        text: 'Geometries',
                        children: [{
                                text: 'ol-geom-point',
                                link: '/componentsguide/geometries/geompoint/'
                            },
                            {
                                text: 'ol-geom-line-string',
                                link: '/componentsguide/geometries/geomlinestring/'
                            }, {
                                text: 'ol-geom-polygon',
                                link: '/componentsguide/geometries/geompolygon/'
                            },
                            {
                                text: 'ol-geom-multi-point',
                                link: '/componentsguide/geometries/geommultipoint/'
                            },
                            {
                                text: 'ol-geom-multi-line-string',
                                link: '/componentsguide/geometries/geommultilinestring/'
                            }, {
                                text: 'ol-geom-multi-polygon',
                                link: '/componentsguide/geometries/geommultipolygon/'
                            }
                        ]
                    }, {
                        text: 'Styles',
                        children: [{
                                text: 'ol-style',
                                link: '/componentsguide/styles/style/'
                            },
                            {
                                text: 'ol-style-circle',
                                link: '/componentsguide/styles/circle/'
                            }, {
                                text: 'ol-style-fill',
                                link: '/componentsguide/styles/fill/'
                            },
                            {
                                text: 'ol-style-icon',
                                link: '/componentsguide/styles/icon/'
                            },
                            {
                                text: 'ol-style-stroke',
                                link: '/componentsguide/styles/stroke/'
                            }, {
                                text: 'ol-style-text',
                                link: '/componentsguide/styles/text/'
                            }
                        ]
                    },
                    {
                        text: 'Map Controls',
                        children: [{
                            text: 'demo',
                            link: '/componentsguide/mapcontrols/'
                        },{
                            text: 'ol-context-menu',
                            link: '/componentsguide/mapcontrols/contextmenu/'
                        },{
                            text: 'ol-attribution-control',
                            link: '/componentsguide/mapcontrols/attribution/'
                        },{
                            text: 'ol-fullscreen-control',
                            link: '/componentsguide/mapcontrols/fullscreen/'
                        },{
                            text: 'ol-mouseposition-control',
                            link: '/componentsguide/mapcontrols/mouseposition/'
                        },{
                            text: 'ol-overviewmap-control',
                            link: '/componentsguide/mapcontrols/overviewmap/'
                        },{
                            text: 'ol-rotate-control',
                            link: '/componentsguide/mapcontrols/rotate/'
                        },{
                            text: 'ol-scaleline-control',
                            link: '/componentsguide/mapcontrols/scaleline/'
                        },{
                            text: 'ol-zoom-control',
                            link: '/componentsguide/mapcontrols/zoom/'
                        },{
                            text: 'ol-zoomslider-control',
                            link: '/componentsguide/mapcontrols/zoomslider/'
                        },{
                            text: 'ol-zoomtoextent-control',
                            link: '/componentsguide/mapcontrols/zoomtoextent/'
                        }]
                    }       
                ]
            }, ]

        }
    }
}