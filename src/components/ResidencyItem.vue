<script setup lang="ts">
import dayjs from "dayjs";
import { RESIDENCY_DATE_FORMAT } from "../helper/constants";
import { Residency } from "../helper/houses";
import ResidencyDetail from "./ResidencyDetail.vue";

defineProps<{
  residency: Residency;
}>();
</script>

<template>
  <div class="residency-container">
    <div
      v-if="residency"
      class="residency-date"
    >
      <span>{{
        dayjs(residency.created_at).format(RESIDENCY_DATE_FORMAT)
      }}</span>
    </div>
    <ResidencyDetail
      :birds="residency.birds"
      :eggs="residency.eggs"
    />
  </div>
</template>

<style scoped>
.residency-container {
  display: flex;
  width: auto;
  padding: 24px 20px;
  align-items: flex-start;
  gap: 36px;
  align-self: stretch;

  border-radius: 12px;
  background: var(--boxes, #1e1f25);
}

.residency-date {
  color: #fff;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
