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
        {
          title: 'TOTAL CASES',
          quantity: state.info.cases,
          date,
          difference: ((state.info.cases/state.lastDayInfo.cases-1) * 100).toFixed(2),
          increase: state.info.cases/state.lastDayInfo.cases > 1,
          lastDayQuantity: state.lastDayInfo.cases
        },
        {
          title: 'TOTAL DEATHS',
          quantity: state.info.deaths,
          date,
          difference: ((state.info.deaths/state.lastDayInfo.deaths - 1) * 100).toFixed(2),
          increase: state.info.deaths/state.lastDayInfo.deaths > 1,
          lastDayQuantity: state.lastDayInfo.deaths
        },
        {
          title: 'TOTAL RECOVERIES',
          quantity: state.info.recovered,
          date,
          difference: ((state.info.recovered/state.lastDayInfo.recovered - 1) * 100).toFixed(2),
          increase: state.info.recovered/state.lastDayInfo.recovered > 1,
          lastDayQuantity: state.lastDayInfo.recovered
        },
        {
          title: 'ACTIVE CASES',
          quantity: state.info.active,
          date,
          difference: ((state.info.active/state.lastDayInfo.active - 1) * 100).toFixed(2),
          increase: state.info.active/state.lastDayInfo.active > 1,
          lastDayQuantity: state.lastDayInfo.active
        },
      ]
    },
  },
  actions: {...actions},
  mutations: {...mutations},
}
