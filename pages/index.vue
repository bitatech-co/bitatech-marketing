
<script lang="ts" setup>
const { client } = usePrismic()

const numberClient = 90

const { data: blogs } = await useAsyncData('blog', async () => {
  const result = await client.getAllByType('blog', {
    pageSize: 3,
    page: 0
  })
  if (result) {
    return result
  } else {
    return []
  }
})

const posts = computed(() => {
  if (!blogs.value) return []
  const sliceData = blogs.value.slice(0, 3)
  const convertBlog = sliceData?.map(blog => {
    return {
      uid: blog.uid,
      lastPublicationDate: blog.last_publication_date,
      thumbnail: blog.data?.thumbnail || '',
      title: blog.data?.title || ''
    }
  })
  return convertBlog || []
})
</script>

<template>
  <div class="pb-20">
    <!-- Introduction -->
    <HomePageIntroduction />

    <!-- Why chose us -->
    <HomePageWhyChoseUs :numberClient="numberClient"/>

    <!-- Stats -->
    <HomePageStats :numberClient="numberClient"/>

    <!-- Our Services -->
    <HomePageOurServices />
    
    <!-- Testimonial section -->
    <HomePageTestimonial />
    
    <!-- Our Client -->
    <HomePageOurClient :numberClient="numberClient"/>

    <!-- award -->
    <HomePageAward />

    <!-- Awards And Recognitions -->
    <HomePageAwardsAndRecognitions />

    <!-- Blog section -->
    <HomePageBlogs v-if="posts && posts.length > 0" :posts="posts"/>

    <!-- CTA Section -->
    <HomePageCTA />
  </div>
</template>
