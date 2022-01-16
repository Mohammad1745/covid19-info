<template>
  <div class="container-lg pt-5 pb-4">
    <div class="">
      <div class="mode-btn position-relative float-right" @click="toggleMode">
        <font-awesome-icon v-if="darkMode" :icon="['fas', 'sun']" :class="{ 'dark-primary': darkMode, 'light-primary': !darkMode}"/>
        <font-awesome-icon v-else :icon="['fas', 'moon']"/>
      </div>
      <NuxtLink :to="url" class="btn btn-primary link-item position-relative float-right"> {{ content }}</NuxtLink>
    </div>
    <Heading
      title="INFO COVID-19"
      subtitle="Covid-19 Total Information, Countrywise DataTable, Charts & Overtime Map"
    ><img width="25" src="~assets/svg/covid.svg" alt=""></Heading>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"

export default {
  name: "Nav",
  props:['url', 'content'],
  computed: {
    ...mapGetters(['darkMode'])
  },
  methods:{
    ...mapActions(['toggleMode'])
  }
}
</script>

<style scoped>
.mode-btn{
  margin: 5px;
  cursor: pointer;
}
.title {
  font-size: 30px;
  font-weight: bold;
}
.subtitle {
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.57;
}
.link-item {
  font-size: 12px;
  font-weight: bold;
}
</style>
