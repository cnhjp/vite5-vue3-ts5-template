<template>
  <n-divider dashed>{{ $t("lang.changeLang") }}</n-divider>
  <n-flex justify="center">
    <n-radio-group :value="current" @update:value="handleSelect">
      <n-radio
        v-for="l in options"
        :key="l.key"
        :value="l.key"
        :label="l.label"
      ></n-radio>
    </n-radio-group>
  </n-flex>
</template>

<script setup lang="ts">
import { messages } from "@/modules/i18n";

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

const handleSelect = (e: string) => {
  changeLocale(e);
};
</script>
