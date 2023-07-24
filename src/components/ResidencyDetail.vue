<script setup lang="ts">
defineProps<{
  birds: number;
  eggs: number;
}>();
</script>

<template>
  <div class="residency-detail-container">
    <div class="residency-detail-item">
      <div class="residency-detail-item-icon">
        <img
          src="../assets/svg/paw.svg"
          alt="paw icon"
        />
      </div>
      <div class="residency-detail-item-text">
        <span>{{ birds }}</span>
      </div>
    </div>
    <div class="residency-detail-item">
      <div class="residency-detail-item-icon">
        <img
          src="../assets/svg/egg.svg"
          alt="egg icon"
        />
      </div>
      <div class="residency-detail-item-text">
        <span>{{ eggs }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.residency-detail-container {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.residency-detail-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.residency-detail-item-icon {
  width: 20px;
  height: 20px;
}

.residency-detail-item-text {
  color: #fff;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
