<template>
  <div class="container-lg mt-5">
    <Loader v-if="loading" />
    <div v-else>
      <Heading title="Worldwide Effects" classNames="mb-3">
        <img width="40" src="~assets/svg/global.svg" alt="">
      </Heading>
      <ChartController @data-updated="setData" classNames="mb-3"/>
      <!-- Total - Line Chart -->
      <div class="p-4" :class="{ 'dark-chart': darkMode, 'light-chart': !darkMode}">
        <h5 :class="{ 'dark-primary': darkMode, 'light-secondary': !darkMode}">
          <img width="40" src="~assets/svg/cases.svg" alt="">
          <span class="font-weight-bold"> Total </span>
          (<u>Linear Scale</u>)
        </h5>
        <Loader v-if="isLoadingChartData" />
        <LineChart v-else :chart-data="chartData" :options="options"></LineChart>
      </div>
      <!-- Daily New Cases - Bar Chart -->
      <div v-if="chartContent.includes('cases')" class="p-4 mt-4" :class="{ 'dark-chart': darkMode, 'light-chart': !darkMode}">
        <h5 :class="{ 'dark-primary': darkMode, 'light-secondary': !darkMode}">
          <img width="40" src="~assets/svg/active-cases.svg" alt="">
          <span class="font-weight-bold"> Daily New Cases</span>
          (<u>Per Day</u>)
        </h5>
        <Loader v-if="isLoadingChartData" />
        <BarChart v-else :chart-data="caseChartData" :options="options"></BarChart>
      </div>
      <!-- Daily New Recoveries -  Bar Chart -->
      <div v-if="chartContent.includes('recovered')" class="p-4 mt-4" :class="{ 'dark-chart': darkMode, 'light-chart': !darkMode}">
        <h5 :class="{ 'dark-primary': darkMode, 'light-secondary': !darkMode}">
          <img width="40" src="~assets/svg/recoveries.svg" alt="">
          <span class="font-weight-bold"> Daily New Recoveries</span>
          (<u>Per Day</u>)
        </h5>
        <Loader v-if="isLoadingChartData" />
        <BarChart v-else :chart-data="recoveryChartData" :options="options"></BarChart>
      </div>
      <!-- Daily New Deaths -  Bar Chart -->
      <div v-if="chartContent.includes('deaths')" class="p-4 mt-4" :class="{ 'dark-chart': darkMode, 'light-chart': !darkMode}">
        <h5 :class="{ 'dark-primary': darkMode, 'light-secondary': !darkMode}">
          <img width="40" src="~assets/svg/deaths.svg" alt="">
          <span class="font-weight-bold"> Daily New Deaths</span>
          (<u>Per Day</u>)
        </h5>
        <Loader v-if="isLoadingChartData" />
        <BarChart v-else :chart-data="deathChartData" :options="options"></BarChart>
      </div>
      <Scroller />
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import helper from "../../helpers/helper"

export default {
  name: "TotalInfoChart",
  data() {
    return {
      loading: true,
      options: {},
      chartData: {},
      caseChartData: {},
      deathChartData: {},
      recoveryChartData: {},
    }
  },
  computed: {
    ...mapGetters(['darkMode', 'selectedCountry', 'chartContent', 'rawChartData', 'isLoadingChartData']),
  },
  async mounted() {
    await this.$store.dispatch('updateChartDataWithGlobalInfo')
    this.setData()
    this.setOptions()
    this.loading = false
  },
  methods: {
    setData () {
      this.setTotalChartData()
      this.setCasesChartData()
      this.setRecoveriesChartData()
      this.setDeathsChartData()
    },
    setOptions () {
      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          labels: {
            fontColor: this.darkMode ? "#fff" : "#111",
          }
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                fontColor: this.darkMode ? "#fff" : "#111",
                fontSize: 14,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                callback: (val, index) => helper.convertToMultiplier(val, 1),
                fontColor: this.darkMode ? "#fff" : "#111",
              },
              gridLines: {
                // display: true,
                // borderDash: [4, 4],
                // color: '#464646',
                // drawBorder: false,
              },
            },
          ],
        }
      }
    },
    setTotalChartData () {
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
    },
    setCasesChartData () {
      const cases = Object.keys(this.rawChartData.cases).map(key => this.rawChartData.cases[key])
      this.caseChartData = {
        labels: Object.keys(this.rawChartData.cases),
        datasets: [{
          data: cases.map((value, index) => index ? value - cases[index-1] : value ),
          label: "Cases",
          borderColor: "#ffbb77",
          backgroundColor: "#ffbb77",
          fill: false
        }]
      }
    },
    setRecoveriesChartData () {
      const recoveries = Object.keys(this.rawChartData.recovered).map(key => this.rawChartData.recovered[key])
      this.recoveryChartData = {
        labels: Object.keys(this.rawChartData.recovered),
        datasets: [{
          data: recoveries.map((value, index) => {
            const amount = index ? value - recoveries[index - 1] : value
            return amount > 0 ? amount : 0
          }),
          label: "Recoveries",
          borderColor: "green",
          backgroundColor: "green",
          fill: false
        }]
      }
    },
    setDeathsChartData () {
      const deaths = Object.keys(this.rawChartData.deaths).map(key => this.rawChartData.deaths[key])
      this.deathChartData = {
        labels: Object.keys(this.rawChartData.deaths),
        datasets: [{
          data: deaths.map((value, index) => index ? value - deaths[index-1] : value ),
          label: "Deaths",
          borderColor: "#e53935",
          backgroundColor: "#e53935",
          fill: false
        }]
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
