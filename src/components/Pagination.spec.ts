import { defineComponent, ref } from "vue";
import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Pagination from "./Pagination.vue";
import { RESIDENCY_PAGE_SIZE } from "../helper/constants";

describe("Pagination", () => {
  it("tests next and prev nav", async () => {
    const Parent = defineComponent({
      components: { Pagination },
      template: `
      <Pagination
        :total="total"
        :pageSize="pageSize"
        v-model="page"
      />`,
      setup() {
        const total = 35;
        const pageSize = RESIDENCY_PAGE_SIZE;
        const page = ref(1);

        return {
          total,
          pageSize,
          page,
        };
      },
    });

    const wrapper = mount(Parent);

    // initial state
    expect(wrapper.find(".pagination-current-text").text()).toBe("1");
    expect(wrapper.find(".pagination-before-text").exists()).toBe(false);
    expect(
      wrapper.findAll(".pagination-after-text").map((e) => e.text())
    ).toEqual(expect.arrayContaining(["2", "...", "5"]));

    // next

    // state after 1st next click
    await wrapper.find("#pagination-nav-next").trigger("click");
    expect(wrapper.find(".pagination-current-text").text()).toBe("2");
    expect(
      wrapper.findAll(".pagination-before-text").map((e) => e.text())
    ).toEqual(expect.arrayContaining(["1"]));
    expect(
      wrapper.findAll(".pagination-after-text").map((e) => e.text())
    ).toEqual(expect.arrayContaining(["3", "...", "5"]));

    // state after 2nd next click
    await wrapper.find("#pagination-nav-next").trigger("click");
    expect(wrapper.find(".pagination-current-text").text()).toBe("3");
    expect(
      wrapper.findAll(".pagination-before-text").map((e) => e.text())
    ).toEqual(expect.arrayContaining(["1", "2"]));
    expect(
      wrapper.findAll(".pagination-after-text").map((e) => e.text())
    ).toEqual(expect.arrayContaining(["4", "5"]));

    // state after 3rd next click
    await wrapper.find("#pagination-nav-next").trigger("click");
    expect(wrapper.find(".pagination-current-text").text()).toBe("4");
    expect(
      wrapper.findAll(".pagination-before-text").map((e) => e.text())
    ).toEqual(expect.arrayContaining(["1", "...", "3"]));
    expect(
      wrapper.findAll(".pagination-after-text").map((e) => e.text())
    ).toEqual(expect.arrayContaining(["5"]));

    // state after 4th next click
    await wrapper.find("#pagination-nav-next").trigger("click");
    expect(wrapper.find(".pagination-current-text").text()).toBe("5");
    expect(
      wrapper.findAll(".pagination-before-text").map((e) => e.text())
    ).toEqual(expect.arrayContaining(["1", "...", "4"]));
    expect(wrapper.find(".pagination-after-text").exists()).toBe(false);

    // prev

    // state after 1st prev click
    await wrapper.find("#pagination-nav-prev").trigger("click");
    expect(wrapper.find(".pagination-current-text").text()).toBe("4");
    expect(
      wrapper.findAll(".pagination-before-text").map((e) => e.text())
    ).toEqual(expect.arrayContaining(["1", "...", "3"]));
    expect(
      wrapper.findAll(".pagination-after-text").map((e) => e.text())
    ).toEqual(expect.arrayContaining(["5"]));

    // state after 2nd prev click
    await wrapper.find("#pagination-nav-prev").trigger("click");
    expect(wrapper.find(".pagination-current-text").text()).toBe("3");
    expect(
      wrapper.findAll(".pagination-before-text").map((e) => e.text())
    ).toEqual(expect.arrayContaining(["1", "2"]));
    expect(
      wrapper.findAll(".pagination-after-text").map((e) => e.text())
    ).toEqual(expect.arrayContaining(["4", "5"]));

    // state after 3rd prev click
    await wrapper.find("#pagination-nav-prev").trigger("click");
    expect(wrapper.find(".pagination-current-text").text()).toBe("2");
    expect(
      wrapper.findAll(".pagination-before-text").map((e) => e.text())
    ).toEqual(expect.arrayContaining(["1"]));
    expect(
      wrapper.findAll(".pagination-after-text").map((e) => e.text())
    ).toEqual(expect.arrayContaining(["3", "...", "5"]));

    // state after 4th prev click
    await wrapper.find("#pagination-nav-prev").trigger("click");
    expect(wrapper.find(".pagination-current-text").text()).toBe("1");
    expect(wrapper.find(".pagination-before-text").exists()).toBe(false);
    expect(
      wrapper.findAll(".pagination-after-text").map((e) => e.text())
    ).toEqual(expect.arrayContaining(["2", "...", "5"]));
  });
});
