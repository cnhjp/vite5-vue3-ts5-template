<template>
  <n-dropdown
    trigger="click"
    :value="current"
    :options="options"
    :render-label="onRenderLabel"
    @select="handleSelect"
  >
    <icon-button
      iconifyClass="i-heroicons:language-20-solid"
      :tooltipContent="$t('lang.changeLang')"
      tooltipPlacement="left"
    ></icon-button>
  </n-dropdown>
</template>

<script setup lang="ts">
import { messages } from "@/modules/i18n";
import { DropdownOption } from "naive-ui";

const options = computed(() => {
  return Object.keys(messages).map((key) => {
    const lang = messages[key].lang.lang;
    return {
      label: lang,
      key: key,
    };
  });
});

const current = computed(() => {
  const i18n = useI18n();
  return i18n.locale;
});

const onRenderLabel = (option: DropdownOption) => {
  return h(
    "div",
    { "font-weight": "bold", fontSize: "20px" },
    option.label as string
  );
};

const handleSelect = (e: string) => {
  const i18n = useI18n();
  i18n.locale = e;
};
</script>
