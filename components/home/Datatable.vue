<template>
  <div class="container-lg mt-5">
    <Loader v-if="loadingCountryInfo" />
    <div v-else>
      <Heading title="Country Breakdown">
        <img width="40" src="~assets/svg/global.svg" alt="">
      </Heading>
      <SearchBox classNames="mt-3 mb-3" />
      <Table classNames="mt-3 mb-3 overflow-auto" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DataTable",
  computed: {
    ...mapGetters(['loadingCountryInfo'])
  },
  async mounted() {
    await this.$store.dispatch('updateAllCountryInfo')
    await this.$store.dispatch('updateLastDayAllCountryInfo')
    await this.$store.dispatch('updateCountryInfoLoaded')
  }
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  border-radius:10px;
}
::-webkit-scrollbar-thumb {
  background: #bbb;
  border-radius:10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #888;
}
</style>
