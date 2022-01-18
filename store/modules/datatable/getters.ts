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
  countriesInfo: (state: any) => {
    let dataSet = state.yesterday ? [...state.lastDayAllCountryInfo] : [...state.allCountryInfo]
    //Set Ranks according to cases
    dataSet = dataSet
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
      .map(((info:any) => [
      info.rank,
      info.country,
      helper.convertToAccountingFormat(info.cases),
      helper.convertToAccountingFormat(info.deaths),
      helper.convertToAccountingFormat(info.recovered),
      helper.convertToAccountingFormat(info.todayCases),
      helper.convertToAccountingFormat(info.todayDeaths),
      helper.convertToAccountingFormat(info.todayRecovered),
      helper.convertToAccountingFormat(info.casesPerOneMillion),
      helper.convertToAccountingFormat(info.deathsPerOneMillion)
    ]))
    return dataSet
  }
}
