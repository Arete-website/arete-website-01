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
      path: "/thanks",
      name: "thanks",
      component: () =>
        import(/* webpackChunkName: "thanks" */ "../views/ThanksView.vue"),
    },
    {
      path: "/partnership",
      name: "partnership",
      component: Partnership, // async-load doesn't work on hash (#),
    },
    {
      path: "/event",
      name: "event",
      component: () =>
        import(/* webpackChunkName: "Events" */ "../views/EventsView.vue"),
    },
    {
      path: "/beneficiaries",
      name: "beneficiaries",
      component: () =>
        import(
          /* webpackChunkName: "beneficiaries" */ "../views/BeneficiariesView.vue"
        ),
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
