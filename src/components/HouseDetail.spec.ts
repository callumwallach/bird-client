import { defineComponent } from "vue";
import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import HouseDetail from "./HouseDetail.vue";

describe("HouseDetail", () => {
  it("render no errors", () => {
    const wrapper = mount(HouseDetail, {
      props: {
        name: "foo",
        lat: 45.23456,
        lng: 34.57732,
        residencies: [],
      },
    });

    //console.log(wrapper.html());

    expect(wrapper.find(".house-detail-header-title").exists()).toBe(true);
  });
});
