<template>
  <div class="container-lg">
    <Loader v-if="loading" />
    <div v-else class="row">
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
  data(){
    return {
      loading: true
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
