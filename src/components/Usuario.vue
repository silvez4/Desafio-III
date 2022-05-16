<template>
  <div>
    <h1>Usuario: {{ bnome }}</h1>
    <input
      type="text"
      :value="bnome"
      @input="$emit('update:bnome', $event.target.value)"
    />
    <button v-on:click="teste">Teste</button>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "@vue/runtime-core";
import api from "../services/api";
import router from "@/routes/router.js";

export default {
  name: "Usuario",
  props: ["bnome"],
  emits: ["update:bnome"],
  watch: {
    bnome: function (newVal, oldVal) {
      // watch it
      console.log("Prop changed: ", newVal, " | was: ", oldVal);
    },
  },
  methods: {
    teste() {
      var nome = this.bnome;
      const usuario = ref([]);
      let fetchUsuario = () =>
        api
          .get("/?name=" + nome)
          .then((resp) => (usuario.value = resp.data))
          .catch((err) => console.log(err));
      // onMounted(fetchUsuario);
      console.warn(fetchUsuario);
      console.warn(nome);
      return { usuario };
    },
  },
};
</script>