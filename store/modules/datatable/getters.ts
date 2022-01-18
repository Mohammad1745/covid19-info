import helper from '../../../helpers/helper';

export default {
  globalInfo: (state: any, getters:any, rootState:any):string[]|number[] => {
    return [
      '',
      '🌎Global',
      helper.convertToAccountingFormat(rootState.count.todayInfo.cases),
      helper.convertToAccountingFormat(rootState.count.todayInfo.deaths),
      helper.convertToAccountingFormat(rootState.count.todayInfo.recovered),
      helper.convertToAccountingFormat(rootState.count.todayInfo.todayCases),
      helper.convertToAccountingFormat(rootState.count.todayInfo.todayDeaths),
      helper.convertToAccountingFormat(rootState.count.todayInfo.todayRecovered),
      helper.convertToAccountingFormat(rootState.count.todayInfo.casesPerOneMillion),
      helper.convertToAccountingFormat(rootState.count.todayInfo.deathsPerOneMillion)
    ]
  },
  countriesInfo: (state: any) => state.allCountryInfo.filter((dataSet:{country:string}):boolean => dataSet.country.includes(state.country) || state.country==="")
}
