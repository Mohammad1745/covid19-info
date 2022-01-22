import actions from './actions'
import mutations from "./mutations";

export default {
  state: () => ({
    startDate: '1/22/20',
    date: '1/22/20',
    dateFormat: {month: 'short', day: 'numeric', year: 'numeric' },
    contents: ['cases'],
    countryMapData: [],
    mapData:[],
    countryLocations: []
  }),
  getters: {
    mapContent: (state:any) => state.contents,
    startDate: (state:any) => new Date(state.startDate).toLocaleDateString('en-US', state.dateFormat),
    selectedDate: (state:any) => new Date(state.date).toLocaleDateString('en-US', state.dateFormat),
    date: (state:any) => state.date,
    diffInDays: (state:any) => {
      const dateToday = new Date()
      const firstDate = new Date(state.startDate)
      const diffInTime = dateToday.getTime() - firstDate.getTime()
      return Math.floor(diffInTime/(1000*3600*24))-1
    },
    overtime: (state:any) => state.countryMapData,
  },
  actions: {...actions},
  mutations: {...mutations},
}
