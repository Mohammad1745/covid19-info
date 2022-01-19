<template>
 <div :class="classNames" class="d-flex justify-content-end">
   <select class="" :class="{'dark' :darkMode}"
     @change="updateDayInput(day)" v-model="day">
     <option
       v-for="(option, i) in days"
       :key="i"
       :value="option">{{ option }}</option>
   </select>
 </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"

export default {
  name: "DaySelector",
  props: ['classNames'],
  data(){
    return {
      'day': 'Today',
      'days': ['Today', 'Yesterday']
    }
  },
  computed: {
    ...mapGetters(['darkMode'])
  },
  methods: {
    ...mapActions(['updateDayInput'])
  },
}
</script>

<style scoped>
select,
select:focus {
  color: #111;
  border:none;
  outline: none;
  background: transparent;
}
select.dark,
select.dark option {
  color: #fff;
  background-color: var(--border-dark);
}
</style>
