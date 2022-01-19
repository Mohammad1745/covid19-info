import axios from "axios";

export default {
  async updateChartDataWithGlobalInfo(context: any):Promise<any> {
    let response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
    context.commit('UPDATE_CHART_DATA', response.data)
  },
  async updateChartDataWithCountryInfo(context: any):Promise<any>  {
    let response = await axios.get(`https://disease.sh/v3/covid-19/historical/${context.state.country}?lastdays=all`)
    context.commit('UPDATE_CHART_DATA', response.data)
  },
}
