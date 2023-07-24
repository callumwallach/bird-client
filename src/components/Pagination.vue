<script setup lang="ts">
import { ref, Ref, ComputedRef, computed } from "vue";
import { range } from "lodash";
import { UseOffsetPagination } from "@vueuse/components";

const props = defineProps<{
  total: number;
  pageSize: number;
  modelValue: number;
}>();

const direction = ["before", "after"] as const;
type DirectionType = (typeof direction)[number];

const page: Ref<number> = ref(1);

const emit = defineEmits(["update:modelValue"]);

const handlePageChange = ({ currentPage }: { currentPage: number }) => {
  page.value = currentPage;
  emit("update:modelValue", currentPage);
};

/*
  generate an array of page indexes from the given page to 0 or to the 
  total number of pages
*/
const generateSide = (current: number, direction: DirectionType): string[] => {
  const pageCount = Math.ceil(props.total / props.pageSize);
  if (pageCount === 1) return [];
  const start = direction === "before" ? 1 : current + 1;
  const end = direction === "before" ? current : pageCount + 1;
  let indexArray: string[] = range(start, end).map((i: number) => i.toString());
  if (indexArray.length > 2) {
    indexArray = [indexArray[0], "...", indexArray[indexArray.length - 1]];
  }
  return indexArray;
};

const pagesBeforeCurrent: ComputedRef<string[]> = computed(() =>
  generateSide(page.value, "before")
);

const pagesAfterCurrent: ComputedRef<string[]> = computed(() =>
  generateSide(page.value, "after")
);
</script>

<template>
  <div class="pagination-container">
    <UseOffsetPagination
      v-slot="{
        currentPage,
        currentPageSize,
        next,
        prev,
        pageCount,
        isFirstPage,
        isLastPage,
      }"
      :total="total"
      :page-size="pageSize"
      @page-change="handlePageChange"
    >
      <div class="pagination-content">
        <img
          v-show="isFirstPage"
          class="pagination-nav-icon"
          src="../assets/svg/left-caret-inactive.svg"
          alt="left caret inactive"
        />
        <img
          v-show="!isFirstPage"
          @click="prev"
          class="pagination-nav-icon"
          src="../assets/svg/left-caret-active.svg"
          alt="left caret active"
        />
        <div v-for="pageBefore in pagesBeforeCurrent">
          <div class="pagination-other-text">
            {{ pageBefore }}
          </div>
        </div>
        <div class="pagination-current">
          <div class="pagination-current-text">
            {{ currentPage }}
          </div>
        </div>
        <div v-for="pageAfter in pagesAfterCurrent">
          <div class="pagination-other-text">
            {{ pageAfter }}
          </div>
        </div>
        <img
          v-show="isLastPage"
          class="pagination-nav-icon"
          src="../assets/svg/right-caret-inactive.svg"
          alt="right caret inactive"
        />
        <img
          v-show="!isLastPage"
          @click="next"
          class="pagination-nav-icon"
          src="../assets/svg/right-caret-active.svg"
          alt="right caret active"
        />
      </div>
    </UseOffsetPagination>
  </div>
</template>

<style scoped>
.pagination-container {
  display: flex;
  padding: 14px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  background: #1e1f25;
}

.pagination-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17px;
}

.pagination-current {
  display: flex;
  padding: 3px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  border-radius: 6px;
  background: #5051f9;
}

.pagination-nav-icon {
  width: 24px;
  height: 24px;
}

.pagination-current-text {
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.pagination-other-text {
  /* width: 12px; */
  width: 36px;

  color: rgba(255, 255, 255, 0.4);
  text-align: center;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
</style>
