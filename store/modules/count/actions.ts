import axios from "axios";

export default {
    async updateInfo(context: any) {
      try{
        let response = await axios.get('https://disease.sh/v3/covid-19/all')
        context.commit('UPDATE_INFO', response.data)
      }catch (e) {
        console.log(e.message)
      }
    },
    async updateLastDayInfo(context: any) {
      try{
        let response = await axios.get('https://disease.sh/v3/covid-19/all?yesterday=1')
        context.commit('UPDATE_LAST_DAY_INFO', response.data)
      }catch (e) {
        console.log(e.message)
      }
    },
  }
