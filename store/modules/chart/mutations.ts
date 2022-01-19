import helper from "~/helpers/helper";

export default  {
  UPDATE_CHART_DATA(state: any, data: {}): void {
    state.chartData = data;
    console.log(state.chartData);
  },
  UPDATE_COUNTRY_INPUT(state: any, text: string): void {
    state.country = text
  },
}
