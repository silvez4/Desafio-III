<template>
  <div class="content">
    <div class="user" v-if="usuario.age">
      <h1>Usuario: {{ capitalize }}</h1>
      <h1>
        {{ usuario.age }}
      </h1>
    </div>
    <h1 v-else>Carregando...</h1>
  </div>
</template>
sc
<script>
import { defineComponent } from "@vue/runtime-core";
import api from "../services/api";

export default defineComponent({
  name: "Usuario",
  props: ["name"],
  data() {
    return {
      usuario: [],
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
    },
  },
  beforeMount() {
    this.teste();
  },

  methods: {
    async teste() {
      this.usuario = [];
      var nome = this.name;
      console.warn(this.name);
      try {
        const apiusuario = await api.get("/?name=" + nome);

        this.usuario = apiusuario.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
</script>

<style scoped>
.content {
  text-align: center;
}
.content h1 {
  font-weight: 300;
}
</style>