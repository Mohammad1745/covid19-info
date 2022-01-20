<template>
  <div :class="classNames">
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
        :value="content.value"> <span :class="{ 'dark-primary': darkMode, 'light-primary': !darkMode}">{{ content.name }}</span>
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
      'country': '',
      'dataContent': ['cases', 'deaths', 'recovered'],
      'dataContentList': [{name: 'Cases', value: 'cases'}, {name: 'Deaths', value: 'deaths'}, {name: 'Recoveries', value: 'recovered'}],
    }
  },
  computed: {
    ...mapGetters(['darkMode', 'chartContent', 'countryNames'])
  },
  methods: {
    async updateChartContent () {
      const success = await this.$store.dispatch('updateChartContent', this.dataContent)
      this.dataContent = this.chartContent
      if (success){
        this.$emit('data-updated')
        await this.$store.dispatch('unsetCountryLoading')
      }
    },
    async handleCountryInput(text) {
      await this.$store.dispatch('updateCountry', text)
      if (this.country==='global')
        await this.$store.dispatch('updateChartDataWithGlobalInfo')
      else
        await this.$store.dispatch('updateChartDataWithCountryInfo')
      this.$emit('data-updated')
      await this.$store.dispatch('unsetCountryLoading')
    }
  },
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
  margin-left: -260px;
  padding: 0 5px;
  font-size: 13px;
  color: #1380d4;
  transition-duration: .5s;
}
</style>
