<script setup lang="ts">
import { useThemeVars } from "naive-ui";
import router from "@/router";

function toDetail() {
  router.push({ name: "TestDetail" });
}

const isDark = useDark();
const toggleDark = useToggle(isDark);

function changeLang() {
  const lang = useI18n().locale;
  changeLocale(lang === "en" ? "zh-CN" : "en");
}

function toHome() {
  router.push({ name: "Home" });
}
function getTheme() {}
</script>

<template>
  <div>
    <h1>keepAlive</h1>
    <n-button @click="toDetail">
      test detail
    </n-button>

    <h1>dark</h1>
    <button class="btn btn-primary" @click="toggleDark()">
      {{ isDark ? "切换夜间模式" : "切换白天模式" }}
    </button>
    {{ isDark }}

    <h1>font</h1>
    <p class="font-mono">
      1 + 1 === 2
    </p>
    <p class="font-aguafina">
      hello everyone
    </p>
    <p class="font-architects">
      are you ok?
    </p>

    <h1>icon</h1>
    <div class="i-mdi-alarm text-orange-400 dark:bg-blue-500" />
    <div class="i-mdi-car-multiple h-1em w-1em" />

    <h1>i18n</h1>
    <div>{{ $t("message.hello") }}</div>
    <button class="btn btn-primary" @click="changeLang">
      {{ $t("lang.changeLang") }}
    </button>

    <h1>nprogress</h1>
    <button class="btn btn-primary" @click="toHome">
      to home
    </button>
    <router-link to="/home">
      to home
    </router-link>

    <h1>主题色</h1>
    <n-button type="primary" @click="getTheme">
      主色
    </n-button>
    <n-button type="info">
      信息
    </n-button>
    <n-button type="tertiary">
      第三
    </n-button>
    <n-button type="success">
      成功
    </n-button>
    <n-button type="warning">
      警告
    </n-button>
    <n-button type="error">
      错误
    </n-button>

    <h1>高亮</h1>
    <div v-highlight="'python'">
      <pre><code>
def hello_world():
  for i in range(10):
    if i % 2 == 0:
      print("Hello, world!")
    else:
      print("Goodbye, world!")
    </code></pre>
    </div>

    <div v-highlight.code>
      <pre><code>
function helloWorld() {
  console.log("Hello, world!");
}
    </code></pre>
    </div>
  </div>
</template>
