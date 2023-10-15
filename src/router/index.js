import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/movie/:id",
      name: "MovieDetails",
      component: () => import("../components/MovieDetails.vue"),
    },
    {
      path: "/:catchAll",
      name: "Error404",
      component: () => import("../views/Error404.vue"),
    },
  ],
});

export default router;
