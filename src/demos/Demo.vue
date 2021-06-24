<template>
<select v-model="selected">
    <option value="https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png">OSM</option>
    <option value="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}">GOOGLE</option>
</select>
{{selected}}

<ol-map ref="map" :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height:800px">

    <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" />

    <ol-fullscreen-control />
    <ol-mouseposition-control />

    <ol-overviewmap-control>
        <ol-tile-layer>
            <ol-source-osm />
        </ol-tile-layer>
    </ol-overviewmap-control>

    <ol-scaleline-control />
    <ol-rotate-control />
    <ol-zoom-control />
    <ol-zoomslider-control />
    <ol-zoomtoextent-control :extent="[23.906,42.812,46.934,34.597]" tipLabel="Fit to Turkey" />

    <ol-tile-layer>
        <ol-source-xyz :url="selected" />
    </ol-tile-layer>

    <ol-vector-layer>
        <ol-source-vector url="https://raw.githubusercontent.com/MelihAltintas/vue3-openlayers/main/docs/citytopo.json" :format="topoJSON" :projection="projection">

        </ol-source-vector>
        <ol-style>
            <ol-style-stroke color="red" :width="2"></ol-style-stroke>
        </ol-style>
    </ol-vector-layer>

    <ol-overlay :position="center">
        <template v-slot="slotProps">
            <div class="overlay-content">
                Welcome to Turkey
            </div>
        </template>
    </ol-overlay>



</ol-map>
</template>

<script>
import {
    ref,
    inject,
    onMounted
} from 'vue'

export default {
    setup() {
        const center = ref([34, 39.13])
        const projection = ref('EPSG:4326')
        const zoom = ref(6.8)
        const rotation = ref(0)

        const format = inject('ol-format');
        console.log(format)
        const topoJSON = new format.TopoJSON();
        const selected = ref('https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png')

        return {
            center,
            projection,
            zoom,
            rotation,
            topoJSON,
            selected
        }
    },
}
</script>

<style>
.overlay-content {
    background: red !important;
    color: white;
    box-shadow: 0 5px 10px rgb(2 2 2 / 20%);
    padding: 10px 20px;
    font-size: 16px;
}
</style>
