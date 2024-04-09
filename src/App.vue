<script setup lang="ts">
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

const { themeVars, darkThemeVars, transitionName }
  = storeToRefs(useThemeStore());

const theme = computed(() => {
  return {
    common: isDark.value ? darkThemeVars.value : themeVars.value,
  };
});
</script>

<template>
  <n-config-provider
    :theme="theme"
    :theme-overrides="theme"
    class="h-full w-full"
  >
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || transitionName" appear>
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </n-config-provider>
</template>
