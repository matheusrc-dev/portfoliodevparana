<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    :width="size"
    :height="size"
    :class="className"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  size?: string | number
  className?: string
}

withDefaults(defineProps<Props>(), {
  size: '24',
  className: ''
})
</script>
