import axios from "axios";

export default {
  async updateAllCountryInfo(context: any):Promise<any> {
    try {
      let response = await axios.get('https://disease.sh/v3/covid-19/countries')
      context.commit('UPDATE_ALL_COUNTRY_INFO', response.data)}
    catch (e) {
      console.log(e.message)
    }
  },
  async updateLastDayAllCountryInfo(context: any):Promise<any>  {
    try {
      let response = await axios.get('https://disease.sh/v3/covid-19/countries?yesterday=1')
      context.commit('UPDATE_LAST_DAY_ALL_COUNTRY_INFO', response.data)
    } catch (e) {
      console.log(e.message)
    }
  },
  updateDayInput (context:any, text:string):void{
    context.commit('UPDATE_DAY_INPUT', text)
  },
  updateCountryInput (context:any, text:string):void{
    context.commit('UPDATE_COUNTRY_INPUT', text)
    context.commit('RESET_PAGE')
  },
  handlePagination (context:any, rowsPerPage:number):void{
    context.commit('UPDATE_ROWS_PER_PAGE_INPUT', rowsPerPage)
    context.commit('RESET_PAGE')
  },
  moveNextPage (context:any):void{
    if(context.getters.currentPage < context.getters.totalPages)
      context.commit('INCREASE_PAGE_NUMBER')
  },
  movePreviousPage (context:any):void{
    if(context.getters.currentPage > 1)
      context.commit('DECREASE_PAGE_NUMBER')
  }
}
