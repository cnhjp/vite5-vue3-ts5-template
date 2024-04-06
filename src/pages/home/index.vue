<script setup lang="ts">
import router from "@/router";
</script>

<template>
  <div>
    <h1>home</h1>
    <n-button @click="router.push({ name: 'Test' })">
      Test
    </n-button>
  </div>
</template>
