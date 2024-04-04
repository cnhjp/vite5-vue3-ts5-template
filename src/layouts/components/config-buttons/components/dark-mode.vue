<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark) as any

const darkIconClass = computed(() => {
  return isDark.value ? 'i-mdi:weather-sunny' : 'i-mdi:weather-night'
})
</script>

<template>
  <icon-button
    :iconify-class="darkIconClass"
    :tooltip-content="$t('message.dark')"
    @click="toggleDark()"
  />
</template>
