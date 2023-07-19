<script setup lang="ts">
const { client } = usePrismic()
const currentPage = ref<Number>(1)

const { data: blogs } = await useAsyncData('blog', async () => {
  const result = await client.getAllByType('blog', {
    pageSize: 10,
    page: currentPage.value
  })
  if (result) {
    return result
  } else {
    return []
  }
})

const posts = computed(() => {
  if (!blogs.value) return []
  const convertBlog = blogs.value?.map(blog => {
    const description = blog.data?.slices.find(slice => slice.slice_type === 'description')
    return {
      uid: blog.uid,
      lastPublicationDate: blog.last_publication_date,
      thumbnail: blog.data?.thumbnail || '',
      title: blog.data?.title || '',
      description: description ? description?.primary?.text : ''
    }
  })
  return convertBlog || []
})
</script>

<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-4xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p>
        <div class="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
          <article v-for="post in posts" :key="post.uid" class="relative isolate flex flex-col gap-8 lg:flex-row">
            <div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
              <img :src="post.thumbnail?.url" :alt="post.thumbnail?.alt" class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover" />
              <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div>
              <div class="flex items-center gap-x-4 text-xs">
                <time :datetime="post.lastPublicationDate" class="mr-8">{{ $dayjs(post.lastPublicationDate).format('DD MMM YYYY') }}</time>
              </div>
              <div class="group relative max-w-xl">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <NuxtLink :to="`/blogs/${post.uid}`">
                    <span class="absolute inset-0" />
                    {{ post.title }}
                  </NuxtLink>
                </h3>
                <p class="mt-5 text-sm leading-6 text-gray-600">{{ post.description }}</p>
              </div>
              <!-- <div class="mt-6 flex border-t border-gray-900/5 pt-6">
                <div class="relative flex items-center gap-x-4">
                  <img :src="post.author.imageUrl" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
                  <div class="text-sm leading-6">
                    <p class="font-semibold text-gray-900">
                      <a :href="post.author.href">
                        <span class="absolute inset-0" />
                        {{ post.author.name }}
                      </a>
                    </p>
                    <p class="text-gray-600">{{ post.author.role }}</p>
                  </div>
                </div>
              </div> -->
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
