import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Partnership from "../views/PartnershipView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
    {
      path: "/partnership",
      name: "partnership",
      component: Partnership, // async-load doesn't work on hash (#),
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
      behavior: "smooth",
    };
  },
});

export default router;
