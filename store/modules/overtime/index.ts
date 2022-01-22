import actions from './actions'
import mutations from "./mutations";

export default {
  state: () => ({
    startDate: '1/22/20',
    date: '1/22/20',
    dateFormat: {month: 'short', day: 'numeric', year: 'numeric' },
    contents: ['cases'],
    countryMapData: [],
    countryLocations: []
  }),
  getters: {
    mapContent: (state:any) => state.contents,
    startDate: (state:any) => new Date(state.startDate).toLocaleDateString('en-US', state.dateFormat),
    selectedDate: (state:any) => new Date(state.date).toLocaleDateString('en-US', state.dateFormat),
    overtimeCases: (state:any) => state.countryMapData.map((data: any) => {
      return {
        center: data.coordinates,
        radius: 1000*(Math.sqrt(data.cases[state.date])),
        color: 'red',
        fillColor: 'red',
      }
    }),
    overtimeDeaths: (state:any) => state.countryMapData.map((data: any) => {
      return {
        center: data.coordinates,
        radius: 1000*(Math.sqrt(data.deaths[state.date])),
        color: 'black',
        fillColor: 'black',
      }
    }),
    overtimeRecoveries: (state:any) => state.countryMapData.map((data: any) => {
      return {
        center: data.coordinates,
        radius: 1000*(Math.sqrt(data.recovered[state.date])),
        color: 'green',
        fillColor: 'green',
      }
    })
  },
  actions: {...actions},
  mutations: {...mutations},
}
