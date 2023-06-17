
<script lang="ts" setup>
const numberClient = 90
</script>

<template>
  <div>
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

    <!-- Blog section -->
    <HomePageBlogs />

    <!-- Awards And Recognitions -->
    <HomePageAwardsAndRecognitions />

    <!-- CTA Section -->
    <HomePageCTA />
  </div>
</template>
