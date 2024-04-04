<script setup lang="ts">
import type { DropdownOption } from 'naive-ui'
import { messages } from '@/modules/i18n'

const options = computed(() => {
  return Object.keys(messages).map((key) => {
    const lang = messages[key].lang.lang
    return {
      label: lang,
      key,
    }
  })
})

const current = computed(() => {
  const i18n = useI18n()
  return i18n.locale
})

function onRenderLabel(option: DropdownOption) {
  return h(
    'div',
    { 'font-weight': 'bold', 'fontSize': '20px' },
    option.label as string,
  )
}

function handleSelect(e: string) {
  changeLocale(e)
}
</script>

<template>
  <n-dropdown
    trigger="click"
    :value="current"
    :options="options"
    :render-label="onRenderLabel"
    @select="handleSelect"
  >
    <icon-button
      iconify-class="i-heroicons:language-20-solid"
      :tooltip-content="$t('lang.changeLang')"
      tooltip-placement="left"
    />
  </n-dropdown>
</template>
