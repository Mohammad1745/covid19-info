import helpers from '../../../helpers/helpers';

export default {
  allInfo: (state: any) => {
    let date = state.todayInfo.updated ? new Date(state.todayInfo.updated) : new Date()
    return [
      {
        title: 'TOTAL CASES',
        quantity: helpers.convertToAccountingFormat(state.todayInfo.cases),
        date,
        difference: ((state.todayInfo.cases/state.lastDayInfo.cases-1) * 100).toFixed(2),
        hasIncreased: state.todayInfo.cases > state.lastDayInfo.cases,
        isSuccess: state.todayInfo.cases === state.lastDayInfo.cases,
        lastDayQuantity: helpers.convertToMultiplier(state.lastDayInfo.cases, 1)
      },
      {
        title: 'TOTAL DEATHS',
        quantity: helpers.convertToAccountingFormat(state.todayInfo.deaths),
        date,
        difference: ((state.todayInfo.deaths/state.lastDayInfo.deaths - 1) * 100).toFixed(2),
        hasIncreased: state.todayInfo.deaths > state.lastDayInfo.deaths,
        isSuccess: state.todayInfo.deaths === state.lastDayInfo.deaths,
        lastDayQuantity: helpers.convertToMultiplier(state.lastDayInfo.deaths, 1)
      },
      {
        title: 'TOTAL RECOVERIES',
        quantity: helpers.convertToAccountingFormat(state.todayInfo.recovered),
        date,
        difference: ((state.todayInfo.recovered/state.lastDayInfo.recovered - 1) * 100).toFixed(2),
        hasIncreased: state.todayInfo.recovered > state.lastDayInfo.recovered,
        isSuccess: state.todayInfo.recovered > state.lastDayInfo.recovered,
        lastDayQuantity: helpers.convertToMultiplier(state.lastDayInfo.recovered, 1)
      },
      {
        title: 'ACTIVE CASES',
        quantity: helpers.convertToAccountingFormat(state.todayInfo.active),
        date,
        difference: ((state.todayInfo.active/state.lastDayInfo.active - 1) * 100).toFixed(2),
        hasIncreased: state.todayInfo.active > state.lastDayInfo.active,
        isSuccess: state.todayInfo.active < state.lastDayInfo.active,
        isDanger: state.todayInfo.active > state.lastDayInfo.active,
        lastDayQuantity: helpers.convertToMultiplier(state.lastDayInfo.active, 1)
      },
    ]
  }
}
