export default  {
  UPDATE_INFO(state: any, data: {}): void {
    state.todayInfo = data
  },
  UPDATE_LAST_DAY_INFO(state: any, data: {}): void {
    state.lastDayInfo = data
  },
}
