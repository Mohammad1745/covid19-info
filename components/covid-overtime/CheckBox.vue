<template>
  <div class="container-lg mt-2" style="max-width: 80vh" :class="{ 'dark-primary': darkMode, 'light-primary': !darkMode}">
    <label v-for="(content, i) in dataContentList" :key="i" class="mr-3">
      <input type="checkbox" v-model="dataContent" @change="updateMapContent"
             :class="content.value" :value="content.value"> <span class="p-1">{{ content.name }}</span>
    </label>
    <p class="description">This is a depiction of the spread of COVID-19 over time. We rely on the Johns Hopkins CSSE Data Repository, which is updated once a day at around 23:59 UTC. For that reason, the most recent data our slider allows users to select is yesterday's.</p>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "CheckBox",
  data () {
    return {
      dataContent: ['cases'],
      dataContentList: [
        {name: 'Cases', value: 'cases'},
        {name: 'Deaths', value: 'deaths'},
        {name: 'Recoveries', value: 'recovered'}
      ],
    }
  },
  computed: {
    ...mapGetters(['darkMode', 'mapContent']),
  },
  mounted() {
    this.dataContent = this.mapContent
  },
  methods: {
    async updateMapContent () {
      const success = await this.$store.dispatch('updateMapContent', this.dataContent)
      this.dataContent = this.mapContent
      if (success) this.$nuxt.$emit('checkbox-updated')
    },
  }
}
</script>

<style scoped>
.description{
  margin: 0;
  font-size:12px;
  text-align:center;
  padding: 2rem;
}
input[type=checkbox] {
  -moz-appearance:none;
  -webkit-appearance:none;
  outline: none;
  content: none;
  cursor: pointer;
}
input[type=checkbox]:before {
  content: "\f00c";
  font-size: 15px;
  color: transparent;
  display: block;
  width: 25px;
  height: 25px;
  border-radius: 5px;
}
input.cases:before {
  border: 2px solid red;
}
input.deaths:before {
  border: 2px solid black;
}
input.recovered:before {
  border: 2px solid green;
}
input.cases:checked:before {
  background: red;
}
input.deaths:checked:before {
  background: black;
}
input.recovered:checked:before {
  background: green;
}
</style>
