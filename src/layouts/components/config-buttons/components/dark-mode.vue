<template>
  <icon-button
    :iconifyClass="darkIconClass"
    :tooltipContent="$t('message.dark')"
    @click="toggleDark()"
  ></icon-button>
</template>

<script setup lang="ts">
const isDark = useDark();
const toggleDark = useToggle(isDark) as any;

const darkIconClass = computed(() => {
  return isDark.value ? "i-mdi:weather-sunny" : "i-mdi:weather-night";
});
</script>
