import axios from "axios";

export default {
  updateDate (context:any, value:number):void{
    context.commit('UPDATE_DATE', value)
    context.commit('UPDATE_OVERTIME_INFO', context.rootState)
  },
  async updateCountryLocation(context: any):Promise<any> {
    let response = await axios.get('https://disease.sh/v3/covid-19/countries')
    context.commit('UPDATE_COUNTRY_LOCATION', response.data)
  },
  updateMapContent (context:any, list:string[]):boolean {
    if (list.length) {
      context.commit('UPDATE_CONTENTS', list)
      return true
    } else return false
  },
}
