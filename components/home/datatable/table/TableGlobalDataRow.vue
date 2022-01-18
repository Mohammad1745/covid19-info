<template>
  <tr class="gr">
    <td
      v-for="(info, i) in globalInfo"
      :key="i"
      class="gd"
      :class="'gd'+i"
    >
      <span>{{ info }}</span>
    </td>
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
