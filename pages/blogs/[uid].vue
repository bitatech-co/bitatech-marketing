<script setup lang="ts">
const { client } = usePrismic()
const route = useRoute()

const blogData = ref([])

onMounted(async () => {
  const result = await client.getByUID("blog", route.params.uid.toString());
  console.log('result', result)
  if (result) {
    blogData.value = result 
  }
})

const slices = computed(() => blogData.value.data?.slices || [])
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
