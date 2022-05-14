
<template>
  <div>
    <button v-on:click="atualizar">Test Update</button>
    <div class="main">
      <h1>
        Media de Idade do Nome {{ usuario.name }} é de {{ usuario.age }} Anos
      </h1>
    </div>
    <!-- <h1>Media de Idade de {{ usuario.age }}</h1> -->
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "@vue/runtime-core";
import axios from "axios";
import VueAxios from "vue-axios";
import api from "../services/api";
export default defineComponent({
  name: "AgifyApi",
  methods: {
    atualizar() {
      // nome = "Carlos";
      // console.log(nomes);
      // fetchUsuario();
    },
  },
  setup() {
    let nome = "Marcos";
    const usuario = ref([]);
    const fetchUsuario = () =>
      api.get("/?name=" + nome).then((resp) => (usuario.value = resp.data));

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
button {
  width: 50px;
  height: 50px;
}
</style>