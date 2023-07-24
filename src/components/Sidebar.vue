<script setup lang="ts"></script>

<template>
  <div class="sidebar-container">
    <router-link
      :to="{ name: 'home' }"
      class="sidebar-item sidebar-item-icon"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Icon">
          <path
            id="Icon_2"
            d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15"
            stroke="white"
            stroke-opacity="0.2"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </router-link>
    <router-link
      :to="{ name: 'show-houses' }"
      class="sidebar-item sidebar-item-icon"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Icon">
          <g id="Icon_2">
            <path
              d="M4 6C4 4.89543 4.89543 4 6 4H8C9.10457 4 10 4.89543 10 6V8C10 9.10457 9.10457 10 8 10H6C4.89543 10 4 9.10457 4 8V6Z"
              stroke="white"
              stroke-opacity="0.2"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 6C14 4.89543 14.8954 4 16 4H18C19.1046 4 20 4.89543 20 6V8C20 9.10457 19.1046 10 18 10H16C14.8954 10 14 9.10457 14 8V6Z"
              stroke="white"
              stroke-opacity="0.2"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 16C4 14.8954 4.89543 14 6 14H8C9.10457 14 10 14.8954 10 16V18C10 19.1046 9.10457 20 8 20H6C4.89543 20 4 19.1046 4 18V16Z"
              stroke="white"
              stroke-opacity="0.2"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 16C14 14.8954 14.8954 14 16 14H18C19.1046 14 20 14.8954 20 16V18C20 19.1046 19.1046 20 18 20H16C14.8954 20 14 19.1046 14 18V16Z"
              stroke="white"
              stroke-opacity="0.2"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
      </svg>
    </router-link>
  </div>
</template>

<style scoped>
.sidebar-container {
  display: flex;
  padding: 20px 16px;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  align-self: stretch;

  background: var(--boxes, #1e1f25);
}

.sidebar-item {
  display: flex;
  padding: 12px;
  align-items: flex-start;

  border-radius: 8px;
  background: var(--boxes, #1e1f25);
}

.sidebar-item-active {
  fill: #fff;
  background: var(--main, #5051f9);
}

.sidebar-item-icon {
  width: 24px;
  height: 24px;
}

a:hover {
  background: var(--main, rgb(80, 81, 249, 0.35));
}

a:active,
a.router-link-active {
  background: var(--main, #5051f9);
}

a:hover svg path {
  stroke-opacity: 0.35;
}

a.router-link-active svg path {
  stroke-opacity: 1;
}
</style>
