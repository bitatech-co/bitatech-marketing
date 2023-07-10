
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
    name: 'Software Development',
    description: 'We’re building a new generation of innovative software companies.',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Mobile App Development',
    description: 'As a leading mobile app development company, we have years of experience creating innovative, high-quality applications for our clients.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'DevOps Solutions',
    description:
      'Boost efficiency and minimize costs with the help of our DevOps experts.',
    icon: CloudIcon,
  },
  {
    name: 'MVP Product Development',
    description: 'Bitatech Technology can provide a full-scale team to support the entire development lifecycle or fill the gaps in your MVP team. No matter your needs, we follow our proven methodology for ensuring quality and success for your minimum viable product (MVP).',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Software Testing',
    description: 'Increase the speed, accuracy, and security of your QA and software testing with comprehensive services that deliver better products for your end users.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Blockchain',
    description: 'We provide NFTs, DEX, CEX, eWallet Development, ICO/IEO/STO, Smart Contracts Development to effortlessly leverage Blockchain solutions.',
    icon: CubeIcon,
  }
]
</script>

<template>
  <section id="ourServices" class="relative bg-white py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-lg font-semibold text-cyan-600">OUR SERVICES</h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Global Software Consulting, Design and Development</p>
      <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">Our dedicated and highly experienced engineering teams provide global businesses with full-stack solutions on multiple platforms and languages, always in a timely and cost-effective manner.</p>
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="pt-6">
            <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
              <div class="-mt-6">
                <div>
                  <span class="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 p-3 shadow-lg">
                    <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <h3 class="mt-8 text-lg font-medium tracking-tight text-gray-900">{{ feature.name }}</h3>
                <p class="mt-5 text-base text-gray-500">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
