
<script lang="ts" setup>
import {
  CubeIcon,
  CheckBadgeIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  RocketLaunchIcon
} from '@heroicons/vue/24/outline'

const features = [
{
    name: 'Digital Marketing',
    description: 'SEO. SEM. Performance Marketing. Content Marketing.',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Software Development',
    description: 'We’re building a new generation of innovative software companies.',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Mobile App Development',
    description: 'User-friendly and high-quality mobile apps for your clients.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'MVP Product Development',
    description: 'Full-scale engineering team to support the entire development or your team.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'AI Development',
    description: 'AI-enabled digital transformation.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Blockchain',
    description: 'NFTs, DEX, CEX, eWallet, ICO/IEO/STO, Smart Contracts.',
    icon: CubeIcon,
  }
]
</script>

<template>
  <section id="ourServices" class="relative bg-gray-900 py-16 sm:py-24 lg:py-32">
    <HomePageBackground />
    <div class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48" aria-hidden="true">
      <div class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)" />
    </div>
    
    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-3xl font-semibold text-white">OUR SERVICES</h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Global Software Consulting, Design and Development</p>
      <p class="mx-auto mt-5 max-w-prose text-xl text-gray-400">Our dedicated and highly experienced digital marketing specialist and engineering teams provide global businesses with full-stack solutions on multiple platforms and languages, always in a timely and cost-effective manner.</p>
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="pt-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 mx-auto md:mx-0">
            <div class="flow-root rounded-lg bg-white/5 ring-1 ring-white/10 sm:rounded-3xl px-6 pb-8 min-h-[280px]">
              <div class="-mt-6">
                <div>
                  <span class="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 p-3 shadow-lg">
                    <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <h3 class="mt-8 text-lg font-medium tracking-tight text-white">{{ feature.name }}</h3>
                <p class="mt-5 text-base text-gray-400">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
