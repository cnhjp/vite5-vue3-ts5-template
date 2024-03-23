<template>
  <button class="btn btn-primary" @click="toggleDark()">切换主题</button>
  {{ isDark }}

  <h1>icon</h1>
  <div class="i-mdi-alarm text-orange-400 dark:bg-blue-500" />
  <div class="i-mdi:car-multiple w-1em h-1em"></div>
</template>

<script setup lang="ts">
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
