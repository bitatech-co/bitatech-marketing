
<script lang="ts" setup>
const testimonials = [
  {
    companyLogo: '/client-bitatech-6.png',
    companyName: 'Valorise',
    content:
      'Lysa Digital is an external software services provider but their way of working will make you feel like you have a bigger in-house engineering team!',
    avatar: '/avatar-vp.png',
    name: 'Vinesh',
    position: 'CEO, ValoriseAI',
  },
  {
    companyLogo: '/client-bitatech-9.png',
    companyName: 'Everluxe',
    content:
      'The excellent engineering team at Lysa Digital helped us build a performant and beautiful e-commerce website for our beloved fashion brand. This directly increases our sales revenue by 200%. Massive thank you!',
    avatar: '/avatar-ceo-everluxe.jpg',
    name: 'Linda',
    position: 'Everluxe CEO, Designer Fashion',
  },
  {
    companyLogo: '/channels4_profile.jpg',
    companyName: 'HolaYoga',
    content:
      'Thank you Lysa Digital for turning my business ideas into real website, and mobile apps. Your work is of incredibly high quality and speed. The apps enable our online Masterclass and subscription revenue, while allow me to focus on my business and do what I love: spreading yoga to the world 🧘‍♀️ ',
    avatar: '/avatar_CEO_holayoga.jpg',
    name: 'Lan Nguyen',
    position: 'CEO & Founder of HolaYoga (Australia & Vietnam)',
  },
  {
    companyLogo: '/client-bitatech-14.png',
    companyName: 'Cardina',
    content:
      'Our experience working with Lysa Digital has been exceptional. They understood our vision right from the start and delivered beyond our expectations. Their expertise in the e-Commerce industry, combined with their attention to detail and creative ideas, resulted in a stunning and user-friendly platform that perfectly represents our brand. Highly recommend Lysa Digital!',
    avatar: '/avatar_cmo_cardina.jpg',
    name: 'Tien Hoang',
    position: 'CMO & Product Manager of Cardina',
  }
];
</script>

<template>
  <!-- Testimonial section -->
  <section class="bg-gray-900">
    <div class="mx-auto max-w-7xl px-10">
      <Swiper
        :modules="[SwiperAutoplay, SwiperGrid]"
        :loop="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: true,
        }"
        :breakpoints="{
          320: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }"
      >
        <SwiperSlide
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="custom-swiper"
        >
          <div
            class="min-h-[450px] py-12 md:flex md:flex-col md:py-10 lg:px-10 shadow-lg hover:shadow-xl transform mx-auto md:mx-0 rounded-lg bg-white/5 ring-1 ring-white/10 sm:rounded-3xl px-6 pb-8"
          >
            <div class="md:flex-shrink-0">
              <img
                class="h-12 w-12 rounded-full lg:h-16 lg:w-16"
                :src="testimonial.companyLogo"
                :alt="testimonial.companyName"
              />
            </div>
            <blockquote class="mt-6 md:flex md:flex-grow md:flex-col">
              <div class="relative text-lg font-medium text-white md:flex-grow">
                <svg
                  class="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path
                    d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                  />
                </svg>
                <p class="relative">
                  {{ testimonial.content }}
                </p>
              </div>
              <footer class="mt-8">
                <div class="flex items-start">
                  <div
                    class="inline-flex flex-shrink-0 rounded-full border-2 border-white"
                  >
                    <img
                      class="object-cover h-16 w-16 rounded-full"
                      :src="testimonial.avatar"
                      :alt="testimonial.name"
                    />
                  </div>
                  <div class="ml-4">
                    <div class="text-base font-medium text-white">{{ testimonial.name }}</div>
                    <div class="text-base font-medium text-orange-400">
                      {{ testimonial.position }}
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style>
.swiper-pagination-bullet-active {
  background-color: #fb923c;
}
</style>