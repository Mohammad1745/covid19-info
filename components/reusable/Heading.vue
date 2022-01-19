<template>
  <div :class="classNames">
    <div class="title" :class="{ 'dark-primary': darkMode, 'light-primary': !darkMode}">
      <slot></slot>
      {{ title }}
    </div>
    <div class="subtitle" :class="{ 'dark-secondary': darkMode, 'light-secondary': !darkMode}">
      {{ subtitle }}
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"

export default {
  name: "Heading",
  props:['title', 'subtitle', 'classNames'],
  computed: {
    ...mapGetters(['darkMode'])
  },
  methods:{
    ...mapActions(['toggleMode'])
  }
}
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: bold;
}
.subtitle {
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.57;
}
</style>
