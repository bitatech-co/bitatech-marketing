<script setup lang="ts">
interface dimensionsType {
  width: number
  height: number
}

interface imageType {
  dimensions: dimensionsType
  alt: string | null
  copyright: string | null
  url: string | null
}

interface primaryType {
  image: imageType
}

interface Props {
  primary: primaryType | any
}


const props = withDefaults(defineProps<Props>(), {
  primary: {
    image: {
      url: '',
      alt: ''
    }
  }
})
</script>

<template>
  <figure class="mt-10 mb-4">
    <img class="aspect-video rounded-xl bg-gray-50 object-cover" :src="primary.image.url" :alt="primary.image.alt" />
    <figcaption class="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
      <InformationCircleIcon class="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
      {{ primary.image.alt }}
    </figcaption>
  </figure>
</template>
