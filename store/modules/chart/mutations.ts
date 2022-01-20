export default  {
  UPDATE_CHART_DATA(state: any, data: {}): void {
    state.chartData = data;
  },
  UPDATE_COUNTRY(state: any, text: string): void {
    state.country = text
  },
  UPDATE_CONTENTS(state: any, list: string[]): void {
    state.contents = list
  },
  SET_COUNTRY_LOADING(state: any): void {
    state.loadingCountryData = true
  },
  UNSET_COUNTRY_LOADING(state: any): void {
    state.loadingCountryData = false
  },
}
