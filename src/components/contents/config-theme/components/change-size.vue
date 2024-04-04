<script setup lang="ts">
const { layoutConfig, changeLayoutConfig } = useThemeStore()
</script>

<template>
  <n-divider dashed>
    {{ $t("lang.changeLang") }}
  </n-divider>
  <n-space>
    <n-flex justify="space-between" align="center">
      <span>{{ $t("message.headerHeight") }}</span>
      <n-input-number
        v-model:value="layoutConfig.headerHeight"
        :min="50"
        :max="100"
        :on-update:value="(value: number) => changeLayoutConfig('headerHeight', value)"
      />
    </n-flex>
    <n-flex justify="space-between" align="center">
      <span>{{ $t("message.siderWidth") }}</span>
      <n-input-number
        v-model:value="layoutConfig.siderWidth"
        :min="140"
        :max="250"
        :on-update:value="(value: number) => changeLayoutConfig('siderWidth', value)"
      />
    </n-flex>
    <n-flex justify="space-between" align="center">
      <span>{{ $t("message.footerHeight") }}</span>
      <n-input-number
        v-model:value="layoutConfig.footerHeight"
        :min="50"
        :max="100"
        :on-update:value="(value: number) => changeLayoutConfig('footerHeight', value)"
      />
    </n-flex>
    <n-flex justify="space-between" align="center">
      <span>{{ $t("message.contentPadding") }}</span>
      <n-input-number
        v-model:value="layoutConfig.contentPadding"
        :min="5"
        :max="30"
        :on-update:value="(value: number) => changeLayoutConfig('contentPadding', value)"
      />
    </n-flex>
  </n-space>
</template>
