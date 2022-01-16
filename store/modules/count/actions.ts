import axios from "axios";

export default {
    async updateInfo(context: any) {
      let response = await axios.get('https://disease.sh/v3/covid-19/all')
      context.commit('UPDATE_INFO', response.data)
    },
    async updateLastDayInfo(context: any) {
      let response = await axios.get('https://disease.sh/v3/covid-19/all?lastdays=1')
      context.commit('UPDATE_LAST_DAY_INFO', response.data)
    },
  }
