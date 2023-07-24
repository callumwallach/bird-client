<script setup lang="ts"></script>

<template>
  <div class="home-container">
    <div class="home-label">
      <div class="home-label-text">
        <span>Home page</span>
      </div>
    </div>
    <button
      class="home-button"
      @click="$router.push({ name: 'show-houses' })"
    >
      <div class="home-button-text">
        <span>To BirdHouses Overview</span>
      </div>
      <div class="home-button-icon">
        <img
          src="../assets/svg/right-arrow.svg"
          alt="right arrow"
        />
      </div>
    </button>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  flex: 1 0 0;
  align-self: stretch;
}

.home-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.home-label-text {
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.home-button {
  display: flex;
  padding: 12px 16px 12px 20px;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: none;
  background: var(--main, #5051f9);
}

:hover.home-button {
  background: var(--main, rgb(80, 81, 249, 0.75));
}

.home-button-text {
  color: #fff;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.home-button-icon {
  width: 24px;
  height: 24px;
}
</style>
