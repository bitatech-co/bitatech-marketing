
<script setup lang="ts">
interface thumbnailType {
  alt: string
  copyright: string | null
  url: string
}

interface blogType {
  uid: string
  lastPublicationDate: string | Date
  thumbnail: thumbnailType
  title: string
}

interface Props {
  posts: blogType[] | never[]
}

const props = withDefaults(defineProps<Props>(), {
  posts: []
})
</script>

<template>
  <div class="bg-gray-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">From the blog</h2>
        <p class="mt-2 text-lg leading-8 text-gray-400">Learn how to grow your business with our expert advice.</p>
      </div>
      <div class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="post in posts" :key="post.uid" class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
          <img :src="post.thumbnail?.url" :alt="post.thumbnail?.alt" class="absolute inset-0 -z-10 h-full w-full object-cover" />
          <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
          <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

          <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            <time :datetime="post.lastPublicationDate" class="mr-8">{{ $dayjs(post.lastPublicationDate).format('DD MMM YYYY') }}</time>
          </div>
          <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
            <NuxtLink :to="`/blogs/${post.uid}`">
              <span class="absolute inset-0" />
              {{ post.title }}
            </NuxtLink>
          </h3>
        </article>
      </div>
    </div>
  </div>
</template>
