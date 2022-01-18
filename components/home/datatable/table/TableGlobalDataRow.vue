<template>
  <tr class="gr">
    <td class="gd gd0"> </td>
    <td class="gd">
      <div class="d-flex">
        <span role='img' aria-label='emoji' class="mr-2">🌎</span>
        <span>Global</span>
      </div>
    </td>
    <td class="gd"><div>{{ globalInfo.cases }}</div></td>
    <td class="gd"><div>{{ globalInfo.deaths }}</div></td>
    <td class="gd"><div>{{ globalInfo.recovered }}</div></td>
    <td class="gd"><div>{{ globalInfo.todayCases }}</div></td>
    <td class="gd"><div>{{ globalInfo.todayDeaths }}</div></td>
    <td class="gd"><div>{{ globalInfo.todayRecovered }}</div></td>
    <td class="gd"><div>{{ globalInfo.casesPerOneMillion }}</div></td>
    <td class="gd"><div>{{ globalInfo.deathsPerOneMillion }}</div></td>
  </tr>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "TableGlobalDataRow",
  props: ['classNames'],
  computed: {
    ...mapGetters(['globalInfo'])
  },

}
</script>

<style scoped>
.gd0{
  border-left:none;
}
</style>
