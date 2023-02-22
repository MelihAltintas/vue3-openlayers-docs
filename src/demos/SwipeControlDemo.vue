<template>
  <ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height:400px" ref="map">

    <ol-view :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" ref="view" />

    <ol-tile-layer ref="osmLayer" title="OSM">
      <ol-source-osm />
    </ol-tile-layer>

    <ol-tile-layer ref="jawgLayer" title="JAWG">
      <ol-source-xyz crossOrigin='anonymous' url="https://c.tile.jawg.io/jawg-dark/{z}/{x}/{y}.png?access-token=87PWIbRaZAGNmYDjlYsLkeTVJpQeCfl2Y61mcHopxXqSdxXExoTLEv7dwqBwSWuJ" />
    </ol-tile-layer>

    <ol-swipe-control ref="swipeControl" v-if="layerList.length > 0" :layerList="layerList" />

  </ol-map>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const center = ref([40, 40])
    const projection = ref('EPSG:4326')
    const zoom = ref(8)
    const rotation = ref(0)

    const swipeControl = ref(null)
    const jawgLayer = ref(null)
    const osmLayer = ref(null)
    const layerList = ref([])

    onMounted(() => {
      layerList.value.push(jawgLayer.value.tileLayer);
      layerList.value.push(osmLayer.value.tileLayer);
    });

    return {
      center,
      projection,
      zoom,
      rotation,
      swipeControl,
      jawgLayer,
      osmLayer,
      layerList
    }
  }
}
</script>
