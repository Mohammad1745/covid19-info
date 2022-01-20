<template>
  <div class="container-lg mt-5">
    <Loader v-if="loading" />
    <div v-else>
      <Heading title="Graphical Comparison" classNames="mb-3">
        <img width="40" src="~assets/svg/global.svg" alt="">
      </Heading>
      <ChartController @data-updated="setData" classNames="mb-3"/>
      <div class="p-4" :class="{ 'dark-chart': darkMode, 'light-chart': !darkMode}">
        <Loader v-if="isLoadingCountryData" />
        <LineChart v-else :chart-data="chartData" :options="options"></LineChart>
      </div>
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
    ...mapGetters(['darkMode', 'selectedCountry', 'chartContent', 'rawChartData', 'isLoadingCountryData']),
  },
  methods: {
    setData () {
      let dataSet = []
      if (this.chartContent.includes('cases'))
        dataSet.push({
          data: Object.keys(this.rawChartData.cases).map(key => this.rawChartData.cases[key]),
          label: "Cases",
          borderColor: "#ffbb77",
          fill: false
        })
      if (this.chartContent.includes('deaths'))
        dataSet.push({
          data: Object.keys(this.rawChartData.cases).map(key => this.rawChartData.deaths[key]),
          label: "Deaths",
          borderColor: "#e53935",
          fill: false
        })
      if (this.chartContent.includes('recovered'))
        dataSet.push({
          data: Object.keys(this.rawChartData.cases).map(key => this.rawChartData.recovered[key]),
          label: "Recovered",
          borderColor: "green",
          fill: false
        })
      this.chartData = {
        labels: Object.keys(this.rawChartData.cases),
        datasets: dataSet
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
