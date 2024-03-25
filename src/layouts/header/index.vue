<template>
  <n-layout-header bordered>
    <n-flex justify="right" align="center">
      <config-buttons></config-buttons>
      <user-avatar></user-avatar>
    </n-flex>
  </n-layout-header>
</template>

<script setup lang="ts">
import UserAvatar from "../components/user-avatar";
import ConfigButtons from "../components/config-buttons";
</script>
