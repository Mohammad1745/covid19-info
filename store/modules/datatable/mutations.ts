export default  {
  UPDATE_ALL_COUNTRY_INFO(state: any, data: {}): void {
    state.allCountryInfo = data
  },
  UPDATE_LAST_DAY_ALL_COUNTRY_INFO(state: any, data: {}): void {
    state.lastDayAllCountryInfo = data
  },
  UPDATE_COUNTRY_INPUT(state: any, text: string): void {
    state.country = text
  },
}
