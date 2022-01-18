<template>
  <div class="container-lg mt-5">
    <Loader v-if="loading" />
    <div v-else>
      <Heading title="Country Breakdown">
        <img width="40" src="~assets/svg/global.svg" alt="">
      </Heading>
      <SearchBox classNames="mt-3 mb-3" />
      <CountryTable />
    </div>
  </div>
</template>

<script>
export default {
  name: "DataTable",
  data() {
    return {
      loading: true
    }
  },
  async mounted() {
    await this.$store.dispatch('updateAllCountryInfo')
    await this.$store.dispatch('updateLastDayAllCountryInfo')
    this.loading = false
  }
}
</script>

<style scoped>
</style>
