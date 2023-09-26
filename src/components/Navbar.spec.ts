import { mount } from "@vue/test-utils";
import { describe, it } from "vitest";
// import { createRouter, createMemoryHistory } from "vue-router";
// import { createPinia } from "pinia";

import Navbar from "./Navbar.vue";
// import { routes } from "../router";

describe("Navbar", () => {
  it("render no errors", () => {
    mount(Navbar);
  });
});

// describe("Navbar", () => {
//   it("render no errors", () => {
//     // teleport tmp workaround
//     const el = document.createElement("div");
//     el.id = "modal";
//     document.body.appendChild(el);

//     // add plugins
//     const pinia = createPinia();
//     const router = createRouter({
//       history: createMemoryHistory(),
//       routes,
//     });

//     mount(Navbar, {
//       global: {
//         plugins: [pinia, router],
//       },
//     });
//   });
// });
