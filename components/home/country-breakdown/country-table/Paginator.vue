<template>
  <div class="paginator d-flex justify-content-end" :class="{'paginator-dark': darkMode, 'paginator-light': !darkMode}">
    <span class="mr-5">Under Construction</span>
    <span>Rows per page: {{rowsPerPage}}</span>
    <span class="ml-5">Page: {{ currentPage }} of {{ totalPages }}</span>
    <span class="ml-5">< ></span>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Paginator",
  computed: {
    ...mapGetters(['darkMode', 'rowsPerPage', 'currentPage', 'totalPages'])
  }
}
</script>

<style scoped>
.paginator {
  padding: 20px;
  font-size: 14px;
}
.paginator-dark {
  color: #fff;
  background-color: var(--border-dark);
}
</style>
