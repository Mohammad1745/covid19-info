import actions from './actions'
import mutations from './mutations'

export default {
  state: () => ({
    lightMode: true
  }),
  getters: {
    lightMode:  (state:any) => state.lightMode,
  },
  actions: {...actions},
  mutations: {...mutations}
}
