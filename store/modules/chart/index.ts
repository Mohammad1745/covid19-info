import actions from './actions'
import mutations from "./mutations";

export default {
  state: () => ({
    chartData: {},
    country: '',
    contents: ['cases', 'deaths', 'recovered'],
    loadingCountryData: false,
  }),
  getters: {
    isLoadingCountryData: (state:any) => state.loadingCountryData,
    rawChartData: (state:any) => state.chartData,
    selectedCountry: (state:any) => state.country,
    chartContent: (state:any) => state.contents,
    countryNames: (state:any, getters:any, rootState:any) =>  Object.keys(rootState.datatable.allCountryInfo)
      .map((key:string) => rootState.datatable.allCountryInfo[key].name)
      .sort()
  },
  actions: {...actions},
  mutations: {...mutations},
}
