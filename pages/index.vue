<template>
  <div :class="{ 'light-bg': lightMode, 'dark-bg': !lightMode}">
      <Navbar url="/covid-overtime" content="COVID OVERTIME" />
      <Counts />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapGetters} from "vuex"
// import Counts from "../components/home/Counts"

export default Vue.extend({
  name: 'IndexPage',
  // components:{Counts},
  computed: {
    ...mapGetters(['lightMode'])
  },
})
</script>

<style>
</style>
