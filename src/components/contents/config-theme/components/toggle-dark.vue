<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <n-divider dashed>
    {{ $t("message.dark") }}
  </n-divider>
  <n-tabs
    type="segment"
    animated
    class="mx-auto w-200px"
    :value="isDark ? 'night' : 'sunny'"
    @update:value="toggleDark()"
  >
    <n-tab name="sunny">
      <div class="i-mdi:weather-sunny" />
    </n-tab>
    <n-tab name="night">
      <div class="i-mdi:weather-night" />
    </n-tab>
  </n-tabs>
</template>
