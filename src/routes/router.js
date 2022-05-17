import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue"
import Usuario from "@/components/Usuario.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user",
    name: "Usuario",
    component: Usuario,
    props: route => ({ name: route.query.name })
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
