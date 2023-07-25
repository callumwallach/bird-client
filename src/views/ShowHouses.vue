<script setup lang="ts">
import { ref, Ref, watch } from "vue";
import Sidebar from "../components/Sidebar.vue";
import HouseSummary from "../components/HouseSummary.vue";
import Pagination from "../components/Pagination.vue";
import { House, HousesResultSet } from "../helper/houses";
import { BIRDHOUSE_ADMIN_API_URL, HOUSES_PAGE_SIZE } from "../helper/constants";
import axiosInstance from "../service/axiosInstance";

const houses: Ref<House[]> = ref([]);
const total: Ref<number> = ref(0);
const page: Ref<number> = ref(1);

/*
  fetch one page worth of houses
*/
const fetchHouses = async (page: number) => {
  const { data }: { data: HousesResultSet } = await axiosInstance.get(
    `${BIRDHOUSE_ADMIN_API_URL}?active=true&limit=${HOUSES_PAGE_SIZE}&page=${page}`
  );
  houses.value = data.data;
  total.value = data.count;
};

/*
  watch for changes in search page number and fetch that 
  page's worth of houses when it changes. immediate flag ensures
  first update is also fetched
*/
watch(
  page,
  async () => {
    await fetchHouses(page.value);
  },
  { immediate: true }
);
</script>

<template>
  <div class="houses-container">
    <Sidebar />
    <div
      v-if="houses.length"
      class="houses-content"
    >
      <HouseSummary
        v-for="house of houses"
        :key="house.ubid"
        :house="house"
        @click="
          $router.push({
            name: 'show-house',
            params: { ubid: house.ubid },
          })
        "
      />
    </div>
    <progress
      v-else
      class="progress-bar"
      aria-label="Loading houses..."
      max="100"
    />
  </div>
  <Pagination
    v-if="houses.length"
    :total="total"
    :pageSize="HOUSES_PAGE_SIZE"
    v-model="page"
  />
</template>

<style scoped>
.houses-container {
  display: flex;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
}

.houses-content {
  display: flex;
  padding: 32px;
  align-items: flex-start;
  gap: 24px;
  flex: 1 0 0;
  align-self: stretch;
}
</style>
