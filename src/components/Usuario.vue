<template>
  <div>
    <h1>Usuario: {{ bnome }}</h1>
    <input
      type="text"
      :value="bnome"
      @input="$emit('update:bnome', $event.target.value)"
    />
    <button v-on:click="teste">Teste</button>
    <h1 v-if="usuario">
      {{ usuario.data.age }}
    </h1>
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
  data() {
    return {
      usuario: [],
    };
  },
  watch: {
    bnome: function (newVal, oldVal) {
      // watch it
      console.log("Prop changed: ", newVal, " | was: ", oldVal);
    },
  },
  methods: {
    async teste() {
      var nome = this.bnome;
      // const usuario = ref([]);
      // let fetchUsuario = () =>
      try {
        const apiusuario = await api.get("/?name=" + nome);
        // .then((resp) => (apiusuario.value = resp.data))
        // .catch((err) => console.log(err));
        console.warn(apiusuario.data);
        // console.warn(apiusuario.data);
        this.usuario = apiusuario;
        console.warn(this.usuario);
      } catch (err) {
        console.log(err);
      }
      // onMounted(fetchUsuario);
      // return { usuario };
    },
  },
};
</script>