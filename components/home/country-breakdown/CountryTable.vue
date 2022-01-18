<template>
  <div class="mt-3" :class="{ 'dark-border': darkMode, 'light-border': !darkMode}">
    <div class="overflow-auto">
      <table :class="{ 'dark-table': darkMode, 'light-table': !darkMode}">
        <TableHeader />
        <TableGlobalDataRow />
        <TableCountryDataRows />
      </table>
    </div>
    <Paginator />
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "CountryTable",
  computed: {
    ...mapGetters(['darkMode'])
  },
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  border-radius:10px;
}
::-webkit-scrollbar-thumb {
  background: #bbb;
  border-radius:10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #888;
}
</style>
