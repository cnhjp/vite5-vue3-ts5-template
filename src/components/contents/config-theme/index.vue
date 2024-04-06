<script setup lang="ts">
import ToggleDark from "./components/toggle-dark.vue";
import SwitchLayout from "./components/switch-layout.vue";
import SwitchLang from "./components/switch-lang.vue";
import ChangeSize from "./components/change-size.vue";
import ChangeTheme from "./components/change-theme.vue";
import ToggleTransition from "./components/toggle-transition.vue";
import ResetTheme from "./components/reset-theme.vue";
</script>

<template>
  <ToggleDark />
  <SwitchLayout />
  <SwitchLang />
  <ChangeSize />
  <ChangeTheme />
  <ToggleTransition />
  <ResetTheme />
</template>
