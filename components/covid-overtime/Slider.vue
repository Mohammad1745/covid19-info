<template>
<div class="container-lg mt-3" style="max-width: 80vh">
  <div :class="{ 'dark-primary': darkMode, 'light-primary': !darkMode}">
    <p>{{ selectedDate }} <span class="position-relative float-right">Since {{ startDate }}</span> </p>
    <p>Day :</p>
    <input type="range" v-model="sliderValue"
           style="width: 100%"
           v-on:input="updateDate(sliderValue)"
           aria-labelledby='continuous-slider'
           :max="diffInDays">
    <div class="d-flex justify-content-between">
      <span>0</span>
      <span>Yesterday</span>
    </div>
  </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Slider",
  data() {
    return {
      loading: true,
      sliderValue: 0
    }
  },
  computed: {
    ...mapGetters(['darkMode', 'diffInDays', 'startDate', 'selectedDate']),
  },
  mounted() {
  },
  methods: {
    ...mapActions(['updateDate'])
  }
}
</script>

<style scoped>
input[type=range] {
  height: 21px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 2px;
  cursor: pointer;
  background: #2497E3;
  border-radius: 2px;
}
input[type=range]::-webkit-slider-thumb {
  height: 15px;
  width: 15px;
  border-radius: 18px;
  background: #1700B0;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -6.5px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #2497E3;
}
</style>
