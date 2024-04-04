<script setup lang="ts">
import UserAvatar from '../components/user-avatar'
import ConfigButtons from '../components/config-buttons'
</script>

<template>
  <n-layout-header bordered>
    <n-flex justify="right" align="center" class="h-full">
      <ConfigButtons />
      <UserAvatar />
    </n-flex>
  </n-layout-header>
</template>
