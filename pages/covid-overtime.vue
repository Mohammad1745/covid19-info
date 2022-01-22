<template>
  <div class="app" :class="{ 'dark-bg': darkMode, 'light-bg': !darkMode}">
    <Navbar url="/" content="HOME" >
      <i class="fas fa-home ml-2"></i>
    </Navbar>
    <Heading title="Visualizing COVID-19 Over Time" classNames="d-flex justify-content-center mb-3" />
    <OvertimeMap />
    <Slider />
    <CheckBox />
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
.app {
  min-height: 100vh;
}
</style>
