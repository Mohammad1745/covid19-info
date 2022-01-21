<template>
  <h5 :class="{ 'dark-primary': darkMode, 'light-secondary': !darkMode}">
    <slot></slot>
    <span class="font-weight-bold"> {{ title }} </span>
    (<u>{{ subtitle }}</u>)
  </h5>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ChartHeader",
  props: ['title', 'subtitle'],
  computed: {
    ...mapGetters(['darkMode']),
  },
}
</script>

<style scoped>

</style>
