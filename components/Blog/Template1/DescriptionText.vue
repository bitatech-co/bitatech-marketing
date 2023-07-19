<script setup lang="ts">
interface primaryType {
  text: string
}

interface Props {
  primary: primaryType | any
}

const props = withDefaults(defineProps<Props>(), {
  primary: {
    text: ''
  }
})
</script>

<template>
  <div class="pb-4">
    <p class="mt-6 text-xl leading-8">{{ primary.text }}</p>
  </div>
</template>
