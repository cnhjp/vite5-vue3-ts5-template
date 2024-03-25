<template>
  <n-config-provider :theme="theme">
    <RouterView />
  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme } from "naive-ui";

useHead({
  meta: [
    {
      name: "theme-color",
      content: () => (isDark.value ? "#00aba9" : "#ffffff"),
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: () => (preferredDark.value ? "/favicon-dark.svg" : "/favicon.svg"),
    },
  ],
});

const theme = computed(() => {
  return isDark.value ? darkTheme : undefined;
});
</script>
