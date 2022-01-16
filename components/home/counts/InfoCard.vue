<template>
  <div :class="classNames">
    <div class="info-card" :class="{ 'light-card': lightMode, 'dark-card': !lightMode}">
      <div class="title" :class="{ 'light-secondary': lightMode, 'dark-secondary': !lightMode}">{{ info.title }}</div>
      <div class="quantity" :class="{ 'light-primary': lightMode, 'dark-primary': !lightMode}">{{ info.quantity }}</div>
      <div class="date" :class="{ 'light-secondary': lightMode, 'dark-secondary': !lightMode}">{{ $dateFns.format(info.date, 'EEE MMM dd yyyy') }}</div>
      <div class="comparison mb-3">
        <span class="percent">{{ info.difference }}% {{info.increase ? 'increase': 'decrease' }}</span>
        <span class="previous-count" :class="{ 'light-secondary': lightMode, 'dark-secondary': !lightMode}">from yesterday ({{ info.lastDayQuantity }})</span>
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
  border-radius: 5px;
  font-weight:bold;
}
.title, .date, .previous-count {
  font-size: 13px;
  margin-bottom: 15px;
}
.percent {
  color: #fff;
  padding: 8px 10px;
  background: green;
  border-radius: 20px;
  font-size: 12px;
}
.quantity {
  font-size: 35px;
}
</style>
