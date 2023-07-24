<script setup lang="ts">
import { ref, Ref } from "vue";
import { Residency } from "../helper/houses";
import LatLng from "./LatLng.vue";
import ResidencyItem from "./ResidencyItem.vue";
import ResidencyChart from "./ResidencyChart.vue";

defineProps<{
  name: string;
  lat: number;
  lng: number;
  residencies: Residency[];
}>();

const contentType = ["overview", "graph"] as const;
type ContentType = (typeof contentType)[number];

const showGraph: Ref<boolean> = ref(false);

/*
  toggle content between list items and graph
*/
const toggleContent = (content: ContentType) =>
  (showGraph.value = content === "graph");
</script>

<template>
  <div class="house-detail-container">
    <div class="house-detail-header">
      <div class="house-detail-header-top">
        <div class="house-detail-header-title">
          <span>{{ name }}</span>
        </div>
        <LatLng
          :lat="lat"
          :lng="lng"
        />
      </div>
      <div class="house-detail-header-nav">
        <div
          @click="toggleContent('overview')"
          :class="{
            'nav-item-active': !showGraph,
            'house-detail-header-nav-item': true,
          }"
        >
          <span>Overview</span>
        </div>
        <div
          @click="toggleContent('graph')"
          :class="{
            'nav-item-active': showGraph,
            'house-detail-header-nav-item': true,
          }"
        >
          <span>Graph</span>
        </div>
      </div>
      <div
        :class="{
          'house-detail-header-nav-overview-highlight': !showGraph,
          'house-detail-header-nav-graph-highlight': showGraph,
        }"
      ></div>
    </div>
    <div
      v-if="!showGraph"
      class="house-detail-overview-content"
    >
      <ResidencyItem
        v-for="residency of residencies"
        :key="residency.id"
        :residency="residency"
      />
    </div>
    <div
      v-else
      class="house-detail-graph-content"
    >
      <ResidencyChart :residencies="residencies" />
    </div>
  </div>
</template>

<style scoped>
.house-detail-container {
  display: flex;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex: 1 0 0;
  align-self: stretch;
}

.house-detail-header {
  display: flex;
  padding: 24px 24px 12px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;

  position: relative;

  border-radius: 12px;
  background: var(--boxes, #1e1f25);
}

.house-detail-header-top {
  display: flex;
  align-items: center;
  gap: 12px;
  align-self: stretch;
}

.house-detail-header-title {
  flex: 1 0 0;

  color: #fff;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.house-detail-header-nav {
  display: flex;
  align-items: flex-start;
  gap: 32px;
}

.house-detail-header-nav-overview-highlight {
  width: 74px;
  height: 2px;

  position: absolute;
  left: 24px;
  bottom: 0px;

  background: var(--main, #5051f9);
}

.house-detail-header-nav-graph-highlight {
  width: 51px;
  height: 2px;

  position: absolute;
  left: 130px;
  bottom: 0px;

  background: var(--main, #5051f9);
}

.house-detail-header-nav-item {
  color: rgba(255, 255, 255, 0.4);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.house-detail-overview-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
}

.house-detail-graph-content {
  display: flex;
  height: 449px;
  width: 1576px;
  padding: 32px 32px 32px 88px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  flex: 1 0 0;
}

.nav-item-active {
  color: var(--main, #5051f9);
}
</style>
