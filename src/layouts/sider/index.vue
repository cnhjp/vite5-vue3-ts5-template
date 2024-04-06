<script setup lang="ts">
const themeStore = useThemeStore();

function handleCollapse(collapsed: boolean) {
  themeStore.setCollapse(collapsed);
}
</script>

<template>
  <n-layout-sider
    bordered
    :width="themeStore.layoutConfig.siderWidth"
    :default-collapsed="themeStore.layoutState.collapsed"
    :collapsed-width="themeStore.layoutConfig.collapsedSiderWidth"
    :on-update:collapsed="handleCollapse"
    show-trigger="arrow-circle"
  >
    sider
  </n-layout-sider>
</template>
