<script setup lang="ts">
const { layoutState } = useThemeStore()

function handleSwitchLayout(e: number) {
  layoutState.currentLayout = e
}
</script>

<template>
  <n-divider dashed>
    {{ $t("message.switchLayout") }}
  </n-divider>
  <n-flex justify="center">
    <n-radio-group
      :value="layoutState.currentLayout"
      @update:value="handleSwitchLayout"
    >
      <n-radio
        v-for="l in layoutState.layoutsCount"
        :key="l"
        :value="l"
        :label="`${$t('message.layout')}${l}`"
      />
    </n-radio-group>
  </n-flex>
</template>
