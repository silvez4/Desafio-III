
<template>
  <div class="topNavbar">
    <input
      type="text"
      v-model="bnome"
      v-on:keyup.enter="onEnter"
      placeholder="Digite Nome do Usuario"
    />
    <button class="btn-3" v-on:click="buscarNome">Buscar Perfil</button>
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
    onEnter() {
      this.buscarNome();
    },
  },
};
</script>

<style scoped>
.topNavbar {
  padding: 1rem;
  background: var(--gradiente-up);
  text-align: center;
}
.topNavbar button,
.topNavbar input {
  padding: 0.5em;
  margin: 1rem;
  font-size: clamp(10px, 1.5rem, 2vw);
  border-radius: 1rem 0 1rem 0;
}
.topNavbar input:hover,
.topNavbar input:focus {
  outline: 2px solid black;
}
.topNavbar button {
  border-radius: 0 1rem 0 1rem;
  cursor: pointer;
  font-weight: 600;
  background-image: linear-gradient(
    to right,
    var(--purple),
    var(--purple),
    var(--purple),
    var(--dark-purple),
    var(--dark-purple),
    var(--dark-purple)
  );
  background-size: 300%;
  background-position: left;
  transition: all 500ms;
}
.topNavbar button:hover {
  color: var(--blue);
  background-position: right;
  transform: scale(1.1);
}
</style>

