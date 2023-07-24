<script setup lang="ts">
import { ref, Ref, watch, computed } from "vue";
import HouseDetail from "../components/HouseDetail.vue";
import Sidebar from "../components/Sidebar.vue";
import axiosInstance from "../service/axiosInstance";
import {
  BIRDHOUSE_ADMIN_API_URL,
  RESIDENCY_PAGE_SIZE,
} from "../helper/constants";
import { House, Residency } from "../helper/houses";
import Pagination from "../components/Pagination.vue";

const props = defineProps<{
  ubid: string;
}>();

const house: Ref<House | null> = ref(null);
const ubid = ref(props.ubid);
const page: Ref<number> = ref(1);

/*
  fetch one house
*/
const fetchOneHouse = async (ubid: string) => {
  try {
    const { data }: { data: House } = await axiosInstance.get(
      `https://${BIRDHOUSE_ADMIN_API_URL}/${ubid}?active=true`
    );
    house.value = data;
    house.value.residencyHistory = house.value.residencyHistory.sort(
      (a: Residency, b: Residency) => a.created_at.localeCompare(b.created_at)
    );
  } catch (error) {
    console.log(`error fetching house ${ubid}`, error);
  }
};

/*
  filter residencies of the house by page
*/
const filteredResidencies = computed(() => {
  if (!house.value) return [];
  return house.value.residencyHistory.slice(
    (page.value - 1) * RESIDENCY_PAGE_SIZE,
    page.value * RESIDENCY_PAGE_SIZE
  );
});

/*
  watch the ubid of the house to view and fetch that 
  house when it changes. immediate flag ensures first
  update is also fetched
*/
watch(
  ubid,
  async () => {
    await fetchOneHouse(ubid.value);
  },
  { immediate: true }
);
</script>

<template>
  <div class="house-container">
    <Sidebar />
    <HouseDetail
      v-if="house"
      :name="house.name"
      :lat="house.lat"
      :lng="house.lng"
      :residencies="filteredResidencies"
    />
    <progress
      v-else
      class="progress-bar"
      aria-label="Loading house..."
      max="100"
    />
  </div>
  <Pagination
    v-if="house"
    :total="house.residencyHistory.length"
    :pageSize="RESIDENCY_PAGE_SIZE"
    v-model="page"
  />
</template>

<style scoped>
.house-container {
  display: flex;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
}
</style>
