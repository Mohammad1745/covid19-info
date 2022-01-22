import helper from "~/helpers/helper";

export default  {
  UPDATE_CONTENTS(state: any, list: string[]): void {
    state.contents = list
  },
  UPDATE_DATE(state: any, value:number): void {
    let date = new Date(state.startDate)
    const time = date.getTime()+(value*1000*3600*24)
    let dateString = new Date(time).toLocaleDateString()
    let dateArray = dateString.split("/")
    dateArray[2] = dateArray[2].substr(2,2)
    state.date = dateArray.join("/")
  },
  UPDATE_COUNTRY_DATA(state: any, data: []): void {
    state.countryData = data
  },
  UPDATE_COUNTRY_LOCATION(state: any, data: []): void {
    state.countryLocations = data.map((info:any) => ({
        country: info.country,
        lat : info.countryInfo.lat,
        long: info.countryInfo.long
      }))
  },
  UPDATE_OVERTIME_INFO(state: any): void {
    state.overtimeInfo =  state.countryData.map((data: any) => {
      const country = state.countryLocations.find((info:any) => data.country===info.country)
      const coordinates = country ? [country.lat, country.long]: [0,0]
      return {
        country: data.country,
        coordinate: coordinates,
        cases: data.timeline.cases[state.date],
        deaths: data.timeline.deaths[state.date],
        recovered: data.timeline.recovered[state.date],
      }
    })
  },
}
