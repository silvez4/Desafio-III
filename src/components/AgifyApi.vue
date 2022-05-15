<template>
  <div>
    <div class="main">
      <!-- <h1 v-if="usuario"> -->
      <h1>
        Media de Idade do Nome {{ usuario.name }} é de {{ usuario.age }} Anos
      </h1>
      <h1>Input {{ FNome }}</h1>
      <input type="text" name="newName" />
      <button v-on:click="updateName">Buscar</button>
    </div>
    <!-- <h1>Media de Idade de {{ usuario.age }}</h1> -->
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "@vue/runtime-core";
import api from "../services/api";

export default defineComponent({
  name: "AgifyApi",
  data() {
    return {
      FNome: "Teste",
      inputName: "Marcos",
    };
  },
  mounted() {},
  methods: {
    updateName() {
      this.inputName = document.querySelector("input[name=newName]").value;
      this.FNome = this.inputName;
    },
  },

  setup() {
    var nome = "Marcos";
    const usuario = ref([]);
    let fetchUsuario = () =>
      api
        .get("/?name=" + nome)
        .then((resp) => (usuario.value = resp.data))
        .catch((err) => console.log(err));
    onMounted(fetchUsuario);

    return { usuario };
  },
});
</script>


<style>
.main {
  justify-content: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
}
h1 {
  color: teal;
  font-size: clamp(10px, 1.5rem, 2vw);
}
</style>