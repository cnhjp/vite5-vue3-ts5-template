<template>
  <icon-button :iconifyClass="icon" @click="toggle"></icon-button>
</template>

<script setup lang="ts">
const { isFullscreen, toggle } = useFullscreen();

const icon = computed(() => {
  return isFullscreen.value ? "i-mdi:fullscreen-exit" : "i-mdi:fullscreen";
});
</script>
