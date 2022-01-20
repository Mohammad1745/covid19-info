<template>
  <div class="app" :class="{ 'dark-bg': darkMode, 'light-bg': !darkMode}">
    <Navbar url="/" content="HOME" >
      <i class="fas fa-home ml-2"></i>
    </Navbar>
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
