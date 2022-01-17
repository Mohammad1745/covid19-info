<template>
  <div :class="classNames">
    <div :class="{ 'dark-input': darkMode, 'light-input': !darkMode}">
      <TableHeader />
      <TableGlobalDataRow />
    </div>
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
