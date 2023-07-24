<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="app-container">
    <Navbar />
    <RouterView />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Poppins:wght@400;500;600&display=swap");

body {
  margin: 0;
  box-sizing: border-box;
}

.app-container {
  display: flex;
  width: 1920px;
  height: 1179px;
  flex-direction: column;
  align-items: flex-start;

  background: var(--background, #131517);
}

.progress-bar {
  width: 100%;
  margin: 45px;
}
</style>
