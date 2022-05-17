<template>
  <div>
    <h1>Usuario: {{ name }}</h1>
    <h1 v-if="usuario">
      {{ usuario.age }}
    </h1>

    <h1 v-else>Digite Nome para busca</h1>
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