import { createWebHistory, createRouter } from "vue-router";
import APP from "@/APP.vue";
import Busca from "@/views/Busca.vue";
import Usuario from "@/components/Usuario.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: APP,
  },
  {
    path: "/user",
    name: "Usuario",
    component: Usuario,
    props: route => ({ name: route.query.name })
  },
  {
    path: "/busca",
    name: "Busca",
    component: Busca,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
