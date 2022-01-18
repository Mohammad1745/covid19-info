<template>
  <tbody>
    <tr
      v-for="(array, i) in countriesInfo"
      :key="i"
    >
      <td
        v-for="(info, j) in array"
        :key="j"
        class="td"
        :class="'td'+j"
      >
        <span>{{ info }}</span>
      </td>
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
