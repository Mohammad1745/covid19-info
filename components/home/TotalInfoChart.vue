<template>
  <div class="container-lg mt-5">
    <Loader v-if="loading" />
    <div v-else class="p-4" :class="{ 'dark-chart': darkMode, 'light-chart': !darkMode}">
      <Heading title="Graphical Comparison" classNames="mb-3">
        <img width="40" src="~assets/svg/global.svg" alt="">
      </Heading>
      <LineChart :chart-data="chartData" :options="options"></LineChart>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "TotalInfoChart",
  data() {
    return {
      loading: true,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
      chartData: {}
    }
  },
  computed: {
    ...mapGetters(['darkMode', 'rawChartData']),
  },
  methods: {
    ...mapActions(['updateChartDataWithGlobalInfo']),
    setData () {
      this.chartData = {
        labels: Object.keys(this.rawChartData.cases),
          datasets: [
          {
            data: Object.keys(this.rawChartData.cases).map(key => this.rawChartData.cases[key]),
            label: "Cases",
            borderColor: "#ffbb77",
            fill: false
          },
          {
            data: Object.keys(this.rawChartData.cases).map(key => this.rawChartData.deaths[key]),
            label: "Deaths",
            borderColor: "#e53935",
            fill: false
          },
          {
            data: Object.keys(this.rawChartData.cases).map(key => this.rawChartData.recovered[key]),
            label: "Recovered",
            borderColor: "green",
            fill: false
          }
        ]
      }
    }
  },
  async mounted() {
    await this.$store.dispatch('updateChartDataWithGlobalInfo')
    this.setData()
    this.loading = false
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
