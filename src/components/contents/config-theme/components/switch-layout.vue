<template>
  <n-divider dashed>{{ $t("message.switchLayout") }}</n-divider>
  <n-flex justify="center">
    <n-radio-group
      :value="layoutState.currentLayout"
      @update:value="handleSwitchLayout"
    >
      <n-radio
        v-for="l in layoutState.layoutsCount"
        :key="l"
        :value="l"
        :label="`布局${l}`"
      ></n-radio>
    </n-radio-group>
  </n-flex>
</template>

<script setup lang="ts">
const { layoutState } = useThemeStore();

const handleSwitchLayout = (e: number) => {
  layoutState.currentLayout = e;
};
</script>
