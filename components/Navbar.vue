<template>
  <div class="container-lg py-5">
    <div class="">
      <div class="mode-btn position-relative float-right" @click="toggleMode">
        <font-awesome-icon v-if="lightMode" :icon="['fas', 'moon']"/>
        <font-awesome-icon v-else :icon="['fas', 'sun']"/>
      </div>
      <NuxtLink :to="url" class="btn btn-primary link-item position-relative float-right"> {{ content }}</NuxtLink>
    </div>
    <div class="">
      <div class="title">INFO COVID-19</div>
      <div class="subtitle" :class="{ 'light-secondary': lightMode, 'dark-secondary': !lightMode}">Covid-19 Total Information, Countrywise DataTable, Charts & Overtime Map</div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"

export default {
  name: "Nav",
  props:['url', 'content'],
  computed: {
    ...mapGetters(['lightMode'])
  },
  methods:{
    ...mapActions(['toggleMode'])
  }
}
</script>

<style scoped>
.mode-btn{
  margin: 10px;
  cursor: pointer;
}
.title {
  font-size: 30px;
  font-weight: bold;
}
.subtitle {
  font-size: 0.875rem;
  /*font-family: 'Roboto', sans-serif;*/
  font-weight: 500;
  line-height: 1.57;
}
.link-item {
  font-size: 12px;
  font-weight: bold;
}
</style>
