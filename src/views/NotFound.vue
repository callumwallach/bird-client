<script setup lang="ts"></script>

<template>
  <div class="not-found-container">
    <div class="not-found-label">
      <div class="not-found-label-text">
        <span>Sorry that page could not be found!</span>
      </div>
    </div>
    <button
      class="not-found-button"
      @click="$router.push({ name: 'home' })"
    >
      <div class="not-found-button-text">
        <span>To Home</span>
      </div>
      <div class="not-found-button-icon">
        <img
          src="../assets/svg/right-arrow.svg"
          alt="right arrow"
        />
      </div>
    </button>
  </div>
</template>

<style scoped>
.not-found-container {
  color: #fff;
}

.not-found-container {
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  flex: 1 0 0;
  align-self: stretch;
}

.not-found-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.not-found-label-text {
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.not-found-button {
  display: flex;
  padding: 12px 16px 12px 20px;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: none;
  background: var(--main, #5051f9);
}

:hover.not-found-button {
  background: var(--main, rgb(80, 81, 249, 0.75));
}

.not-found-button-text {
  color: #fff;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.not-found-button-icon {
  width: 24px;
  height: 24px;
}
</style>
