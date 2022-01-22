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
  SET_CHART_LOADING(state: any): void {
    state.loadingChartData = true
  },
  UNSET_CHART_LOADING(state: any): void {
    state.loadingChartData = false
  },
}
