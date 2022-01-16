<template>
  <div class="app" :class="{ 'light-bg': lightMode, 'dark-bg': !lightMode}">
      <Navbar url="/covid-overtime" content="COVID OVERTIME" />
      <Counts />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapGetters} from "vuex"

export default Vue.extend({
  name: 'IndexPage',
  computed: {
    ...mapGetters(['lightMode'])
  },
})
</script>

<style scoped>
  .app {
    min-height: 100vh;
  }
</style>
