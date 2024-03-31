<template>
  <n-layout-sider
    bordered
    :width="siderWidth"
    :default-collapsed="layoutState.collapsed"
    :collapsed-width="collapsedSiderWidth"
    :on-update:collapsed="handleCollapse"
    show-trigger="arrow-circle"
    >sider</n-layout-sider
  >
</template>

<script setup lang="ts">
const { layoutConfig, layoutState, setCollapse } = useThemeStore();

const { siderWidth, collapsedSiderWidth } = layoutConfig;

const handleCollapse = (collapsed: boolean) => {
  setCollapse(collapsed);
};
</script>
