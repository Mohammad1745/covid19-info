<template>
  <div :class="classNames">
    <div class="info-card" :class="{ 'dark-card': darkMode, 'light-card': !darkMode}">
      <div class="title" :class="{ 'dark-secondary': darkMode, 'light-secondary': !darkMode}">
        {{ info.title }}
        <span class="image"><slot></slot></span>
      </div>
      <div class="quantity" :class="{ 'dark-primary': darkMode, 'light-primary': !darkMode, 'success-primary': info.type ==='recoveries', 'danger-primary': info.type ==='deaths'}">{{ info.quantity }}</div>
      <div class="date" :class="{ 'dark-secondary': darkMode, 'light-secondary': !darkMode}">{{ $dateFns.format(info.date, 'EEE MMM dd yyyy') }}</div>
      <div class="comparison mb-3">
        <span class="percent" :class="{ 'percent-success': info.isSuccess, 'percent-danger': info.isDanger}">{{ info.difference }}% {{info.hasIncreased ? 'increase': 'decrease' }}</span>
        <span class="previous-count" :class="{ 'dark-secondary': darkMode, 'light-secondary': !darkMode}">from yesterday ({{ info.lastDayQuantity }})</span>
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
    ...mapGetters(['darkMode'])
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
  background: #1380d4;
  padding: 8px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
}
.percent-success {
  background: green;
}
.percent-danger {
  background: #e53935;
}
.quantity {
  font-size: 35px;
}
.image {
  position: absolute;
  top: 30px;
  right: 30px;
}
</style>
