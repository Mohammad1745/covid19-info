<template>
  <div id="chart_controller" :class="classNames">
    <select v-model="country"
            class="search-input"
            :class="{ 'dark-input': darkMode, 'light-input': !darkMode}"
            @change="handleCountryInput(country)"
    >
      <option value="global" selected style="font-weight:bold">Global</option>
      <option
        v-for="(option, i) in countryNames"
        :key="i"
        :value="option">{{ option }}</option>
    </select>
    <span
      class="label"
      :class="{ 'dark-primary dark-bg': darkMode, 'light-primary light-bg': !darkMode}"
    >Select Country</span>

    <div class="position-relative float-right">
      <div v-for="(content, i) in dataContentList" :key="i">
        <input type="checkbox" v-model="dataContent" @change="updateChartContent"
               :class="content.value" :value="content.value"> <span :class="{ 'dark-primary': darkMode, 'light-primary': !darkMode}">{{ content.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ChartController",
  props: ['classNames'],
  data(){
    return {
      'country': 'global',
      'dataContent': ['cases'],
      'dataContentList': [
        {name: 'Cases', value: 'cases'},
        {name: 'Deaths', value: 'deaths'},
        {name: 'Recoveries', value: 'recovered'}
      ],
    }
  },
  computed: {
    ...mapGetters(['darkMode', 'chartContent', 'countryNames'])
  },
  mounted () {
    this.dataContent = this.chartContent
  },
  methods: {
    async updateChartContent () {
      const success = await this.$store.dispatch('updateChartContent', this.dataContent)
      this.dataContent = this.chartContent
      if (success) this.$emit('data-updated')
    },
    async handleCountryInput(text) {
      await this.$store.dispatch('updateCountry', text)
      if (this.country==='global')
        await this.$store.dispatch('updateChartDataWithGlobalInfo')
      else
        await this.$store.dispatch('updateChartDataWithCountryInfo')
      this.$emit('data-updated')
    }
  },
}
</script>

<style scoped>
.search-input {
  background: transparent;
  padding: 18px 14px;
}
select,
select:focus {
  color: #111;
  outline: none;
  background: transparent;
}
select.dark-input,
select.dark-input option {
  color: #fff;
}
select.dark-input option {
  background-color: var(--border-dark);
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
  margin-left: -260px;
  padding: 0 5px;
  font-size: 13px;
  color: #1380d4;
  transition-duration: .5s;
}
input[type=checkbox] {
  -moz-appearance:none;
  -webkit-appearance:none;
  outline: none;
  content: none;
  cursor: pointer;
}
input[type=checkbox]:before {
  content: "\f00c";
  font-size: 15px;
  color: transparent;
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 5px;
  transform: translateY(2px);
}
input.cases:before {
  border: 2px solid #ffbb77;
}
input.deaths:before {
  border: 2px solid #e53935;
}
input.recovered:before {
  border: 2px solid green;
}
input.cases:checked:before {
  background: #ffbb77;
}
input.deaths:checked:before {
  background: #e53935;
}
input.recovered:checked:before {
  background: green;
}
</style>
