<template>
  <div class="bg-gray-50">
    <div class="mx-auto max-w-5xl py-20">
      <div class="text-center">
        <h1 class="text-6xl font-bold text-gray-900 pb-12">
          Startup Services for app ideas
        </h1>
        <p class="text-2xl mb-12">
          Tired of tonnes of calls in a search of the best budget for your startup idea? We’ve prepared startup services: Clickable Prototypes, UI/UX Design, Custom MVP App Development, and more.
        </p>
      </div>
      <div class="overflow-hidden bg-white shadow sm:rounded-lg mb-12 p-6" v-for="service, idx in services" :key="idx">
        <div class="relative flex items-center gap-x-4 px-6 pt-6">
          <img :src="service.image" alt="" class="h-20 w-20 rounded-full bg-gray-50" />
          <div class="text-sm leading-6">
            <h3 class="text-4xl font-bold text-gray-900">{{ service.title }}</h3>
          </div>
        </div>
        <div class="px-4 py-6 sm:px-6">
          <p class="mt-1 text-sm leading-6 text-gray-700" v-html="service.description"></p>
        </div>
        <div class="border-t border-gray-100">
          <dl class="divide-y divide-gray-100">
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" v-for="item,index in service.items" :key="item.label+index">
              <dt class="text-sm font-medium text-gray-900">{{ (Number(index) + 1) }}. {{ item.label }}</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ item.value }}</dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium leading-6 text-gray-900">
                <button type="button" class="text-black bg-gradient-to-r from-yellow-200 via-yellow-500 to-orange-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-400 shadow-lg shadow-orange-300/50 dark:shadow-lg dark:shadow-orange-400/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2">Order Package</button>
              </dt>
              <dd class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0 text-right">
                <i>
                  Package price:
                </i>
                <p class="text-4xl font-bold mt-2 bg-gradient-to-r from-yellow-200 to-orange-400 bg-clip-text pb-3 text-transparent">{{ service.price }}</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <ProductsTechStack />
    </div>
  </div>
</template>

<script setup>
import { PaperClipIcon } from '@heroicons/vue/20/solid'

const services = [
  {
    title: '“I Need Funding” package"',
    image: '/fun.webp',
    description: 'Originally, any startup has a choice between low-quality apps or moving in a smooth and lean manner. That’s what will work the best for you. One of the most popular package in our startup services gives you all the required assets to start getting trackable audience interest and present this idea to your investor before digging into the Custom MVP app development. <strong>The only extra point you would need is just a Pitch Deck.</strong>',
    items: [
      {
        label: 'Competitors Research',
        value: 'This will give us an understanding of where your place in the niche could be and brainstorm why you are better and worth funding.'
      },
      {
        label: 'Moodboard',
        value: 'Based on your market research, we will present you with several visualizations to move forward with.'
      },
      {
        label: 'Concept Design with basic UX',
        value: 'Everyone loves with eyes. That’s why you need a cool design at the very beginning.'
      },
      {
        label: 'Clickable Prototype',
        value: 'Here we will make your design alive. So, investors, partners, or customers would be able to feel the user flow of our app and the result they are getting even before your custom MVP app gets live.'
      },
      {
        label: 'Landing Page',
        value: `With a help of a landing page, we would be able to present your startup idea with a concept design. So, that’s would be your product's business card. What's more, you would be able to use later on, even after your Custom MVP app will be developed and launched.`
      }
    ],
    price: `$1'500 - $4'500`
  },
  {
    title: '“PreDevelopment” package',
    image: '/prdv.webp',
    description: `You can not be sure about the detailed scope of work, right? Based on this you need the Investigation stage. But, as a rule, just investigation is not enough. We are sure that with this package you and your investors will get answers on: "How your custom app will look?", "How your custom MVP app will behave?", "What market you are going to get to with such a cool custom MVP app?", and "What competitors your custom mobile app will face with?"`,
    items: [
      {
        label: 'Investigation Stage',
        value: 'Here, we will research your competitors, and sort out the tech stack that is needed for the app with required libraries, modules, and architectures.'
      },
      {
        label: 'Moodboard',
        value: 'Based on your market research, we will present you with several visualizations to move forward with.'
      },
      {
        label: 'UX design',
        value: 'Here we will create a User Experience Map with all small details.'
      },
      {
        label: 'UI design',
        value: 'We will make your User Experience sexy.'
      },
      {
        label: 'Clickable Prototype',
        value: `Here we will make your design alive. So, investors, partners, or customers would be able to feel the user flow of our app and the result they are getting even before your custom MVP app gets live.`
      },
      {
        label: 'ASO pics',
        value: `Here, we will prepare the pictures for AppStore, and GooglePlay (mobile app related only)`
      }
    ],
    price: `$4'000 - $7'000`
  },
  {
    title: '“MVP App Development” package',
    image: '/mvp.webp',
    description: `This package works best if you have the design ready and you are sure there is a demand on the market. The main aim of any Custom MVP app is to start getting the first users and work with them based on your KPIs. Originally, the Custom MVP app Development package in our startup services includes:`,
    items: [
      {
        label: 'Custom MVP App Development with a Single Platform',
        value: `You would always want to save your funds. Based on this, the wise solution is to target on a single platform based on your targeting audience. In this case, you would be able to show great value with your Custom MVP app. Your investors and end-users would love your Custom Mobile App or Custom Web App. Everything both will ask you for is to work on another platform. So, that's could be Custom iOS App Development, Custom Android App Development, or Custom Web App Development.`
      },
      {
        label: 'Main feature targeting',
        value: 'All Custom Apps are split into “pain killers” and “vitamins” and that’s where we will be targeting on. In your Custom MVP app, your main feature is your main value. The aim is not to give users everything or a lot, the aim is to solve their main problem.'
      },
      {
        label: 'Monetization feature',
        value: 'Like in any custom commercial app - its building aims to generate profit. That’s could be subscription, membership-based, one-time purchase, commission-based, etc.'
      },
      {
        label: 'Authorization & Tracking features',
        value: 'Any collected data has the only aim - get to bigger income with what you have. With such data, you can work on outreach, building customer avatar, etc. But the main here is traction data that you would be able to show to your investors.'
      },
      {
        label: 'Publishing',
        value: `Simply go live with your Custom Mobile App on App Store, or Google Play, or make your Custom Web App available to the public.`
      }
    ],
    price: `$8'000 - $15'000`
  },
  {
    title: '“Custom App Development” package',
    image: '/csdv.webp',
    description: `Quite often single platform is not enough, or it has a specific flow or specific business aim. In this case, you might need extra features, specific features, and extra platforms like Custom IoT app Development. In this case, you would need much more attention, and a bigger team to work on all these. In terms of the Custom app Development package in our startups services, we are providing you with:`,
    items: [
      {
        label: 'Custom iOS App Development',
        value: ``
      },
      {
        label: 'Custom Android App Development',
        value: ''
      },
      {
        label: 'Custom Web App Development',
        value: ''
      },
      {
        label: 'Alpha / Beta testing',
        value: ''
      }
    ],
    price: `$15'000+`
  }
]
</script>