<template>
  <div :class="{ 'light-mode': lightMode, 'dark-mode': !lightMode}">
    <Navbar url="/" content="HOME" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapGetters} from "vuex"

export default Vue.extend({
  name: 'IndexPage',
  computed: {
    ...mapGetters(['lightMode'])
  },
})
</script>

<style>
</style>
