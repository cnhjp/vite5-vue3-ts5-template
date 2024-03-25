<template>
  <div>
    <template v-if="tooltipContent">
      <n-tooltip :trigger="tooltipTrigger" :placement="tooltipPlacement">
        <template #trigger>
          <div :class="wrapperClass" @click="emits('click')">
            <div :class="classList"></div>
          </div>
        </template>
        <div>{{ tooltipContent }}</div>
      </n-tooltip>
    </template>
    <template v-else>
      <div :class="wrapperClass" @click="emits('click')">
        <div :class="classList"></div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
interface Props {
  class?: string | string[]; // class
  iconifyClass?: string | string[]; // iconify class
  tooltipTrigger?: string; // tooltip trigger
  tooltipContent?: string; // tooltip content
  tooltipPlacement?: string; // tooltip placement
}

const props = withDefaults(defineProps<Props>(), {
  class: "h-6 w-6",
  iconifyClass: "",
  tooltipTrigger: "hover",
  tooltipContent: "",
  tooltipPlacement: "top",
});

const emits = defineEmits(["click"]);

const wrapperClass = computed(() => {
  return ["hover:cursor-pointer", "px-2", "py-1", "hover:bg-gray-200"];
});

const classList = computed(() => {
  return [
    ...(Array.isArray(props.class) ? props.class : [props.class]),
    ...(Array.isArray(props.iconifyClass)
      ? props.iconifyClass
      : [props.iconifyClass]),
  ];
});
</script>
