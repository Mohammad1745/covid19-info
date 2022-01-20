import actions from './actions'
import mutations from './mutations'

export default {
  state: () => ({
    darkMode: false
  }),
  getters: {
    darkMode:  (state:any) => state.darkMode,
  },
  actions: {...actions},
  mutations: {...mutations}
}
