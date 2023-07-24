<script setup lang="ts">
import { House } from "../helper/houses";
import LatLng from "./LatLng.vue";
import ResidencyDetail from "./ResidencyDetail.vue";

defineProps<{
  house: House;
}>();
</script>

<template>
  <div class="house-summary-container">
    <div class="house-summary-content">
      <div class="house-title">
        <span>{{ house.name }}</span>
      </div>
      <div class="house-stats">
        <LatLng
          :lat="house.lat"
          :lng="house.lng"
        />
        <ResidencyDetail
          :birds="house.currentResidency.birds"
          :eggs="house.currentResidency.eggs"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.house-summary-container {
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  border-radius: 12px;
  background: var(--boxes, #1e1f25);
}

.house-summary-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
}

.house-title {
  color: #fff;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.house-stats {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}
</style>
