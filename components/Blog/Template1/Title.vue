<script setup lang="ts">
interface primaryType {
  topic: string
  label: string
}
interface Props {
  primary: primaryType | any
}

const props = withDefaults(defineProps<Props>(), {
  primary: {
    topic: '',
    label: ''
  }
})
</script>

<template>
  <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700 mb-4">
    <p class="text-base font-semibold leading-7 text-orange-400">{{ primary.topic }}</p>
    <h1 class="mt-2 font-bold tracking-tight text-gray-900" :class="!!primary.topic ? 'text-3xl' : 'text-lg'">{{ primary.label }}</h1>
  </div>
</template>
