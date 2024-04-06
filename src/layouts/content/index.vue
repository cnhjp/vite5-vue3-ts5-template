<script setup lang="ts">
const { transitionName } = useThemeStore();
</script>

<template>
  <n-layout-content bordered>
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || transitionName" appear>
        <component :is="Component" />
      </transition>
    </router-view>
  </n-layout-content>
</template>
