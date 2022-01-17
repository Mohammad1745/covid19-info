import helper from '../../../helpers/helper';

export default {
  datatable: (state: any) => {
    let date = state.todayInfo.updated ? new Date(state.todayInfo.updated) : new Date()
    return [
      {
        title: 'TOTAL CASES',
        type: 'cases',
        quantity: helper.convertToAccountingFormat(state.todayInfo.cases),
        date,
        difference: helper.percentDifference(state.todayInfo.cases, state.lastDayInfo.cases),
        hasIncreased: state.todayInfo.cases > state.lastDayInfo.cases,
        isDanger: helper.percentDifference(state.todayInfo.cases, state.lastDayInfo.cases) >= 1,
        lastDayQuantity: helper.convertToMultiplier(state.lastDayInfo.cases, 1)
      },
      {
        title: 'TOTAL DEATHS',
        type: 'deaths',
        quantity: helper.convertToAccountingFormat(state.todayInfo.deaths),
        date,
        difference: helper.percentDifference(state.todayInfo.deaths, state.lastDayInfo.deaths),
        hasIncreased: state.todayInfo.deaths > state.lastDayInfo.deaths,
        isDanger: helper.percentDifference(state.todayInfo.deaths, state.lastDayInfo.deaths) >= 1,
        lastDayQuantity: helper.convertToMultiplier(state.lastDayInfo.deaths, 1)
      },
      {
        title: 'TOTAL RECOVERIES',
        type: 'recoveries',
        quantity: helper.convertToAccountingFormat(state.todayInfo.recovered),
        date,
        difference: helper.percentDifference(state.todayInfo.recovered, state.lastDayInfo.recovered),
        hasIncreased: state.todayInfo.recovered > state.lastDayInfo.recovered,
        isSuccess: state.todayInfo.recovered > state.lastDayInfo.recovered,
        lastDayQuantity: helper.convertToMultiplier(state.lastDayInfo.recovered, 1)
      },
      {
        title: 'ACTIVE CASES',
        type: 'active-cases',
        quantity: helper.convertToAccountingFormat(state.todayInfo.active),
        date,
        difference: helper.percentDifference(state.todayInfo.active, state.lastDayInfo.active),
        hasIncreased: state.todayInfo.active > state.lastDayInfo.active,
        isSuccess: state.todayInfo.active <= state.lastDayInfo.active,
        isDanger: state.todayInfo.active > state.lastDayInfo.active,
        lastDayQuantity: helper.convertToMultiplier(state.lastDayInfo.active, 1)
      },
    ]
  }
}
