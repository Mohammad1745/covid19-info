<template>
  <div class="app" :class="{ 'dark-bg': darkMode, 'light-bg': !darkMode}">
      <Navbar url="/covid-overtime" content="COVID OVERTIME" />
      <LazyCounts />
      <LazyCountryBreakdown />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapGetters} from "vuex"

export default Vue.extend({
  name: 'IndexPage',
  computed: {
    ...mapGetters(['darkMode'])
  },
})
</script>

<style scoped>
</style>
