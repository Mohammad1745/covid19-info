<template>
  <div
    :class="classNames"
    class="d-flex justify-content-between"
  >
    <div
      v-for="(info, i) in globalInfo"
      :key="i"
      :class="'tr tr'+i"
    >
      <span>{{ info }}</span>
    </div>
  </div>
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
.tr {
  padding: 0 16px;
  color: #212529;
  background-color: #fff;
  border-left: 1px solid #222;
  text-align: center;
  line-height: 80px;
  font-weight: bold;
  height: 80px;
  width: calc(100vw/9);
}
.tr span {
  font-size: 14px;
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
}
.tr {width: 100%}
.tr0 {width: 40%;border-left: none;}
</style>
