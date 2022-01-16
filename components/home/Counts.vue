<template>
  <div class="container-lg" :class="{ 'light-bg': lightMode, 'dark-bg': !lightMode}">
    <div class="row">
      <InfoCard
        v-for="(info, i) in allInfo"
        :key="i"
        :info="info"
        classNames="col-md-6 col-sm-12 p-3"
      />
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  name: "Counts",
  computed: {
    ...mapGetters(['lightMode', 'allInfo'])
  },
  async mounted () {
    await this.$store.dispatch('updateInfo')
    await this.$store.dispatch('updateLastDayInfo')
  }
}
</script>

<style scoped>
</style>
