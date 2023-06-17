
<script setup lang="ts">
interface Props {
  numberClient: string | number
}

const props = withDefaults(defineProps<Props>(), {
  numberClient: 90
})

const Clients = [
  {
    imageUrl:
      '/client-bitatech-1.jpeg',
  },
  {
    imageUrl:
      '/client-bitatech-2.jpeg',
  },
  {
    imageUrl:
      '/client-bitatech-3.jpeg',
  },
  {
    imageUrl:
      '/client-bitatech-4.jpeg',
  },
  {
    imageUrl:
      '/client-bitatech-5.jpeg',
  },
  {
    imageUrl:
      '/client-bitatech-6.png',
  },
  {
    imageUrl:
      '/client-bitatech-7.svg',
  },
  {
    imageUrl:
      '/client-bitatech-8.png',
  },
  {
    imageUrl:
      '/client-bitatech-9.png',
  },
  {
    imageUrl:
      '/client-bitatech-10.jpeg',
  },
  {
    imageUrl:
      '/client-bitatech-11.jpeg',
  },
  {
    imageUrl:
      '/client-bitatech-12.jpeg',
  }
  // More whyUs...
]
</script>

<template>
  <!-- Testimonial section -->
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-8 sm:space-y-12">
        <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Our Clients</h2>
          <p class="text-xl text-gray-500">Proudly partnered with {{numberClient}}+ clients from diverse industries including Banking & Finance, Automotive, Retail, Health Care, Education, Media & Entertainment</p>
        </div>
        <Swiper
          :modules="[SwiperAutoplay, SwiperGrid]"
          :loop="true"
          :autoplay="{
            delay: 2000,
            disableOnInteraction: true,
          }"
          :breakpoints="{
            320: {
              slidesPerView: 'auto',
            },
            1024: {
              slidesPerView: 6,
            },
          }"
        >
          <SwiperSlide
            v-for="(client,idx) in Clients"
            :key="idx"
          >
            <div class="space-y-4">
              <img v-if="client.imageUrl === '/client-bitatech-1.jpeg'" class="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24" src="/client-bitatech-1.jpeg" alt="" />
              <img v-else-if="client.imageUrl === '/client-bitatech-2.jpeg'" class="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24" src="/client-bitatech-2.jpeg" alt="" />
              <img v-else-if="client.imageUrl === '/client-bitatech-3.jpeg'" class="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24" src="/client-bitatech-3.jpeg" alt="" />
              <img v-else-if="client.imageUrl === '/client-bitatech-4.jpeg'" class="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24" src="/client-bitatech-4.jpeg" alt="" />
              <img v-else-if="client.imageUrl === '/client-bitatech-5.jpeg'" class="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24" src="/client-bitatech-5.jpeg" alt="" />
              <img v-else-if="client.imageUrl === '/client-bitatech-6.png'" class="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24" src="/client-bitatech-6.png" alt="" />
              <img v-else-if="client.imageUrl === '/client-bitatech-7.svg'" class="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24" src="/client-bitatech-7.svg" alt="" />
              <img v-else-if="client.imageUrl === '/client-bitatech-8.png'" class="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24" src="/client-bitatech-8.png" alt="" />
              <img v-else-if="client.imageUrl === '/client-bitatech-9.png'" class="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24" src="/client-bitatech-9.png" alt="" />
              <img v-else-if="client.imageUrl === '/client-bitatech-10.jpeg'" class="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24" src="/client-bitatech-10.jpeg" alt="" />
              <img v-else-if="client.imageUrl === '/client-bitatech-11.jpeg'" class="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24" src="/client-bitatech-11.jpeg" alt="" />
              <img v-else class="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24" src="/client-bitatech-12.jpeg" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<style>
.swiper-pagination-bullet-active {
  background-color: #fb923c;
}
</style>