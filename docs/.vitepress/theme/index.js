import DefaultTheme from 'vitepress/theme'
import './theme.css'


import 'vue3-openlayers/dist/vue3-openlayers.css'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    //console.log("openlayers add",OpenLayersMap)

    import('vue3-openlayers').then(openlayers => {
      app.use(openlayers)
    })

 
  }
}