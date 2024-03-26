<template>
  <n-divider dashed>{{ $t("message.switchLayout") }}</n-divider>
  <n-flex justify="center">
    <n-radio-group :value="layout" @update:value="handleSwitchLayout">
      <n-radio
        v-for="l in layouts"
        :key="l.value"
        :value="l.value"
        :label="l.label"
      ></n-radio>
    </n-radio-group>
  </n-flex>
</template>

<script setup lang="ts">
const { layout, layouts, setLayout } = useLayout();

const handleSwitchLayout = (e: string) => {
  setLayout(e);
};
</script>
