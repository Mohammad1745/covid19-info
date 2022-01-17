<template>
 <div :class="classNames">
   <input
     type="text"
     v-model="text"
     class="search-input" :class="{ 'dark-input': darkMode, 'light-input': !darkMode}"
     placeholder="Search By Country">
 </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  name: "SearchBox",
  props: ['classNames'],
  data(){
    return {
      text: ''
    }
  },
  computed: {
    ...mapGetters(['darkMode'])
  },
}
</script>

<style scoped>
.search-input {
  background: transparent;
  padding: 18px 14px;
}
.search-input:focus {
  background: transparent;
  padding: 18px 14px;
}
</style>
