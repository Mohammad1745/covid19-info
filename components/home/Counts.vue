<template>
  <div class="container-lg" :class="{ 'light-bg': lightMode, 'dark-bg': !lightMode}">
    <div class="row">
      <InfoCard classNames="col-md-6 col-sm-12 p-3" />
      <InfoCard classNames="col-md-6 col-sm-12 p-3" />
      <InfoCard classNames="col-md-6 col-sm-12 p-3" />
      <InfoCard classNames="col-md-6 col-sm-12 p-3" />
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "Counts",
  computed: {
    ...mapGetters(['lightMode'])
  },
}
</script>

<style scoped>
</style>
