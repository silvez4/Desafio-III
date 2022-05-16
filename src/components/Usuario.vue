<template>
  <div>
    <h1>Start: {{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Buscar",
  props: ["name"],
  computed: {
    msg() {
      console.log(this.name);
      return `Ola, ${this.name}!!`;
    },
  },
};
</script>