
<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;600;900&family=Source+Code+Pro:wght@300&display=swap");
:root {
  --purple: hsl(250, 31%, 50%);
  --blue: hsl(190, 96%, 73%);
  --dark-purple: hsl(312, 40%, 26%);
  --dark-blue: hsl(191, 65%, 57%);
  --gradiente: linear-gradient(
    45deg,
    var(--purple),
    var(--dark-blue),
    var(--blue)
  );
  font-size: 62.5%;
}
*,
*::before,
*::after {
  font-family: "Poppins", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>

