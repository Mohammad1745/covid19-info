<template>
  <div class="container-lg">
    <Loader v-if="loading" />
    <div v-else class=" d-flex justify-content-center">
      <l-map style="height: 60vh; max-width: 100vh" :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-circle
          v-for="(circle, i) in circles"
          :key="i"
          :lat-lng="circle.center"
          :radius="circle.radius"
          :color="circle.color"
          :weight="circle.weight"
          :opacity="circle.opacity"
          :fillColor="circle.fillColor"
          :fillOpacity="circle.fillOpacity"
        />
      </l-map>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "OvertimeMap",
  computed: {
    ...mapGetters(['overtimeInfo', 'mapContent'])
  },
  data () {
    return {
      loading: true,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 2,
      center: [47.313220, -1.319482],
      circles: []
    }
  },
  async mounted() {
    this.$nuxt.$on('slider-input', () =>
      this.setMapData())
    await this.$store.dispatch('updateCountryMapData')
    await this.$store.dispatch('updateCountryLocation')
    this.setMapData()
    this.$nuxt.$emit('map-data-loaded')
    this.loading = false
  },
  methods: {
    setMapData() {
      this.circles = []
      if (this.mapContent.includes('cases')){
        this.circles.push(...this.overtimeInfo.map(info => ({
          center: info.coordinate,
          radius: 1000*(Math.sqrt(info.cases)),
          color: 'red',
          weight: 1,
          opacity: 0.5,
          fillColor: 'red',
          fillOpacity: 0.5,
        })))
      }
      if (this.mapContent.includes('deaths')){
        this.circles.push(...this.overtimeInfo.map(info => ({
          center: info.coordinate,
          radius: 1000*(Math.sqrt(info.deaths)),
          color: 'black',
          weight: 1,
          opacity: 0.5,
          fillColor: 'black',
          fillOpacity: 0.5,
        })))
      }
      if (this.mapContent.includes('recovered')){
        this.circles.push(...this.overtimeInfo.map(info => ({
          center: info.coordinate,
          radius: 1000*(Math.sqrt(info.recovered)),
          color: 'green',
          weight: 1,
          opacity: 0.5,
          fillColor: 'green',
          fillOpacity: 0.5,
        })))
      }
    }
  }
}
</script>

<style scoped>

</style>
