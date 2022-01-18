import actions from './actions'
import mutations from "./mutations";
import getters from "./getters";

export default {
  state: () => ({
    allCountryInfo: {},
    lastDayAllCountryInfo: {},
    country: '',
    yesterday: false,
    rowsPerPage: 10,
    page: 1,
  }),
  getters: {...getters},
  actions: {...actions},
  mutations: {...mutations},
}
