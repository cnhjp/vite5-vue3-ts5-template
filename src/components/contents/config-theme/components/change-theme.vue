<script setup lang="ts">
const { changeThemeVars } = useThemeStore();
const { themeVars, darkThemeVars } = storeToRefs(useThemeStore());

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
  changeThemeVars(key, val);
}

const theme = computed(() => {
  return isDark.value ? darkThemeVars.value : themeVars.value;
});
</script>

<template>
  <n-divider dashed>
    {{ $t("message.themeSetting") }}
  </n-divider>
  <n-space>
    <template v-for="color in colorList" :key="color">
      <n-flex justify="space-between" align="center">
        <span>{{ $t(`themeColor.${color}`) }}</span>
        <n-color-picker
          :value="theme[color]"
          :on-update:value="(e: string) => changeThemeColor(color, e)"
          class="w-24"
        />
      </n-flex>
    </template>
  </n-space>
</template>
