<template>
  <div :class="classNames">
    <TableHeader />
  </div>
</template>

<script>
export default {
  name: "Table",
  props: ['classNames'],
}
</script>

<style scoped>

</style>
