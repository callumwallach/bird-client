import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import ShowHouse from "../views/ShowHouse.vue";
import ShowHouses from "../views/ShowHouses.vue";
import NotFound from "../views/NotFound.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/house/:ubid",
      name: "show-house",
      component: ShowHouse,
      props: true,
    },
    {
      path: "/houses",
      name: "show-houses",
      component: ShowHouses,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});
