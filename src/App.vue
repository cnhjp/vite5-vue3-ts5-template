<script setup lang="ts">
import { darkTheme } from 'naive-ui'

useHead({
  meta: [
    {
      name: 'theme-color',
      content: () => (isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => (preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})

const theme = computed(() => {
  return isDark.value ? darkTheme : undefined
})
const { themeVars, key } = storeToRefs(useThemeStore())
const themeOverrides = computed(() => {
  return {
    // TODO: 这里必须加一个key，否则在切换主题时不生效
    ...themeVars.value,
    otherKey: key.value,
  }
})
</script>

<template>
  <n-config-provider
    :theme="theme"
    :theme-overrides="themeOverrides"
    class="h-full w-full"
  >
    <RouterView />
  </n-config-provider>
</template>
