<template>
  <div class="app" :class="{ 'dark-bg': darkMode, 'light-bg': !darkMode}">
    <Navbar url="/" content="HOME" />
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
