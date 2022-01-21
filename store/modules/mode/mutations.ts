export default  {
  TOGGLE_MODE(state: any): void {
    state.darkMode = !state.darkMode
    state.darkMode
      ? localStorage.setItem('dark_mode', 'true')
      : localStorage.removeItem('dark_mode')
  },
  GET_MODE(state: any): void {
    state.darkMode = localStorage.getItem('dark_mode')
  },
}
