<template>
  <div class="container-lg">
    <Loader v-if="loading" />
    <div v-else class="row">
      <InfoCard
        v-for="(info, i) in allInfo"
        :key="i"
        :info="info"
        classNames="col-md-6 col-sm-12 p-3"
      >
        <img v-if="info.type==='cases'" width="50" src="~assets/svg/cases.svg" alt="">
        <img v-else-if="info.type==='deaths'" width="50" src="~assets/svg/deaths.svg" alt="">
        <img v-else-if="info.type==='recoveries'" width="50" src="~assets/svg/recoveries.svg" alt="">
        <img v-else width="50" src="~assets/svg/active-cases.svg" alt="">
      </InfoCard>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Counts",
  data(){
    return {
      loading: true,
    }
  },
  computed: {
    ...mapGetters(['allInfo'])
  },
  async mounted () {
    await this.$store.dispatch('updateInfo')
    await this.$store.dispatch('updateLastDayInfo')
    this.loading=false
  }
}
</script>

<style scoped>
</style>
