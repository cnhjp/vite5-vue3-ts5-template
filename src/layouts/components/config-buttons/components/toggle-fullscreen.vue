<script setup lang="ts">
const { isFullscreen, toggle } = useFullscreen()

const icon = computed(() => {
  return isFullscreen.value ? 'i-mdi:fullscreen-exit' : 'i-mdi:fullscreen'
})
</script>

<template>
  <icon-button :iconify-class="icon" @click="toggle" />
</template>
