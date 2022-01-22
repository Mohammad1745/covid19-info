# Covid-19 information

#### Covid-19 Total Information, Countrywise DataTable, Charts & spreding of COVID overtime map.

[Live Site](https://covid19information.netlify.app/)

#### Setup
```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

For detailed explanation on how NuxtJS work, check out the [documentation](https://nuxtjs.org).

#### Applied
`NuxtJS` `Nuxt Leaflet` `OpenStreetMap` `ChartJS` `Axios` `Fontawesome` `Bootstrap`

#### APIs From
`https://disease.sh/docs/`

#### Directory Structure
```
.
|--- assets
|     |--- css
|     |--- svg
|
|--- components
|     |--- covid-overtime                        # Components for 'covid-overtime' page
|     |--- home                                  # Components for 'home' page
|     |     |--- country-breakdown  
|     |     |     |--- country-table  
|     |     |     ...
|     |     |
|     |     |--- counts  
|     |     |--- info-chart  
|     |     ...
|     |
|     |--- reusable                              # Reusable vue-components
|
|--- helpers                                     # helper functions and core constants
|--- pages                                       # root components (auto routed by NuxtJS)
|--- static
|--- store                                       # Nuxt Vuex store for state management
|     |--- modules
|     |     |--- mode
|     |     |--- count
|     |     |--- datatable
|     |     |--- chart
|     |     |--- overtime
|     |...
...
```

#### App Contents
#### `Home`
![](/documentation/counts_component.png)
#### `Covid Overtime Map`
![](/documentation/overtime.png)
#### `DataTable`
![](/documentation/datatable.png)
#### `Charts`
![](/documentation/charts.png)
