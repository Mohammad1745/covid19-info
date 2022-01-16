import actions from './actions'
import mutations from "./mutations";
import getters from "./getters";

export default {
  state: () => ({
    todayInfo: {},
    lastDayInfo: {}
  }),
  getters: {...getters},
  actions: {...actions},
  mutations: {...mutations},
}
