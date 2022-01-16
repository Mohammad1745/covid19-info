import actions from './actions'
import mutations from "./mutations";

export default {
  state: () => ({
    info: {},
    lastDayInfo: {}
  }),
  getters: {
    allInfo: (state: any) => {
      let date = state.info.updated ? new Date(state.info.updated) : new Date()

      return [
        {title: 'TOTAL CASES', quantity: state.info.cases, date, todayIncrease: (state.info.cases/state.lastDayInfo.cases) * 100},
        {title: 'TOTAL DEATHS', quantity: state.info.deaths, date, todayIncrease: (state.info.deaths/state.lastDayInfo.deaths - 1) * 100},
        {title: 'TOTAL RECOVERIES', quantity: state.info.recovered, date, todayIncrease: (state.info.recovered/state.lastDayInfo.recovered - 1) * 100},
        {title: 'ACTIVE CASES', quantity: state.info.active, date, todayIncrease: (state.info.active/state.lastDayInfo.active - 1) * 100},
      ]
    },
  },
  actions: {...actions},
  mutations: {...mutations},
}
