<template>
 <div :class="classNames">
   <input
     type="text"
     v-model="text"
     class="search-input"
     :class="{ 'dark-input': darkMode, 'light-input': !darkMode}"
     placeholder="Search By Country"
     @keyup="updateCountryInput(text)"
     @change="updateCountryInput(text)"
   />
   <span
     class="label"
     :class="{ 'dark-primary dark-bg': darkMode, 'light-primary light-bg': !darkMode}"
   >Search By Country</span>
 </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"

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
  methods: {
    ...mapActions(['updateCountryInput'])
  },
  // async mounted() {
  //   await this.$store.dispatch('updateAllCountryInfo')
  //   await this.$store.dispatch('updateLastDayAllCountryInfo')
  //   await this.$store.dispatch('updateCountryInfoLoaded')
  // }
}
</script>

<style scoped>
.search-input {
  background: transparent;
  padding: 18px 14px;
}
.label {
  position: absolute;
  font-size: 0;
  margin-left: -200px;
  transition-duration: .1s;
}
.search-input:focus {
  outline: 2px solid #1380d4;
}
.search-input:focus + .label{
  position: absolute;
  margin-top: -9px;
  margin-left: -230px;
  padding: 0 5px;
  font-size: 13px;
  color: #1380d4;
  transition-duration: .5s;
}
</style>
