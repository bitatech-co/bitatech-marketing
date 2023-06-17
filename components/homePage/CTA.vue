<script lang="ts" setup>
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/20/solid";
</script>

<template>
  <div class="relative bg-gray-900">
    <div
      class="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2"
    >
      <img
        class="h-full w-full object-cover"
        src="/team-sales.jpg"
        alt="Contact us"
      />
      <div aria-hidden="true" class="absolute inset-0 mix-blend-multiply" />
    </div>
    <div
      class="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32"
    >
      <div class="md:ml-auto md:w-1/2 md:pl-10">
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Ready To Get Started?
        </p>
        <p class="mt-3 text-lg text-gray-300">
          Consistently recognized as one of Vietnam’s best software development
          companies with the proven success of over 5+ years with hundreds of
          customers globally. You can entrust us with your software development
          and outsourcing needs.
        </p>
        <div class="mt-8">
          <div class="inline-flex rounded-md shadow">
            <a
              href="mailto:contact@bitatech.co?subject=Contact to Bitatech Company"
              class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
            >
              Contact Us
              <ArrowTopRightOnSquareIcon
                class="-mr-1 ml-3 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
