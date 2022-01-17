import helper from '../../../helpers/helper';

export default {
  allInfo: (state: any) => {
    let date = state.todayInfo.updated ? new Date(state.todayInfo.updated) : new Date()
    return [
      {
        title: 'TOTAL CASES',
        quantity: helper.convertToAccountingFormat(state.todayInfo.cases),
        date,
        difference: ((state.todayInfo.cases/state.lastDayInfo.cases-1) * 100).toFixed(2),
        hasIncreased: state.todayInfo.cases > state.lastDayInfo.cases,
        isSuccess: state.todayInfo.cases === state.lastDayInfo.cases,
        lastDayQuantity: helper.convertToMultiplier(state.lastDayInfo.cases, 1)
      },
      {
        title: 'TOTAL DEATHS',
        quantity: helper.convertToAccountingFormat(state.todayInfo.deaths),
        date,
        difference: ((state.todayInfo.deaths/state.lastDayInfo.deaths - 1) * 100).toFixed(2),
        hasIncreased: state.todayInfo.deaths > state.lastDayInfo.deaths,
        isSuccess: state.todayInfo.deaths === state.lastDayInfo.deaths,
        lastDayQuantity: helper.convertToMultiplier(state.lastDayInfo.deaths, 1)
      },
      {
        title: 'TOTAL RECOVERIES',
        quantity: helper.convertToAccountingFormat(state.todayInfo.recovered),
        date,
        difference: ((state.todayInfo.recovered/state.lastDayInfo.recovered - 1) * 100).toFixed(2),
        hasIncreased: state.todayInfo.recovered > state.lastDayInfo.recovered,
        isSuccess: state.todayInfo.recovered > state.lastDayInfo.recovered,
        lastDayQuantity: helper.convertToMultiplier(state.lastDayInfo.recovered, 1)
      },
      {
        title: 'ACTIVE CASES',
        quantity: helper.convertToAccountingFormat(state.todayInfo.active),
        date,
        difference: ((state.todayInfo.active/state.lastDayInfo.active - 1) * 100).toFixed(2),
        hasIncreased: state.todayInfo.active > state.lastDayInfo.active,
        isSuccess: state.todayInfo.active < state.lastDayInfo.active,
        isDanger: state.todayInfo.active > state.lastDayInfo.active,
        lastDayQuantity: helper.convertToMultiplier(state.lastDayInfo.active, 1)
      },
    ]
  }
}
