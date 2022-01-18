import axios from "axios";

export default {
    async updateAllCountryInfo(context: any):Promise<any> {
      let response = await axios.get('https://disease.sh/v3/covid-19/countries')
      context.commit('UPDATE_ALL_COUNTRY_INFO', response.data)
    },
    async updateLastDayAllCountryInfo(context: any):Promise<any>  {
      let response = await axios.get('https://disease.sh/v3/covid-19/countries?yesterday=1')
      context.commit('UPDATE_LAST_DAY_ALL_COUNTRY_INFO', response.data)
    },
    updateCountryInput (context:any, text:string):void{
      context.commit('UPDATE_COUNTRY_INPUT', text)
    }
  }
