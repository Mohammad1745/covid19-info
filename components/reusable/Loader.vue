<template>
  <div :class="{ 'loader-dark': darkMode, 'loader-light': !darkMode}">
    <div class="dot dot-1"></div>
    <div class="dot dot-2"></div>
    <div class="dot dot-3"></div>
    <div class="dot dot-4"></div>
    <div class="dot dot-5"></div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  name: "Loader",
  computed: {
    ...mapGetters(['darkMode'])
  },
}
</script>

<style scoped>

</style>
