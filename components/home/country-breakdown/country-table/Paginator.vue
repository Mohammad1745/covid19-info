<template>
  <div class="paginator d-flex justify-content-end" :class="{'paginator-dark': darkMode, 'paginator-light': !darkMode}">
    <span>Rows per page:</span>
    <select @change="handlePagination(perPage)" v-model="perPage">
      <option
        v-for="(option, i) in rowsPerPageOptions"
        :key="i"
        :value="option">{{ option }}</option>
    </select>
    <span class="ml-5">
      <i @click="movePreviousPage" v-if="currentPage>1" class="fas fa-chevron-left cursor-pointer"></i>
    </span>
    <span class="ml-4">Page: {{ currentPage }} of {{ totalPages }}</span>
    <span class="ml-4">
      <i @click="moveNextPage" v-if="currentPage<totalPages" class="fas fa-chevron-right cursor-pointer"></i>
    </span>
  </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Paginator",
  data () {
    return {
      'perPage': 10,
      'rowsPerPageOptions': [10, 25]
    }
  },
  computed: {
    ...mapGetters(['darkMode', 'rowsPerPage', 'currentPage', 'totalPages'])
  },
  methods: {
    ...mapActions(['handlePagination', 'moveNextPage', 'movePreviousPage'])
  }
}
</script>

<style scoped>
.paginator {
  padding: 20px;
  font-size: 14px;
}
.paginator-dark,
.paginator-dark select,
.paginator-dark select option {
  color: #fff;
  background-color: var(--border-dark);
}
.paginator select,
.paginator select:focus {
  border:none;
  outline: none;
  background: transparent;
}
</style>
