
<template>
  <div id="topNav">
    <input type="text" v-model="bnome" placeholder="Digite Nome do Usuario" />
    <button v-on:click="buscarNome">Buscar Perfil</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bnome: "",
    };
  },
  methods: {
    buscarNome() {
      this.$router.push({
        name: "Usuario",
        query: { name: this.bnome },
      });
    },
  },
};
</script>

