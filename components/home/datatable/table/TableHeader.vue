<template>
  <div
    :class="classNames"
    class="d-flex justify-content-between"
  >
    <div
      v-for="(header, i) in headers"
      :key="i"
      :class="'th th'+i"
    >
      <span>{{ header }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableHeader",
  props: ['classNames'],
  data(){
    return {
      headers: ["#","Country","Deaths","Recovered","Today's Cases","Today's Deaths","Today's Recoveries","Cases Per 1M", "Deaths Per 1M"]
    }
  }
}
</script>

<style scoped>
.th {
  padding: 0 16px;
  color: #212529;
  background-color: #fff;
  border-left: 1px solid #222;
  text-align: center;
  line-height: 80px;
  font-weight: bold;
  height: 80px;
  width: 100%
}
.th span {
  font-size: 14px;
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
}
.th {width: 100%}
.th0 {width: 40%;border-left: none;}
</style>
