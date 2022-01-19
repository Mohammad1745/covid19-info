<template>
  <thead>
    <tr>
      <th
        v-for="(header, i) in headers"
        :key="i"
        :class="'th'+i"
      >
        <div>{{ i>4 && i<8 && isYesterday ? header[1] : header[0] }}</div>
      </th>
    </tr>
  </thead>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "TableHeader",
  props: ['classNames'],
  data(){
    return {
      headers: [
        ["#"],
        ["Country"],
        ["Cases"],
        ["Deaths"],
        ["Recovered"],
        ["Today Recovered", "Yesterday Recovered"],
        ["Today's Cases", "Yesterday's Cases"],
        ["Today's Deaths", "Yesterday's Deaths"],
        ["Cases Per 1M"],
        ["Deaths Per 1M"]
      ]
    }
  },
  computed: {
    ...mapGetters(['isYesterday'])
  },
}
</script>

<style scoped>
.th0{
  border-left:none;
}
</style>
