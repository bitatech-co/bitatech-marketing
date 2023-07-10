<script setup lang="ts">
const { client } = usePrismic();

const { data: blog } = await useAsyncData('blog', async () => {
  const result = await client.getByUID('blog', 'javascript-for-beginners')

  if (result) {
    return result
  } else {
    return { data: null }
  }
})

const slices = computed(() => blog.value.data?.slices || [])
</script>

<template>
  <div class="bg-gray-50 px-6 py-32 lg:px-8">
    <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <template v-for="(slice,idx) in slices" :key="idx">
        <BlogTemplate1Title v-if="slice.slice_type === 'title'" :primary="slice.primary" />
        <BlogTemplate1DescriptionText v-if="slice.slice_type === 'description'" :primary="slice.primary" />
        <BlogTemplate1NormalText v-if="slice.slice_type === 'normal_text'" :primary="slice.primary" />
        <BlogTemplate1ListText v-if="slice.slice_type === 'list_text'" :items="slice.items" />
        <BlogTemplate1Quote v-if="slice.slice_type === 'quote'" :primary="slice.primary" />
        <BlogTemplate1Thumbnail v-if="slice.slice_type === 'image'" :primary="slice.primary" />
      </template>
    </div>
  </div>
</template>
