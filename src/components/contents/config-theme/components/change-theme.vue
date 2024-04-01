<template>
  <n-divider dashed>{{ $t("message.themeSetting") }}</n-divider>
  <n-space>
    <template v-for="color in colorList" :key="color">
      <n-flex justify="space-between" align="center">
        <span>{{ $t(`themeColor.${color}`) }}</span>
        <n-color-picker
          v-model:value="themeVars[color]"
          :on-update:value="(e) => changeThemeColor(color, e)"
          class="w-24"
        />
      </n-flex>
    </template>
  </n-space>
</template>

<script setup lang="ts">
const { themeVars } = useThemeStore();

type ColorKey =
  | "primaryColor"
  | "infoColor"
  | "successColor"
  | "warningColor"
  | "errorColor";

const colorList = ref<ColorKey[]>([
  "primaryColor",
  "infoColor",
  "successColor",
  "warningColor",
  "errorColor",
]);

function changeThemeColor(key: ColorKey, val: string) {
  themeVars[key] = val;
}
</script>
