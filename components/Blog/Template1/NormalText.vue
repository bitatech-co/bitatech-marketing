<script setup lang="ts">
interface primaryType {
  normal_text: string
}

interface Props {
  primary: primaryType | any
}

const props = withDefaults(defineProps<Props>(), {
  primary: ''
})
</script>

<template>
  <div class="pb-4">
    <p>{{ primary.normal_text }}</p>
  </div>
</template>
