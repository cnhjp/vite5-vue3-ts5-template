<script setup lang="ts">
import { useMessage } from "naive-ui";

const { transitionName } = storeToRefs(useThemeStore());

function setup() {
  const message = useMessage();

  window.$message = message;
}

setup();
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || transitionName" appear>
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>
