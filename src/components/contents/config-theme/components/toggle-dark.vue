<template>
  <n-divider dashed>{{ $t("message.dark") }}</n-divider>
  <n-tabs
    type="segment"
    animated
    class="w-200px mx-auto"
    :value="isDark ? 'night' : 'sunny'"
    @update:value="toggleDark()"
  >
    <n-tab name="sunny"> <div class="i-mdi:weather-sunny"></div> </n-tab>
    <n-tab name="night"> <div class="i-mdi:weather-night"></div> </n-tab>
  </n-tabs>
</template>

<script setup lang="ts">
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
