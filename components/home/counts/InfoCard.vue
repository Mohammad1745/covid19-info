<template>
  <div :class="classNames">
    <div class="info-card">
      <div class="title" :class="{ 'light-secondary': lightMode, 'dark-secondary': !lightMode}">TOTAL CASES</div>
      <div class="quantity" :class="{ 'light-primary': lightMode, 'dark-primary': !lightMode}">324,647,218</div>
      <div class="date" :class="{ 'light-secondary': lightMode, 'dark-secondary': !lightMode}">Sat Jan 15 2022</div>
      <div class="comparison mb-3">
        <span class="percent">0% Increase</span>
        <span class="previous-count" :class="{ 'light-secondary': lightMode, 'dark-secondary': !lightMode}">from yesterday (323.6M)</span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "InfoCard",
  props: ['classNames', 'info'],
  computed: {
    ...mapGetters(['lightMode'])
  },
}
</script>

<style scoped>
.info-card {
  padding: 15px;
  border: 1px solid #999;
  border-radius: 5px;
  font-weight:bold;
}
.title, .date, .previous-count {
  font-size: 15px;
  margin: 10px auto;
}
.percent {
  color: #fff;
  padding: 10px;
  background: green;
  border-radius: 20px;
}
.quantity {
  font-size: 25px;
}
</style>
