<script setup lang="ts">
const { transitionName, toggleTransition } = useThemeStore();

const options = ref([
  { label: "fade", value: "value" },
  { label: "ease", value: "ease" },
  { label: "ease-in", value: "ease-in" },
  { label: "ease-out", value: "ease-out" },
  { label: "ease-in-out", value: "ease-in-out" },
  { label: "linear", value: "linear" },
  { label: "cubic-bezier", value: "cubic-bezier" },
  { label: "slide-left", value: "slide-left" },
  { label: "slide-right", value: "slide-right" },
  { label: "slide-up", value: "slide-up" },
  { label: "slide-down", value: "slide-down" },
]);
</script>

<template>
  <n-divider dashed>
    {{ $t("message.transitionName") }}
  </n-divider>{{ transitionName }}
  <n-select
    :value="transitionName"
    :options="options"
    :onUpdate:value="toggleTransition"
  />
</template>
