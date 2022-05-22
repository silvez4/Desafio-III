<template>
  <div class="content">
    <div class="foto-wrapper" v-if="usuario.age">
      <div class="foto"></div>
    </div>
    <div class="user" v-if="usuario.age">
      <h1>{{ usuario.name }}{{ usuario.count }}@gmail.com</h1>
      <h1>Olá , meu nome é {{ capitalize }}</h1>
      <h1>Tenho {{ usuario.age }} anos</h1>
      <h1>e {{ texto }}</h1>
    </div>
    <h1 v-else>Carregando...</h1>
    <h1 v-if="name == ''">Busca Invalida</h1>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import api from "../services/api";

export default defineComponent({
  name: "Usuario",
  props: ["name"],
  data() {
    return {
      usuario: [],
      texto: [],
    };
  },

  computed: {
    capitalize() {
      return this.name.charAt(0).toUpperCase() + this.name.slice(1);
    },
  },

  watch: {
    name: function (newVal, oldVal) {
      // console.log("Prop changed: ", newVal, " | was: ", oldVal);
      this.teste();
      this.randText();
    },
  },
  beforeMount() {
    this.teste();
    this.randText();
  },

  methods: {
    async teste() {
      this.usuario = [];
      var nome = this.name;
      if (nome != "") {
        try {
          const apiusuario = await api.get("/?name=" + nome);

          this.usuario = apiusuario.data;
        } catch (err) {
          console.log(err);
        }
      }
    },
    randText() {
      const fillText = [
        "Lorem ipsum dolor",
        "adipisicing elit. Tenetur, repudiandae",
        "facere at nisi obcaecati sapiente quod ea quidem totam nemo eligendi",
        "amet minima? Animi, laboriosam voluptatum saepe facere at nisi obcaecati",
      ];
      this.texto = fillText[Math.floor(Math.random() * fillText.length)];
    },
  },
});
</script>

<style scoped>
.content {
  align-items: center;
  text-align: center;
  background: black;
  border-radius: 3rem;
  margin: 1rem auto;
  max-width: 40%;
  color: white;
}
.content h1 {
  font-weight: 300;
  padding-bottom: 1rem;
  background: var(--gradiente-round);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.user {
  padding: 5rem;
}

.foto-wrapper {
  position: relative;
  min-height: 3rem;
  max-width: 10rem;
  margin: 1rem auto;
}

.foto {
  position: absolute;
  background: radial-gradient(var(--blue), white);
  height: 10rem;
  width: 10rem;
  top: -2rem;
  border-radius: 10rem;
}

@media (max-width: 720px) {
  .content {
    max-width: 95%;
  }
}
</style>