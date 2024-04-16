<script setup lang="ts">
const showDrawer = ref(false);
</script>

<template>
  <icon-button
    iconify-class="i-heroicons:cog-8-tooth"
    :tooltip-content="$t('message.themeSetting')"
    @click="showDrawer = !showDrawer"
  />

  <n-drawer v-model:show="showDrawer" :width="502" placement="right">
    <n-drawer-content :title="$t('message.themeSetting')">
      <config-theme />
    </n-drawer-content>
  </n-drawer>
</template>
