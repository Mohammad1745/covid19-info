import helper from '../../../helpers/helper';

export default {
  loadingCountryInfo: (state: any) => state.loadingAllCountryInfo,
  globalInfo: (state: any, getters:any, rootState:any):string[]|number[] => {
    return [
      '',
      'Global',
      rootState.count.todayInfo.cases,
      rootState.count.todayInfo.deaths,
      rootState.count.todayInfo.recovered,
      rootState.count.todayInfo.todayCases,
      rootState.count.todayInfo.todayDeaths,
      rootState.count.todayInfo.todayRecovered,
      rootState.count.todayInfo.casesPerOneMillion,
      rootState.count.todayInfo.deathsPerOneMillion
    ]
  },
  countriesInfo: (state: any) => state.allCountryInfo.filter((dataSet:{country:string}):boolean => dataSet.country.includes(state.country) || state.country==="")
}
