import helper from "~/helpers/helper";

export default  {
  UPDATE_ALL_COUNTRY_INFO(state: any, data: []): void {
    state.allCountryInfo = data
      .sort((a:any, b:any) => b.cases-a.cases)
      //Send specific arrays only with rank
      .map((info:any, index:number) => ({
        rank: index+1,
        flag: info.countryInfo.flag,
        lat: info.countryInfo.lat,
        long: info.countryInfo.long,
        name: info.country,
        cases: helper.convertToAccountingFormat(info.cases),
        deaths: helper.convertToAccountingFormat(info.deaths),
        recovered: helper.convertToAccountingFormat(info.recovered),
        todayCases: (info.todayCases ? '+':'')
          +helper.convertToAccountingFormat(info.todayCases),
        todayDeaths: (info.todayDeaths ? '+':'')
          +helper.convertToAccountingFormat(info.todayDeaths),
        todayRecovered: (info.todayRecovered ? '+':'')
          +helper.convertToAccountingFormat(info.todayRecovered),
        casesPerOneMillion: helper.convertToAccountingFormat(info.casesPerOneMillion),
        deathsPerOneMillion: helper.convertToAccountingFormat(info.deathsPerOneMillion)
      }))
  },
  UPDATE_LAST_DAY_ALL_COUNTRY_INFO(state: any, data: []): void {
    state.lastDayAllCountryInfo = data
      .sort((a:any, b:any) => b.cases-a.cases)
      //Send specific arrays only with rank
      .map((info:any, index:number) => ({
        rank: index+1,
        flag: info.countryInfo.flag,
        name: info.country,
        cases: helper.convertToAccountingFormat(info.cases),
        deaths: helper.convertToAccountingFormat(info.deaths),
        recovered: helper.convertToAccountingFormat(info.recovered),
        todayCases: (info.todayCases ? '+':'')
          +helper.convertToAccountingFormat(info.todayCases),
        todayDeaths: (info.todayDeaths ? '+':'')
          +helper.convertToAccountingFormat(info.todayDeaths),
        todayRecovered: (info.todayRecovered ? '+':'')
          +helper.convertToAccountingFormat(info.todayRecovered),
        casesPerOneMillion: helper.convertToAccountingFormat(info.casesPerOneMillion),
        deathsPerOneMillion: helper.convertToAccountingFormat(info.deathsPerOneMillion)
      }))
  },
  UPDATE_COUNTRY_INPUT(state: any, text: string): void {
    state.country = text
  },
  UPDATE_DAY_INPUT(state: any, text: string): void {
    state.yesterday = text === 'Yesterday';
  },
  UPDATE_ROWS_PER_PAGE_INPUT(state: any, rowsPerPage: number): void {
    state.rowsPerPage = rowsPerPage
  },
  RESET_PAGE(state: any): void {
    state.page = 1
  },
  INCREASE_PAGE_NUMBER(state: any): void {
    state.page++
  },
  DECREASE_PAGE_NUMBER(state: any): void {
    state.page--
  },

}
