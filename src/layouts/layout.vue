<template>
  <n-layout has-sider :class="layoutClassList">
    <layout-header :class="layoutHeaderClassList"></layout-header>
    <layout-sider :class="layoutSiderClassList"></layout-sider>
    <layout-content :class="layoutContentClassList"></layout-content>
    <layout-footer :class="layoutFooterClassList"></layout-footer>
  </n-layout>
</template>

<script setup lang="ts">
import LayoutHeader from "./header";
import LayoutFooter from "./footer";
import LayoutContent from "./content";
import LayoutSider from "./sider";
import Style1 from "./styles/style1.module.scss";
import Style2 from "./styles/style2.module.scss";
import Style3 from "./styles/style3.module.scss";

const { layoutConfig, layoutState, createLayoutCssVar } = useThemeStore();
const Style = computed(() => {
  switch (layoutState.currentLayout) {
    case 1:
      return Style1;
    case 2:
      return Style2;
    case 3:
      return Style3;
    default:
      return Style1;
  }
});

createLayoutCssVar(layoutConfig);

const layoutClassList = computed(() => [Style.value["layout"]]);
const layoutHeaderClassList = computed(() => [Style.value["layout-header"]]);
const layoutSiderClassList = computed(() => [
  Style.value["layout-sider"],
  layoutState.collapsed ? Style.value["layout-sider--collapsed"] : "",
]);
const layoutContentClassList = computed(() => [Style.value["layout-content"]]);
const layoutFooterClassList = computed(() => [Style.value["layout-footer"]]);
</script>
