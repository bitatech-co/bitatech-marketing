<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/20/solid'

interface items {
  item: any
}
interface Props {
  items: items[] | null
}

const props = withDefaults(defineProps<Props>(), {
  items: null
})

function convertHTML(item: any) {
  const splitString = item.text.split('')
  const startPoint = item.spans[0].start
  const endPoint = item.spans[0].end
  const tag = item.spans[0].type

  let text = ''
  for (let i = 0; i < splitString.length; i++) {
    const currentChar = splitString[i]

    if (i === startPoint) {
      text = `${text}<${tag}>${currentChar}`
    } else if (i === endPoint) {
      text = `${text}</${tag}>${currentChar}`
    } else {
      text = `${text}${currentChar}`
    }
  }

  return text
}
</script>

<template>
  <div class="pb-4">
    <ul v-if="items" role="list" class="my-6 max-w-xl space-y-8 text-gray-600">
      <li v-for="item,idx in items" :key="idx" class="flex gap-x-3">
        <CheckCircleIcon class="mt-1 h-5 w-5 flex-none text-orange-400" aria-hidden="true" />
        <span v-html="convertHTML(item.item[0])"></span>
      </li>
    </ul>
  </div>
</template>
