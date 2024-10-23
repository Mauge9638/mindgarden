import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/home.vue";

export default createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
  ],
});
