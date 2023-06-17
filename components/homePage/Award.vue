
<script lang="ts" setup>
const awards = [
  {
    name: 'Sao Khue',
    image: '/award-1.png',
  },
  {
    name: 'Top softwawre',
    image: '/top-50.jpeg',
  }
]
</script>

<template>
  <!-- award -->
  <div class="bg-white">
    <!-- Header -->
    <div class="relative bg-gray-800">
      <div class="absolute inset-0">
        <img class="h-full w-full object-cover" src="/banner-award.jpeg" alt="" />
        <div class="absolute inset-0 bg-gray-500 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div class="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <!-- <p class="mb-6 max-w-3xl text-xl text-yellow-500">SAO KHUE AWARD</p> -->
        <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          <h1 class="col-span-2 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">Leading Software Development Company</h1>
          <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">
            <div v-for="award in awards" :key="award.name" class="flex flex-col rounded-2xl bg-white shadow-xl">
              <div class="relative flex-1">
                <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
                  <div class="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                    <img v-if="award.image === '/award-1.png'" class="object-cover lg:h-full lg:w-full" src="/award-1.png" alt="" />
                    <img v-else class="object-contain lg:h-full lg:w-full" src="/top-50.jpeg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
