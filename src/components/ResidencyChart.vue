<script setup lang="ts">
import { computed, ComputedRef } from "vue";
import {
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "vue-chartjs";
import "chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm";
import dayjs from "dayjs";
import {
  CHART_DATE_FORMAT,
  CHART_EXPANDED_DATE_FORMAT,
  CHART_GRID_COLOR,
  CHART_TICK_COLOR,
  CHART_BIRD_DATA_LINE_COLOR,
  CHART_BIRD_DATA_FILL_COLOR,
  CHART_EGG_DATA_LINE_COLOR,
  CHART_EGG_DATA_FILL_COLOR,
} from "../helper/constants";
import { Residency } from "../helper/houses";

ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const props = defineProps<{
  residencies: Residency[];
}>();

const chartOptions: ChartOptions<"line"> = {
  responsive: true,
  // maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        color: CHART_GRID_COLOR,
        display: true,
      },
      border: {
        dash: [2, 2],
      },
      ticks: {
        display: true,
        align: "center",
        color: CHART_TICK_COLOR,
        font: { family: "'Inter'", size: 12, style: "normal" },
      },
    },
    y: {
      min: 0,
      beginAtZero: true,
      grid: {
        color: CHART_GRID_COLOR,
        display: true,
      },
      border: {
        dash: [2, 2],
      },
      ticks: {
        display: true,
        align: "end",
        color: CHART_TICK_COLOR,
        font: { family: "'Inter'", size: 12, style: "normal" },
      },
    },
  },
};

const chartLabels: ComputedRef<string[]> = computed(() => {
  const startOfWeek = dayjs().subtract(7, "day");
  return props.residencies.map((residency) => {
    const date = dayjs(residency.created_at);
    return date.format(
      date.isAfter(startOfWeek) ? CHART_DATE_FORMAT : CHART_EXPANDED_DATE_FORMAT
    );
  });
});

const chartData: ComputedRef<ChartData<"line">> = computed(() => {
  return {
    labels: chartLabels.value,
    datasets: [
      {
        label: "birds",
        borderColor: CHART_BIRD_DATA_LINE_COLOR,
        borderWidth: 2,
        pointBorderWidth: 2,
        data: props.residencies.map((residency) => residency.birds),
        fill: {
          target: "origin",
          above: CHART_BIRD_DATA_FILL_COLOR,
        },
        tension: 0.4,
      },
      {
        label: "eggs",
        borderColor: CHART_EGG_DATA_LINE_COLOR,
        borderWidth: 2,
        pointBorderWidth: 2,
        data: props.residencies.map((residency) => residency.eggs),
        fill: {
          target: "origin",
          above: CHART_EGG_DATA_FILL_COLOR,
        },
        tension: 0.4,
      },
    ],
  };
});
</script>

<template>
  <div class="chart-container">
    <Line
      id="line-chart"
      :options="chartOptions"
      :data="chartData"
    />
  </div>
</template>

<style scoped>
.chart-container {
  display: inline-block;
  position: relative;
  width: 100%;
}
</style>
