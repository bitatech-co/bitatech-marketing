<template>
  <div class="relative isolate bg-gray-900">
    <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <div
        class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48"
      >
        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <div
            class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2"
          >
            <svg
              class="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                  width="200"
                  height="200"
                  x="100%"
                  y="-1"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M130 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="100%" y="-1" class="overflow-visible fill-gray-800/20">
                <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
              </svg>
              <rect
                width="100%"
                height="100%"
                stroke-width="0"
                fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
              />
            </svg>
            <div
              class="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
              aria-hidden="true"
            >
              <div
                class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
                style="
                  clip-path: polygon(
                    74.1% 56.1%,
                    100% 38.6%,
                    97.5% 73.3%,
                    85.5% 100%,
                    80.7% 98.2%,
                    72.5% 67.7%,
                    60.2% 37.8%,
                    52.4% 32.2%,
                    47.5% 41.9%,
                    45.2% 65.8%,
                    27.5% 23.5%,
                    0.1% 35.4%,
                    17.9% 0.1%,
                    27.6% 23.5%,
                    76.1% 2.6%,
                    74.1% 56.1%
                  );
                "
              />
            </div>
          </div>
          <h2 class="text-3xl font-bold tracking-tight text-white">
            Get in touch
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            We partner with founders, startups, and enterprises to design and create MVP, products, and services following industry best practices
          </p>
          <dl class="mt-10 space-y-4 text-base leading-7 text-gray-300">
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Address</span>
                <BuildingOffice2Icon
                  class="h-7 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd>Hanoi Head Office<br />Dolphin Plaza, 6 Nguyen Hoang Street, My Dinh, Hanoi, Vietnam</dd>
              <dd>Sydney Office<br />125 Wardell Rd, Earlwood, NSW 2206, Australia</dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <PhoneIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
              </dt>
              <dd>
                <a class="hover:text-white" href="tel:+84-(0)9-6313-8192"
                  >+84-(0)9-6313-8192</a
                >
              </dd>
              || 
              <br />
              <dd>
                <a class="hover:text-white" href="tel:+61-4-4451-8693"
                  >+61-4-4451-8693</a
                >
              </dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Email</span>
                <EnvelopeIcon
                  class="h-7 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <a class="hover:text-white" href="mailto:hello@example.com"
                  >contact@bitatech.co</a
                >
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <form
        v-if="!sentContactUs"
        action="#"
        method="POST"
        class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
        @submit.prevent="submitForm"
      >
        <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                for="first_name"
                class="block text-sm font-semibold leading-6 text-white"
                >First name <span class="text-sm text-red-500">*</span></label
              >
              <div class="mt-2.5">
                <input
                  v-model="form.first_name"
                  type="text"
                  name="first_name"
                  id="first_name"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                for="last_name"
                class="block text-sm font-semibold leading-6 text-white"
                >Last name <span class="text-sm text-red-500">*</span></label
              >
              <div class="mt-2.5">
                <input
                  v-model="form.last_name"
                  type="text"
                  name="last_name"
                  id="last_name"
                  autocomplete="family-name"
                  class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="email"
                class="block text-sm font-semibold leading-6 text-white"
                >Email <span class="text-sm text-red-500">*</span></label
              >
              <div class="mt-2.5">
                <input
                  v-model="form.email"
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="email"
                  class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="phone_number"
                class="block text-sm font-semibold leading-6 text-white"
                >Phone number <span class="text-sm text-red-500">*</span></label
              >
              <div class="mt-2.5">
                <input
                  v-model="form.phone_number"
                  type="tel"
                  name="phone_number"
                  id="phone_number"
                  autocomplete="tel"
                  class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block text-sm font-semibold leading-6 text-white"
                >Message <i class="text-sm text-gray-400">(optional)</i></label
              >
              <div class="mt-2.5">
                <textarea
                  v-model="form.message"
                  name="message"
                  id="message"
                  rows="4"
                  class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <fieldset class="sm:col-span-2 my-2">
                <label
                  for="budget"
                  class="block text-sm font-semibold leading-6 text-white"
                  >Expected budget
                  <i class="text-sm text-gray-400">(optional)</i></label
                >
                <div class="mt-4 space-y-4 text-sm leading-6 text-gray-600">
                  <div class="flex gap-x-2.5">
                    <input
                      v-model="form.budget"
                      id="budget-under-25k"
                      name="budget"
                      value="under_25k"
                      type="radio"
                      class="mt-1 h-4 w-4 border-gray-300 text-orange-600 shadow-sm focus:ring-orange-400"
                    />
                    <label for="budget-under-25k">Less than $25K</label>
                  </div>
                  <div class="flex gap-x-2.5">
                    <input
                      v-model="form.budget"
                      id="budget-25k-50k"
                      name="budget"
                      value="25k-50k"
                      type="radio"
                      class="mt-1 h-4 w-4 border-gray-300 text-orange-600 shadow-sm focus:ring-orange-400"
                    />
                    <label for="budget-25k-50k">$25K – $50K</label>
                  </div>
                  <div class="flex gap-x-2.5">
                    <input
                      v-model="form.budget"
                      id="budget-50k-100k"
                      name="budget"
                      value="50k-100k"
                      type="radio"
                      class="mt-1 h-4 w-4 border-gray-300 text-orange-600 shadow-sm focus:ring-orange-400"
                    />
                    <label for="budget-50k-100k">$50K – $100K</label>
                  </div>
                  <div class="flex gap-x-2.5">
                    <input
                      v-model="form.budget"
                      id="budget-over-100k"
                      name="budget"
                      value="over_100k"
                      type="radio"
                      class="mt-1 h-4 w-4 border-gray-300 text-orange-600 shadow-sm focus:ring-orange-400"
                    />
                    <label for="budget-over-100k">$100K+</label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <div class="mt-8 flex justify-end">
            <button
              type="submit"
              class="inline-flex items-center text-black bg-gradient-to-r from-yellow-200 via-yellow-500 to-orange-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-400 shadow-lg shadow-orange-300/50 dark:shadow-lg dark:shadow-orange-400/80 font-medium rounded-lg text-xl px-10 py-2 text-center mr-2 mb-2"
              :disabled="validateForm"
            >
              <svg v-show="buttonLoading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Send message
            </button>
          </div>
        </div>
      </form>

      <div v-else class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
        <div class="flex">
          <div class="flex-shrink-0">
            <CheckCircleIcon class="h-5 w-5 text-orange-400" aria-hidden="true" />
          </div>
          <div class="ml-3">
            <h3 class="text-4xl font-medium text-orange-400">Speak soon!</h3>
            <div class="mt-2 text-lg leading-8 text-gray-300">
              <!-- <p class="mb-2">We've received your request and will call you back within 24 hours.</p> -->
              <p>Thanks for placing your trust in us. Our team will be in contact within 24 hours. We look forward to doing the work!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/vue/24/outline";

const WEB3FORMS_ACCESS_KEY = ref('fe5af922-43cd-461f-b512-acda2de64de5')

const buttonLoading = ref(false)

const sentContactUs = useCookie('sentContactUs', {
  default: () => false,
  maxAge: 30 * 60 * 60 * 24
})

const form = reactive({
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
  message: '',
  budget: ''
})

const validateForm = computed(() => {
  return !form.first_name || !form.last_name || !form.email || !form.phone_number || buttonLoading.value
})

const submitForm = async () => {
  if (validateForm.value) return
  buttonLoading.value = true
  
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY.value,
      name: form.first_name + form.last_name,
      email: form.email,
      phone: form.phone_number,
      message: form.message,
      budget: form.budget
    })
  })
  const result = await response.json();
  if (result.success) {
    buttonLoading.value = false
    sentContactUs.value = true
  }
}
</script>
