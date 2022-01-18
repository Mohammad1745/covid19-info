<template>
  <div :class="classNames">
    <table width="100%" :class="{ 'dark-table dark-border': darkMode, 'light-table light-border': !darkMode}">
      <TableHeader />
      <TableGlobalDataRow />
      <TableCountryDataRows />
    </table>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Table",
  props: ['classNames'],
  computed: {
    ...mapGetters(['darkMode'])
  },
}
</script>

<style scoped>
</style>
