import axios from "axios";

export default {
  async updateChartDataWithGlobalInfo(context: any):Promise<any> {
    let response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
    context.commit('UPDATE_CHART_DATA', response.data)
  },
  async updateChartDataWithCountryInfo(context: any):Promise<any>  {
    let response = await axios.get(`https://disease.sh/v3/covid-19/historical/${context.state.country}?lastdays=all`)
    context.commit('UPDATE_CHART_DATA', response.data.timeline)
  },
  updateCountry (context:any, text:string):void{
    context.commit('UPDATE_COUNTRY', text)
    context.commit('SET_CHART_LOADING')
  },
  updateChartContent (context:any, list:string[]):boolean {
    if (list.length) {
      context.commit('UPDATE_CONTENTS', list)
      return true
    } else return false
  },
  setChartLoading (context:any):void{
    context.commit('SET_CHART_LOADING')
  },
  unsetChartLoading (context:any):void{
    context.commit('UNSET_CHART_LOADING')
  },
}
