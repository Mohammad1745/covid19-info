<template>
  <tbody>
    <tr
      class="tr"
      v-for="(country, i) in countriesInfo"
      :key="i"
    >
      <td class="td td0">{{ country.rank }}</td>
      <td class="td">
        <div class="d-flex">
          <span role='img' aria-label='emoji' class="mr-2">
            <img :src="country.flag" alt="" width="25">
          </span>
          <span>{{ country.name }}</span>
        </div>
      </td>
      <td class="td"><div>{{ country.cases }}</div></td>
      <td class="td"><div>{{ country.deaths }}</div></td>
      <td class="td"><div>{{ country.recovered }}</div></td>
      <td
        class="td"
        :class="{'cell-success': country.todayRecovered !== '0'}"
      ><div>{{ country.todayRecovered }}</div></td>
      <td
        class="td"
        :class="{'cell-highlight': country.todayCases !== '0'}"
      ><div>{{ country.todayCases }}</div></td>
      <td
        class="td"
        :class="{'cell-danger': country.todayDeaths !== '0'}"
      ><div>{{ country.todayDeaths }}</div></td>
      <td class="td"><div>{{ country.casesPerOneMillion }}</div></td>
      <td class="td"><div>{{ country.deathsPerOneMillion }}</div></td>
    </tr>
  </tbody>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "TableCountryDataRows",
  props: ['classNames'],
  computed: {
    ...mapGetters(['countriesInfo'])
  },

}
</script>

<style scoped>
.td0{
  border-left:none;
}
</style>
