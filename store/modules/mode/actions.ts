export default {
  toggleMode(context: any): void {
    context.commit('TOGGLE_MODE')
  },
  getMode(context: any): void {
    context.commit('GET_MODE')
  }
}
