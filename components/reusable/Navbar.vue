<template>
  <div class="container-lg pt-5 pb-4">
    <div class="">
      <div class="mode-btn position-relative float-right" @click="handleClick">
        <font-awesome-icon v-if="darkMode" :icon="['fas', 'sun']" :class="{ 'dark-primary': darkMode, 'light-primary': !darkMode}"/>
        <font-awesome-icon v-else :icon="['fas', 'moon']"/>
      </div>
      <NuxtLink :to="url" class="btn btn-primary link-item position-relative float-right"> {{ content }} <slot></slot></NuxtLink>
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
    async handleClick() {
      await this.$store.dispatch('toggleMode')
      this.$nuxt.$emit('mode-updated')//Global event on nuxt
    }
  },
  mounted() {
    this.$store.dispatch('getMode')
  }
}
</script>

<style scoped>
.mode-btn{
  margin: 3px 3px 3px 15px;
  font-size: 25px;
  cursor: pointer;
}
.link-item {
  font-size: 12px;
  font-weight: bold;
  padding: 10px 15px;
}
</style>
