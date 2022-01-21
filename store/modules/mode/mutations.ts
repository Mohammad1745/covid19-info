export default  {
  TOGGLE_MODE(state: any): void {
    state.darkMode = !state.darkMode
    localStorage.removeItem('dark_mode')
    localStorage.setItem('dark_mode', state.darkMode)
  },
  GET_MODE(state: any): void {
    state.darkMode = Boolean(localStorage.getItem('dark_mode'))
  },
}
