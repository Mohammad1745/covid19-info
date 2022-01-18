<template>
  <thead>
    <tr>
      <th
        v-for="(header, i) in headers"
        :key="i"
        :class="'th'+i"
      >
        <div>{{ header }}</div>
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: "TableHeader",
  props: ['classNames'],
  data(){
    return {
      headers: ["#","Country","Cases","Deaths","Recovered","Today's Cases","Today's Deaths","Today's Recoveries","Cases Per 1M", "Deaths Per 1M"]
    }
  }
}
</script>

<style scoped>
.th0{
  border-left:none;
}
</style>
