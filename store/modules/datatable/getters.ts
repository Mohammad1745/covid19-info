import helper from '../../../helpers/helper';

export default {
  rowsPerPage: (state:any):number => state.rowsPerPage,
  currentPage: (state:any):number => state.page,
  totalPages: (state:any):number => Math.ceil(state.allCountryInfo.length/state.rowsPerPage),

  globalInfo: (state: any, getters:any, rootState:any):{} => ({
    cases: helper.convertToAccountingFormat(rootState.count.todayInfo.cases),
    deaths: helper.convertToAccountingFormat(rootState.count.todayInfo.deaths),
    recovered: helper.convertToAccountingFormat(rootState.count.todayInfo.recovered),
    todayCases: (rootState.count.todayInfo.todayCases ? '+':'')
      +helper.convertToAccountingFormat(rootState.count.todayInfo.todayCases),
    todayDeaths: (rootState.count.todayInfo.todayDeaths ? '+':'')
      +helper.convertToAccountingFormat(rootState.count.todayInfo.todayDeaths),
    todayRecovered: (rootState.count.todayInfo.todayRecovered ? '+':'')
      +helper.convertToAccountingFormat(rootState.count.todayInfo.todayRecovered),
    casesPerOneMillion: helper.convertToAccountingFormat(rootState.count.todayInfo.casesPerOneMillion),
    deathsPerOneMillion: helper.convertToAccountingFormat(rootState.count.todayInfo.deathsPerOneMillion)
  }),
  countriesInfo: (state: any) => {
    let dataSet = state.yesterday ? [...state.lastDayAllCountryInfo] : [...state.allCountryInfo]
    //Set Ranks according to cases
    return dataSet
      //Filter dataset according to country search
      .filter((dataSet: { name: string }): boolean =>
        state.country === "" || dataSet.name.toLowerCase().includes(state.country.toLowerCase()))
      //Sort filtered Data By Rank
      .sort((a:any, b:any) => a.rank-b.rank)
      //Take 10, 25, 50, 100 per page
      .slice((state.page-1)*state.rowsPerPage)
      .slice(0, state.rowsPerPage)
  }
}
