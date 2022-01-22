import actions from './actions'
import mutations from "./mutations";

export default {
  state: () => ({
    globalData: {},
    countryData: [],
    country: 'global',
    contents: ['cases'],
    loadingChartData: false,
  }),
  getters: {
    isLoadingChartData: (state:any) => state.loadingChartData,
    rawChartData: (state:any) => {
      if (state.country==="global") {
        return state.globalData
      } else {
        const filteredCountryData = state.countryData.filter((data:{country:string}) =>
          data.country.toLowerCase()===state.country.toLowerCase())
        return filteredCountryData[0].timeline
      }
    },
    selectedCountry: (state:any) => state.country,
    chartContent: (state:any) => state.contents,
    countryNames: (state:any, getters:any, rootState:any) =>  Object.keys(rootState.datatable.allCountryInfo)
      .map((key:string) => rootState.datatable.allCountryInfo[key].name)
      .sort()
  },
  actions: {...actions},
  mutations: {...mutations},
}
