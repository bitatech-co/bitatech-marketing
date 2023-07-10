<script setup lang="ts">
interface dimensionsType {
  width: number
  height: number
}

interface avatarType {
  dimensions: dimensionsType
  alt: string | null
  copyright: string | null
  url: string | null
}

interface primaryType {
  content: string
  avatar: avatarType
  name: string
  position: string
}

interface Props {
  primary: primaryType | any
}

const props = withDefaults(defineProps<Props>(), {
  primary: {
    content: '',
    avatar: {
      url: '',
      alt: ''
    },
    name: '',
    position: ''
  }
})
</script>

<template>
  <figure class="mt-10 border-l border-indigo-600 pl-9 mb-8">
    <blockquote class="font-semibold text-gray-900">
      <p>{{ primary.content }}</p>
    </blockquote>
    <figcaption class="mt-6 flex gap-x-4">
      <img class="h-6 w-6 flex-none rounded-full bg-gray-50" :src="primary.avatar.url" :alt="primary.avatar.alt" />
      <div class="text-sm leading-6"><strong class="font-semibold text-gray-900">{{ primary.name }}</strong><span v-if="primary.position">– {{ primary.position }}</span></div>
    </figcaption>
  </figure>
</template>
