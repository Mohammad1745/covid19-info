<template>
  <div class="container-lg mt-5">
    <Loader v-if="loading" />
    <div v-else class="">
      <Heading title="Country Breakdown">
        <img width="40" src="~assets/svg/global.svg" alt="">
      </Heading>
      <SearchBox classNames="mt-3 mb-3" />
    </div>
  </div>
</template>

<script>
import {mapGetters } from "vuex";

export default {
  name: "DataTable",
  data(){
    return {
      loading: true,
    }
  },
  computed: {
    ...mapGetters(['datatable'])
  },
  mounted () {
    this.loading=false
  }
}
</script>

<style scoped>
</style>
