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
          :weight="weight"
          :opacity="opacity"
          :fillColor="circle.fillColor"
          :fillOpacity="fillOpacity"
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
    ...mapGetters(['overtimeCases','overtimeDeaths','overtimeRecoveries', 'mapContent'])
  },
  data () {
    return {
      loading: true,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 2,
      center: [47.313220, -1.319482],
      weight: 1,
      opacity: 0.5,
      fillOpacity: 0.5,
      circles: []
    }
  },
  async mounted() {
    this.$nuxt.$on('slider-input', () =>
      this.setMapData())
    this.$nuxt.$on('checkbox-updated', () =>
      this.setMapData())
    await this.$store.dispatch('updateCountryLocation')
    await this.$store.dispatch('updateCountryMapData')
    this.setMapData()
    this.$nuxt.$emit('map-data-loaded')
    this.loading = false
  },
  methods: {
    setMapData() {
      this.circles = []
      if (this.mapContent.includes('cases'))
        this.circles.push(...this.overtimeCases)

      if (this.mapContent.includes('deaths'))
        this.circles.push(...this.overtimeDeaths)

      if (this.mapContent.includes('recovered'))
        this.circles.push(...this.overtimeRecoveries)
    }
  }
}
</script>

<style scoped>

</style>
