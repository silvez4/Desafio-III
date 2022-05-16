<template>
  <div>
    <h1>Start: {{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Buscar",
  props: ["name"],
  data() {},
  computed: {
    msg() {
      return `Ola, ${this.name}!!`;
    },
    updateName() {
      const usuario = ref([]);
      let fetchUsuario = () =>
        api
          .get("/?name=" + this.name)
          .then((resp) => (usuario.value = resp.data))
          .catch((err) => console.log(err));
      onMounted(fetchUsuario);
      return ` Ola ${usuario.name}`;
    },
  },
};
</script>