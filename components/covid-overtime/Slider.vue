<template>
<div class="container-lg mt-3" style="max-width: 80vh">
  <div :class="{ 'dark-primary': darkMode, 'light-primary': !darkMode}">
    <p>{{ selectedDate }}</p>
    <p>Day Since {{ startDate }}:</p>
    <div class="d-flex justify-content-between">
      <span>0</span>
      <span>Yesterday</span>
    </div>
    <input type="range" v-model="sliderValue"
           style="width: 100%"
           v-on:input="updateDate(sliderValue)"
           aria-labelledby='continuous-slider'

           :marks="marks"
           :max="diffInDays">
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
      sliderValue: 0,
      marks:[],
    }
  },
  computed: {
    ...mapGetters(['darkMode', 'diffInDays','selectedDate']),
  },
  mounted() {
  },
  methods: {
    ...mapActions(['updateDate'])
  }
}
</script>

<style scoped>

</style>
