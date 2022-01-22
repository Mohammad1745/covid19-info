export default  {
  UPDATE_MAP_CONTENTS(state: any, list: string[]): void {
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
  UPDATE_COUNTRY_LOCATION(state: any, data: []): void {
    state.countryLocations = data.map((info:any) => ({
      country: info.country,
      lat : info.countryInfo.lat,
      long: info.countryInfo.long
    }))
  },
  UPDATE_COUNTRY_MAP_DATA(state: any, data: []): void {
    state.countryMapData = data.map((info: any) => {
      const country = state.countryLocations.find((location:any) => info.country===location.country)
      const coordinates = country ? [country.lat, country.long]: [0,0]
      return {
        country: info.country,
        coordinates,
        cases: info.timeline.cases,
        deaths: info.timeline.deaths,
        recovered: info.timeline.recovered,
      }
    })
  },
  UPDATE_MAP_DATA(state: any, data: []): void {
    state.countryMapData = state.countryLocations.map((location: any) => {
      const info:any = data.find((item:any) => item.country === location.country)
      const coordinates = info ? [info.lat, info.long]: [0,0]
      return {
        country: info.country,
        coordinates,
        cases: info.timeline.cases,
        deaths: info.timeline.deaths,
        recovered: info.timeline.recovered,
      }
    })
    console.log(state.countryMapData)
  },
}
