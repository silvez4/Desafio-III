<template>
  <div>
    <!-- <router-link class="link" :to="{ path: '/user', query: { name: 'Foo' }}">Say hello</router-link> -->
    <!-- <router-view /> -->
    <!-- <AgifyApi /> -->
    <h1>APP: {{ bnome }}</h1>
    <Usuario v-model:bnome="bnome" />
  </div>
</template>

<script>
import AgifyApi from "./components/AgifyApi.vue";
import Usuario from "./components/Usuario.vue";
export default {
  components: { Usuario },
  data() {
    return {
      bnome: "v-model argument example",
    };
  },
};
</script>
