<template>
  <div class="container-lg">
    <Loader v-if="loading" />
    <div v-else class=" d-flex justify-content-center">
      <l-map style="height: 50vh; max-width: 90vh" :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-circle
          v-if="mapContent.includes('cases')"
          v-for="(circle, i) in overtime"
          :key="i"
          :lat-lng="circle.coordinates"
          :radius=" 900*(Math.sqrt(circle.cases[date]))"
          color="red"
          fillColor="red"
          :weight="weight"
          :opacity="opacity"
          :fillOpacity="fillOpacity"
        /><l-circle
          v-if="mapContent.includes('deaths')"
          v-for="(circle, i) in overtime"
          :key="i"
          :lat-lng="circle.coordinates"
          :radius="900*(Math.sqrt(circle.deaths[date]))"
          color="black"
          fillColor="black"
          :weight="weight"
          :opacity="opacity"
          :fillOpacity="fillOpacity"
        /><l-circle
          v-if="mapContent.includes('recovered')"
          v-for="(circle, i) in overtime"
          :key="i"
          :lat-lng="circle.coordinates"
          :radius="900*(Math.sqrt(circle.recovered[date]))"
          color="green"
          fillColor="green"
          :weight="weight"
          :opacity="opacity"
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
    ...mapGetters(['date', 'overtime', 'mapContent'])
  },
  data () {
    return {
      loading: true,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 2,
      center: [47.313220, -1.319482],
      weight: 0,
      opacity: 0.1,
      fillOpacity: 0.5,
    }
  },
  async mounted() {
    await this.$store.dispatch('updateCountryLocation')
    await this.$store.dispatch('updateCountryMapData')
    this.loading = false
  },
}
</script>

<style scoped>

</style>
