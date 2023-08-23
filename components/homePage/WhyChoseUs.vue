
<script lang="ts" setup>
interface Props {
  numberClient: string | number
}

const props = withDefaults(defineProps<Props>(), {
  numberClient: 50
})

const whyUs = [
  {
    name: 'Proven Software Success',
    role: '',
    imageUrl: '/why-bitatech-icon-1.svg',
    bio: `We’ve served over ${props.numberClient} clients and also develop our own in-house software, which sets us apart from the rest.`,
  },
  {
    name: 'Develop Innovative Solutions',
    role: '',
    imageUrl: '/why-bitatech-icon-2.svg',
    bio: 'Bring your software visions to life by leveraging both proven and cutting-edge technologies.',
  },
  {
    name: 'Accelerate Speed to Market',
    role: '',
    imageUrl: '/why-bitatech-icon-3.svg',
    bio: 'Achieve complete CICD, continuous integration and continuous delivery, to outpace your competitors with shorter time to market.',
  },
  {
    name: 'Expand Your Team Capacity',
    role: '',
    imageUrl: '/why-bitatech-icon-4.svg',
    bio: 'Fill your talent gaps and raise your team’s standard with our senior and expert-level engineers.',
  }
]
</script>


<template>
  <div class="bg-gray-900">
    <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-10">
      <div class="space-y-12">
        <h2 class="text-white text-3xl font-bold tracking-tight sm:text-4xl sm:w-full lg:w-2/3 mb-16">Why Businesses Choose <span class="text-yellow-500">Bitatech</span> for Software Development & Consulting</h2>
       
        <ul role="list" class="space-y-20 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-20 lg:space-y-0">
          <li v-for="reason in whyUs" :key="reason.name">
            <div class="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
              <div class="flex items-center justify-center">
                <img v-if="reason.imageUrl === '/why-bitatech-icon-1.svg'" class="rounded-lg object-cover" src="/why-bitatech-icon-1.svg" alt="" />
                <img v-else-if="reason.imageUrl === '/why-bitatech-icon-2.svg'" class="rounded-lg object-cover" src="/why-bitatech-icon-2.svg" alt="" />
                <img v-else-if="reason.imageUrl === '/why-bitatech-icon-3.svg'" class="rounded-lg object-cover" src="/why-bitatech-icon-3.svg" alt="" />
                <img v-else class="rounded-lg object-cover" src="/why-bitatech-icon-4.svg" alt="" />

              </div>
              <div class="sm:col-span-2">
                <div class="space-y-4">
                  <div class="space-y-1 text-lg font-medium leading-6">
                    <h3 class="text-orange-500 text-center lg:text-left text-2xl">{{ reason.name }}</h3>
                    <p class="text-indigo-600 sm:text-center lg:text-left">{{ reason.role }}</p>
                  </div>
                  <div class="text-lg">
                    <p class="text-gray-300 text-center lg:text-left">{{ reason.bio }}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
