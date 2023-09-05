<script lang="ts" setup>
import {
  CheckCircleIcon
} from '@heroicons/vue/20/solid'

const values = [
  {
    name: 'Customer: Our Purpose, Our Priority.',
    description:
      `We understand that customers are not only vital to our success but the heartbeat of our business. They are not dependent on us; we rely on them. They are not an interruption but the very purpose of our work. They are not outsiders; they are an integral part of who we are. Serving them is not a favour; it's an opportunity they graciously provide us.`,
  },
  {
    name: 'Harness the Power of Our Valuable Team.',
    description:
      `Every member's comment is valued, creating an open environment where ideas are amplified through discussion with our team leader and CTO. We trust and empower our team to freely express their unique strengths, fostering collaboration and innovation that drives exceptional results.`,
  },
  {
    name: 'Simplify Complex Challenges with our Expertise.',
    description:
      `Complexity doesn't scare us; it drives us. Our team thrives on simplifying the most intricate challenges, providing efficient and effective solutions. Leave the complexity to us while you focus on what you do best – running and growing your business.`,
  },
  {
    name: 'We Learn, So You Stay Ahead.',
    description:
      `Knowledge is power, and we never stop learning. Our commitment to continuous learning means you can trust us to stay at the forefront of industry trends and bring you cutting-edge solutions. With us, you'll always be one step ahead of the competition.`,
  },
  {
    name: 'From Customers to Trusted Friends.',
    description:
      `When you choose us, you're not just a customer; you become a part of our extended family. We prioritise building strong relationships based on trust, understanding, and collaboration. Our commitment extends beyond just our clients to include their end users – the ultimate beneficiaries of our product.`,
  },
  {
    name: 'Achieve More with Less Using Our Cost-Effective Solutions.',
    description:
      `When it comes to results, our costs are always a fraction of what you'd expect. Our efficient processes and carefully designed solutions ensure that you get maximum value for your investment. With us, your budget goes further, without compromising on quality.`,
  },
]

const benefits = [
  'Competitive salaries',
  'Flexible work hours',
  '30 days of paid vacation',
  'Annual team retreats',
  'Benefits for you and your family',
  'A great work environment'
]
</script>
<template>
  <div class="bg-gray-900 pb-20">
    <!-- Hero section -->
    <div class="relative isolate z-10">
      <svg class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-800 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" aria-hidden="true">
        <defs>
          <pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-gray-800">
          <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
        </svg>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
      </svg>
      <div class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48" aria-hidden="true">
        <div class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)" />
      </div>
      <div class="overflow-hidden">
        <div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
          <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Empower your business with our agile digital solution, tailored for startups and SMEs.</h1>
              <p class="relative mt-6 text-lg leading-8 text-gray-300 sm:max-w-md lg:max-w-none">We design and develop web and mobile applications for our clients worldwide, and prioritise exceptional user experiences.</p>
            </div>
            <div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div class="relative">
                  <img src="/about-us-1.jpg" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div class="relative">
                  <img src="/about-us-2.jpg" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div class="relative">
                  <img src="/about-us-3.jpg" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div class="relative">
                  <img src="/about-us-14.jpg" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div class="relative">
                  <img src="/about-us-10.jpg" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Values section -->
    <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our values</h2>
        <!-- <p class="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p> -->
      </div>
      <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div v-for="value in values" :key="value.name">
          <dt class="font-semibold text-white">{{ value.name }}</dt>
          <dd class="mt-1 text-gray-400">{{ value.description }}</dd>
        </div>
      </dl>
    </div>

    <!-- Content section -->
    <div class="mt-32 overflow-hidden sm:mt-40">
      <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our people</h2>
            <p class="mt-6 text-xl leading-8 text-gray-300">At Bitatech, we pride ourselves on creating a workplace that fosters respect, support, and a sense of belonging for all. We strongly believe in embracing individuality and encourage every person to be their authentic selves.</p>
            <p class="mt-6 text-base leading-7 text-gray-300">We value hard work, collaboration, and innovation, and we ensure that these qualities are recognized and rewarded. We understand that diverse teams bring together unique experiences and perspectives, which lead to greater creativity. And as a result, the software we create is more useful and accessible to a wider range of people.</p>
          </div>
          <div class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img src="/about-us-11.jpg" alt="" class="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover" />
            </div>
            <div class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div class="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img src="/about-us-13.jpg" alt="" class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
              </div>
              <div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img src="/about-us-8.jpg" alt="" class="aspect-[7/5] w-[30rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
              </div>
              <div class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img src="/about-us-7.jpg" alt="" class="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA section -->
    <section id="careers" class="relative isolat mt-32 sm:mt-40">
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
          <img class="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm" src="/teambuilding-bitatech.jpeg" alt="" />
          <div class="w-full flex-auto">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join our team</h2>
            <p class="mt-6 text-lg leading-8 text-gray-300">We’re changing the way people work hard</p>
            <ul role="list" class="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2">
              <li v-for="benefit in benefits" :key="benefit" class="flex gap-x-3">
                <CheckCircleIcon class="h-7 w-5 flex-none" aria-hidden="true" />
                {{ benefit }}
              </li>
            </ul>
            <div class="mt-10 flex">
              <a href="mailto:contact@bitatech.co" class="text-sm font-semibold leading-6 bg-gradient-to-r from-yellow-200 to-orange-400 bg-clip-text pb-3 text-transparent">Contact Us <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl" aria-hidden="true">
        <div class="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25" style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)" />
      </div>
    </section>
  </div>
</template>