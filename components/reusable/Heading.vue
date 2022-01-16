<template>
  <div class="">
    <div class="title" :class="{ 'light-primary': lightMode, 'dark-primary': !lightMode}">
      <img :src="icon" width="25" alt="">
      {{ title }}
    </div>
    <div class="subtitle" :class="{ 'light-secondary': lightMode, 'dark-secondary': !lightMode}">
      {{ subtitle }}
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"

export default {
  name: "Heading",
  props:['title', 'subtitle', 'icon'],
  computed: {
    ...mapGetters(['lightMode'])
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
