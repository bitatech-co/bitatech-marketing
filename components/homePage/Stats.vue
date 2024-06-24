<script lang="ts" setup>
import {
  CheckBadgeIcon,
  MapPinIcon,
  UserGroupIcon,
  CodeBracketIcon
} from '@heroicons/vue/24/outline'

interface Props {
  numberClient: string | number
}

const props = withDefaults(defineProps<Props>(), {
  numberClient: 50
})

const stats = [
  { id: 1, name: 'COUNTRIES', stat: '8', icon: MapPinIcon },
  { id: 2, name: 'CUSTOMERS', stat: `${props.numberClient}+`, icon: UserGroupIcon },
  { id: 3, name: 'SUCCESSFUL PROJECTS', stat: '90+', icon: CheckBadgeIcon },
]
</script>

<template>
  <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl">
    <!-- <dl class="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <div v-for="item in stats" :key="item.id" class="relative overflow-hidden rounded-lg bg-gray-900 px-4 pt-5 pb-0 shadow sm:px-6 sm:pt-6">
        <dt>
          <div class="absolute rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 p-3">
            <component :is="item.icon" class="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <p class="ml-16 truncate text-sm font-medium text-gray-900">{{ item.name }}</p>
        </dt>
        <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
          <p class="text-2xl font-semibold text-orange-500">{{ item.stat }}</p>
        </dd>
      </div>
    </dl> -->

    <dl class="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-3">
      <div v-for="(stat, statIdx) in stats" :key="statIdx" class="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
        <dt class="text-base leading-7 text-gray-300">{{ stat.name }}</dt>
        <dd class="text-3xl font-semibold tracking-tight text-white">{{ stat.stat }}</dd>
      </div>
    </dl>
  </div>
</template>
