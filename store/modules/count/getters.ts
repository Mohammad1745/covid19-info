export default {
  allInfo: (state: any) => {
    let date = state.todayInfo.updated ? new Date(state.todayInfo.updated) : new Date()
    return [
      {
        title: 'TOTAL CASES',
        quantity: state.todayInfo.cases,
        date,
        difference: ((state.todayInfo.cases/state.lastDayInfo.cases-1) * 100).toFixed(2),
        hasIncreased: state.todayInfo.cases > state.lastDayInfo.cases,
        isGood: state.todayInfo.cases < state.lastDayInfo.cases,
        lastDayQuantity: state.lastDayInfo.cases
      },
      {
        title: 'TOTAL DEATHS',
        quantity: state.todayInfo.deaths,
        date,
        difference: ((state.todayInfo.deaths/state.lastDayInfo.deaths - 1) * 100).toFixed(2),
        hasIncreased: state.todayInfo.deaths > state.lastDayInfo.deaths,
        isGood: state.todayInfo.deaths < state.lastDayInfo.deaths,
        lastDayQuantity: state.lastDayInfo.deaths
      },
      {
        title: 'TOTAL RECOVERIES',
        quantity: state.todayInfo.recovered,
        date,
        difference: ((state.todayInfo.recovered/state.lastDayInfo.recovered - 1) * 100).toFixed(2),
        hasIncreased: state.todayInfo.recovered > state.lastDayInfo.recovered,
        isGood: state.todayInfo.recovered > state.lastDayInfo.recovered,
        lastDayQuantity: state.lastDayInfo.recovered
      },
      {
        title: 'ACTIVE CASES',
        quantity: state.todayInfo.active,
        date,
        difference: ((state.todayInfo.active/state.lastDayInfo.active - 1) * 100).toFixed(2),
        hasIncreased: state.todayInfo.active > state.lastDayInfo.active,
        isGood: state.todayInfo.active < state.lastDayInfo.active,
        lastDayQuantity: state.lastDayInfo.active
      },
    ]
  }
}
