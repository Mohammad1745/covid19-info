<template>
<div class="container-lg mt-3" style="max-width: 100vh">
  <div v-if="!loading"  :class="{ 'dark-primary': darkMode, 'light-primary': !darkMode}">
    <p>{{ selectedDate }}</p>
    <p>Day Since {{ startDate }}:</p>
    <div class="d-flex justify-content-between">
      <span>0</span>
      <span>Yesterday</span>
    </div>
    <input type="range" v-model="sliderValue"
           style="width: 100%"
           v-on:input="handleChange"
           aria-labelledby='continuous-slider'

           :marks="marks"
           :max="diffInDays">
  </div>
</div>
</template>

<script>
import { mapGetters} from "vuex";

export default {
  name: "Slider",
  data() {
    return {
      loading: true,
      sliderValue: 0,
      dateToday: '',
      firstDate: '',
      diffInTime: 0,
      diffInDays: 0,
      marks:[],
    }
  },
  computed: {
    ...mapGetters(['darkMode', 'startDate','selectedDate']),
  },
  mounted() {
    this.$nuxt.$on('map-data-loaded', () => {
      this.setSlider()
      this.loading = false
    })
  },
  methods: {
    setSlider () {
      this.dateToday=new Date(),
      this.firstDate=new Date(this.startDate),
      this.diffInTime=this.dateToday.getTime()-this.firstDate.getTime(),
      this.diffInDays=Math.floor(this.diffInTime/(1000*3600*24))-1,
      this.marks = [
        {
          value: 0,
          label: 'Day 0',
        },
        {
          value: this.diffInDays,
          label: 'Yesterday',
        },
      ]
    },
    async handleChange() {
      await this.$store.dispatch('updateDate', this.sliderValue)
      this.$nuxt.$emit('slider-input')
    }
  }
}
</script>

<style scoped>

</style>
