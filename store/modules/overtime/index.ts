import actions from './actions'
import mutations from "./mutations";

export default {
  state: () => ({
    startDate: '1/22/20',
    date: '7/15/20',
    dateFormat: {month: 'short', day: 'numeric', year: 'numeric' },
    contents: ['cases'],
    countryData:[],
    overtimeInfo: [],
    countryLocations: []
  }),
  getters: {
    mapContent: (state:any) => state.contents,
    startDate: (state:any) => new Date(state.startDate).toLocaleDateString('en-US', state.dateFormat),
    selectedDate: (state:any) => new Date(state.date).toLocaleDateString('en-US', state.dateFormat),
    overtimeInfo: (state:any) => state.overtimeInfo
  },
  actions: {...actions},
  mutations: {...mutations},
}
