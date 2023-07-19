<template>
  <ul role="list" class="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
    <li v-for="tech in techStacks" :key="tech.id" class="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div class="flex items-center gap-x-4 border-b border-gray-900/5 bg-white p-6">
        <img :src="tech.imageUrl" :alt="tech.name" class="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10" />
        <div class="text-md font-bold leading-6 text-gray-900">{{ tech.name }}</div>
      </div>
      <dl class="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
        <div class="flex justify-between gap-x-4 py-3">
          <p v-html="tech.description"></p>
        </div>
      </dl>
    </li>
  </ul>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { EllipsisHorizontalIcon } from '@heroicons/vue/20/solid'

const statuses = {
  Paid: 'text-green-700 bg-green-50 ring-green-600/20',
  Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
}
const techStacks = [
  {
    id: 1,
    name: 'iOS Development',
    imageUrl: '/apple.png',
    description: `The business scale rate for the mobile market takes 11.6% yearly.</br></br>
    iOS platform takes 30% of the world's market, and 80% of in-app purchases in comparison with the Android platform. That’s where we are sure your idea should have a place too.
    </br></br> Wanna know details about our iOS technologies?`,
  },
  {
    id: 2,
    name: 'Android Development',
    imageUrl: '/android.png',
    description: `The business scale rate for the mobile market takes 11.6% yearly.
    </br></br>
    The android platform takes 70% of the world's market and that’s a place you definitely would want to be.
    </br></br>
    That’s where we are sure your idea should have a place too.
    </br></br>
    Want to know more about our Android technologies?`,
  },
  {
    id: 3,
    name: 'Web Development',
    imageUrl: '/www.png',
    description: `Some systems don’t need mobile apps. Some need a complicated CRM, office managers employees, etc.
    </br></br>
    i.e. making trading easy and simply trackable on the web or desktop is way simpler than on the mobile phone, isn’t it?
    </br></br>
    Wanna know more details about our web technologies?`,
  },
]
</script>