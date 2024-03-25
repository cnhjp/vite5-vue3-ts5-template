<template>
  <h1>dark</h1>
  <button class="btn btn-primary" @click="toggleDark()">
    {{ isDark ? "切换夜间模式" : "切换白天模式" }}
  </button>
  {{ isDark }}

  <h1>font</h1>
  <p class="font-mono">1 + 1 === 2</p>
  <p class="font-aguafina">hello everyone</p>
  <p class="font-architects">are you ok?</p>

  <h1>icon</h1>
  <div class="i-mdi-alarm text-orange-400 dark:bg-blue-500" />
  <div class="i-mdi:car-multiple w-1em h-1em"></div>

  <h1>i18n</h1>
  <div>{{ $t("message.hello") }}</div>
  <button class="btn btn-primary" @click="changeLang">
    {{ $t("lang.changeLang") }}
  </button>

  <h1>nprogress</h1>
  <button class="btn btn-primary" @click="toHome">to home</button>
  <router-link to="/home">to home</router-link>
</template>

<script setup lang="ts">
import { router } from "@/router";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const changeLang = () => {
  const lang = useI18n().locale;
  changeLocale(lang === "en" ? "zh-CN" : "en");
};

const toHome = () => {
  router.push("/home");
};
</script>
