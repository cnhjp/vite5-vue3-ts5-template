<script setup lang="ts">
const { resetTheme } = useThemeStore();
</script>

<template>
  <n-divider dashed>
    {{ $t("message.resetTheme") }}
  </n-divider>
  <n-button type="primary" @click="resetTheme">
    {{
      $t("message.resetTheme")
    }}
  </n-button>
</template>
