import helper from '../../../helpers/helper';

export default {
  globalInfo: (state: any, getters:any, rootState:any):{} => ({
    cases: helper.convertToAccountingFormat(rootState.count.todayInfo.cases),
    deaths: helper.convertToAccountingFormat(rootState.count.todayInfo.deaths),
    recovered: helper.convertToAccountingFormat(rootState.count.todayInfo.recovered),
    todayCases: helper.convertToAccountingFormat(rootState.count.todayInfo.todayCases),
    todayDeaths: helper.convertToAccountingFormat(rootState.count.todayInfo.todayDeaths),
    todayRecovered: helper.convertToAccountingFormat(rootState.count.todayInfo.todayRecovered),
    casesPerOneMillion: helper.convertToAccountingFormat(rootState.count.todayInfo.casesPerOneMillion),
    deathsPerOneMillion: helper.convertToAccountingFormat(rootState.count.todayInfo.deathsPerOneMillion)
  }),
  countriesInfo: (state: any) => {
    let dataSet = state.yesterday ? [...state.lastDayAllCountryInfo] : [...state.allCountryInfo]
    //Set Ranks according to cases
    return dataSet
      .sort((a:any, b:any) => b.cases-a.cases)
      .map((country:any, index:number) => ({...country, rank: index+1}))
      //Filter dataset according to country search
      .filter((dataSet: { country: string }): boolean => dataSet.country.includes(state.country) || state.country === "")
      //Sort filtered Data By Rank
      .sort((a:any, b:any) => a.rank-b.rank)
      //Take 10, 25, 50, 100 per page
      .slice((state.page-1)*state.rowsPerPage)
      .slice(0, state.rowsPerPage)
      //Send specific arrays only
      .map((info:any) => ({
        rank: info.rank,
        flag: info.countryInfo.flag,
        name: info.country,
        cases: helper.convertToAccountingFormat(info.cases),
        deaths: helper.convertToAccountingFormat(info.deaths),
        recovered: helper.convertToAccountingFormat(info.recovered),
        todayCases: helper.convertToAccountingFormat(info.todayCases),
        todayDeaths: helper.convertToAccountingFormat(info.todayDeaths),
        todayRecovered: helper.convertToAccountingFormat(info.todayRecovered),
        casesPerOneMillion: helper.convertToAccountingFormat(info.casesPerOneMillion),
        deathsPerOneMillion: helper.convertToAccountingFormat(info.deathsPerOneMillion)
      }))
  }
}
