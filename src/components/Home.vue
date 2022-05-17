<template>
  <div class="tutorial">
    <h1>
      Digite o nome desejado na barra de pesquisa acima e descubra um novo
      perfil
    </h1>
  </div>
</template>
<script>
export default {
  name: "Home",
  setup() {},
};
</script>

<style scoped>
.tutorial {
  align-items: center;
  text-align: center;
  background: black;
  border-radius: 3rem;
  margin: auto;
  padding: 4rem;
  max-width: 60%;
  color: white;
}
.tutorial h1 {
  font-weight: 900;
  background: var(--gradiente-round);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (max-width: 720px) {
  .tutorial {
    max-width: 95%;
  }
}
</style>