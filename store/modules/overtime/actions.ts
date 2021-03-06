import axios from "axios";

export default {
  updateDate (context:any, value:number):void{
    context.commit('UPDATE_DATE', value)
  },
  async updateCountryMapData(context: any):Promise<any>  {
    try {
      let response = await axios.get('https://disease.sh/v3/covid-19/historical?lastdays=all')
      context.commit('UPDATE_COUNTRY_MAP_DATA', response.data)
    }catch (e) {
      console.log(e.message)
    }
  },
  async updateCountryLocation(context: any):Promise<any> {
    try {
      let response = await axios.get('https://disease.sh/v3/covid-19/countries')
      context.commit('UPDATE_COUNTRY_LOCATION', response.data)
    }catch (e) {
      console.log(e.message)
    }
  },
  updateMapContent (context:any, list:string[]):boolean {
    if (list.length) {
      context.commit('UPDATE_MAP_CONTENTS', list)
      return true
    } else return false
  },
}
