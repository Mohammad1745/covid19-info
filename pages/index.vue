<template>
  <div class="app" :class="{ 'dark-bg': darkMode, 'light-bg': !darkMode}">
    <Navbar url="/covid-overtime" content="COVID OVERTIME" >
      <i class="fas fa-history ml-2"></i>
    </Navbar>
    <LazyCounts />
    <LazyCountryBreakdown />
    <LazyInfoCharts />
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
