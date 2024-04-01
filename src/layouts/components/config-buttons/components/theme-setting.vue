<template>
  <icon-button
    iconifyClass="i-heroicons:cog-8-tooth"
    :tooltipContent="$t('message.themeSetting')"
    @click="showDrawer = !showDrawer"
  ></icon-button>

  <n-drawer v-model:show="showDrawer" :width="502" placement="right">
    <n-drawer-content :title="$t('message.themeSetting')"
      ><config-theme></config-theme>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">
const showDrawer = ref(false);
</script>
