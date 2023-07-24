<script setup lang="ts">
defineProps<{
  lat: number;
  lng: number;
}>();
</script>

<template>
  <div class="latlng-container">
    <div class="latlng-icon">
      <img
        src="../assets/svg/map.svg"
        alt="map icon"
      />
    </div>
    <div class="latlng-text">
      <span>({{ lat }}, {{ lng }})</span>
    </div>
  </div>
</template>

<style scoped>
.latlng-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.latlng-icon {
  width: 20px;
  height: 20px;
}

.latlng-text {
  color: #fff;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
</style>
