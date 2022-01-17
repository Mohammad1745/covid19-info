<template>
  <div class="container-lg mt-5">
    <Loader v-if="loadingCountryInfo" />
    <div class="">
      <Heading title="Country Breakdown">
        <img width="40" src="~assets/svg/global.svg" alt="">
      </Heading>
      <SearchBox classNames="mt-3 mb-3" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DataTable",
  computed: {
    ...mapGetters(['loadingCountryInfo', 'datatable'])
  }
}
</script>

<style scoped>
</style>
