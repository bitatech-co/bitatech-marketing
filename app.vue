
<template>
  <div class="bg-white">
    <div class="relative overflow-hidden">
      <Popover as="header" class="relative">
        <div class="bg-gray-900 pt-6">
          <nav class="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6" aria-label="Global">
            <div class="flex flex-1 items-center">
              <div class="flex w-full items-center justify-between md:w-auto">
                <a href="#">
                  <span class="sr-only">Your Company</span>
                  <img class="h-8 w-auto sm:h-10" src="/logo-bitatech-2.png" />
                  <!-- <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/mark.svg?from-color=teal&from-shade=200&to-color=cyan&to-shade=400&toShade=400" alt="" /> -->
                </a>
                <div class="-mr-2 flex items-center md:hidden">
                  <PopoverButton class="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="hidden space-x-8 md:ml-10 md:flex">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-base font-medium text-white hover:text-gray-300">{{ item.name }}</a>
              </div>
            </div>
            <div class="hidden md:flex md:items-center md:space-x-6">
              <!-- <a href="#" class="text-base font-medium text-white hover:text-gray-300">Log in</a> -->
              <a href="#" class="inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-base font-medium text-white hover:bg-gray-700">Contact Us</a>
            </div>
          </nav>
        </div>

        <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
          <PopoverPanel focus class="absolute inset-x-0 top-0 origin-top transform p-2 transition md:hidden">
            <div class="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
              <div class="flex items-center justify-between px-5 pt-4">
                <div>
                  <img class="h-8 w-auto" src="/logo-bitatech-2.png" alt="" />
                </div>
                <div class="-mr-2">
                  <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="pt-5 pb-6">
                <div class="space-y-1 px-2">
                  <a v-for="item in navigation" :key="item.name" :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
                </div>
                <div class="mt-6 px-5">
                  <a href="#" class="block w-full rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 text-center font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700">Contact Us</a>
                </div>
                <div class="mt-6 px-5">
                  <!-- <p class="text-center text-base font-medium text-gray-500">Existing customer? <a href="#" class="text-gray-900 hover:underline">Login</a></p> -->
                </div>
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>
      <main>
        <div class="bg-gray-900 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
          <div class="mx-auto max-w-7xl lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:gap-8">
              <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                <div class="lg:py-24">
                  <!-- <a href="#" class="inline-flex items-center rounded-full bg-black p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base">
                    <span class="rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 px-3 py-0.5 text-sm font-semibold leading-5 text-white">We're hiring</span>
                    <span class="ml-4 text-sm">Visit our careers page</span>
                    <ChevronRightIcon class="ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                  </a> -->
                  <h1 class="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span class="block">Web & Mobile App, SaaS, Web3 Studio</span>
                    <span class="block bg-gradient-to-r from-yellow-200 to-orange-400 bg-clip-text pb-3 text-transparent sm:pb-5">Development Company</span>
                  </h1>
                  <p class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">We partner with founders, startups, and enterprises to design and create MVP, products, and services following industry best practices.</p>
                  <!-- <div class="mt-10 sm:mt-12">
                    <form action="#" class="sm:mx-auto sm:max-w-xl lg:mx-0">
                      <div class="sm:flex">
                        <div class="min-w-0 flex-1">
                          <label for="email" class="sr-only">Email address</label>
                          <input id="email" type="email" placeholder="Enter your email" class="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900" />
                        </div>
                        <div class="mt-3 sm:mt-0 sm:ml-3">
                          <button type="submit" class="block w-full rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900">Contact Us</button>
                        </div>
                      </div>
                      <p class="mt-3 text-sm text-gray-300 sm:mt-4">Start your free 14-day trial, no credit card necessary. By providing your email, you agree to our <a href="#" class="font-medium text-white">terms of service</a>.</p>
                    </form>
                  </div> -->
                </div>
              </div>
              <div class="mt-12 sm:-mb-48 lg:relative lg:m-0">
                <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
                  <img class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="/banner-finaly.png" alt="" style="width: 100%; height: 100%; object-fit: contain;"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Top award -->
        <div class="bg-indigo-200 bg-opacity-25">
          <div class="mx-auto max-w-7xl py-10 px-4 sm:py-12 sm:px-6 lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:gap-8">
              <h2 class="mx-auto max-w-md text-center text-3xl font-bold tracking-tight text-indigo-900 lg:max-w-xl lg:text-left">TRUSTED BY STARTUPS AND FORTUNE 200 COMPANIES</h2>
              <div class="mt-8 flow-root self-center lg:mt-0">
                <div class="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
                  <div class="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                    <img class="h-12" src="/client-bitatech-2.jpeg" alt="Macdonald's" />
                  </div>
                  <div class="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                    <img class="h-12" src="/client-bitatech-3.jpeg" alt="ANZ" />
                  </div>
                  <div class="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                    <img class="h-12" src="/client-bitatech-6.png" alt="notionAI" />
                  </div>
                  <div class="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                    <img class="h-12" src="/client-bitatech-5.jpeg" alt="adash" />
                  </div>
                  <div class="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                    <img class="h-12" src="/client-bitatech-8.png" alt="AJobThing" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Why chose us -->
        <div class="bg-white">
          <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-10">
            <div class="space-y-12">
              <h2 class="text-3xl font-bold tracking-tight sm:text-4xl sm:w-full lg:w-2/3 mb-16">Why Businesses Choose <span class="text-yellow-500">Bitatech</span> for Software Engineering & Consulting</h2>

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
                          <p class="text-gray-500 text-center lg:text-left">{{ reason.bio }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <!-- Stas -->
        <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl">
          <dl class="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="item in stats" :key="item.id" class="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-0 shadow sm:px-6 sm:pt-6">
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
          </dl>
        </div>

        

        <!-- Feature section with screenshot -->
        <!-- <div class="relative bg-gray-50 pt-16 sm:pt-24 lg:pt-32">
          <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div>
              <h2 class="text-lg font-semibold text-cyan-600">Serverless</h2>
              <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">No server? No problem.</p>
              <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.</p>
            </div>
            <div class="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
              <img class="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5" src="https://tailwindui.com/img/component-images/green-project-app-screenshot.jpg" alt="" />
            </div>
          </div>
        </div> -->

        <!-- Feature section with grid -->
        <div class="relative bg-white py-16 sm:py-24 lg:py-32">
          <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="text-lg font-semibold text-cyan-600">OUR SERVICES</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Global SDaaS / Blockchain & IT Consulting</p>
            <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">Our dedicated and highly professional team strives to provide our global clients with full-stack solutions by multiple platforms, languages in a timely manner.</p>
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
        </div>

        <!-- Testimonial section -->
        <section class="bg-gray-500">
          <div class="mx-auto max-w-7xl md:grid md:grid-cols-2 md:px-6 lg:px-8">
            <div class="py-12 px-6 md:flex md:flex-col md:border-r md:border-gray-500 md:py-16 md:pl-0 md:pr-10 lg:pr-16">
              <div class="md:flex-shrink-0">
                <img class="h-20 w-20 rounded-full lg:h-24 lg:w-24" src="/client-bitatech-6.png" alt="" />
              </div>
              <blockquote class="mt-6 md:flex md:flex-grow md:flex-col">
                <div class="relative text-lg font-medium text-white md:flex-grow">
                  <svg class="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p class="relative">Bitatech is an external software services provider but their way of working will make you feel like you have a bigger in-house engineering team!”</p>
                </div>
                <footer class="mt-8">
                  <div class="flex items-start">
                    <div class="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                      <img class="h-12 w-12 rounded-full" src="/avatar-vp.png" alt="" />
                    </div>
                    <div class="ml-4">
                      <div class="text-base font-medium text-white">Vinesh</div>
                      <div class="text-base font-medium text-indigo-200">CEO, notionAI</div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
            <div class="border-t-2 border-gray-500 py-12 px-6 md:border-t-0 md:border-l md:py-16 md:pr-0 md:pl-10 lg:pl-16">
              <div class="md:flex-shrink-0">
                <img class="h-20 w-20 rounded-full lg:h-24 lg:w-24" src="/client-bitatech-9.png" alt="" />
              </div>
              <blockquote class="mt-6 md:flex md:flex-grow md:flex-col">
                <div class="relative text-lg font-medium text-white md:flex-grow">
                  <svg class="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-400" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p class="relative">The excellent engineering team at Bitatech helped us build a performant and beautiful e-commerce website for our beloved fashion brand. This directly increases our sales revenue by 200%. Massive thank you!</p>
                </div>
                <footer class="mt-8">
                  <div class="flex items-start">
                    <div class="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                      <img class="h-12 w-12 rounded-full" src="/avatar-ceo-everluxe.jpg" alt="" />
                    </div>
                    <div class="ml-4">
                      <div class="text-base font-medium text-white">Linda</div>
                      <div class="text-base font-medium text-indigo-200">Everluxe CEO, Designer Fashion</div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
       
        <!-- Our Client -->
        <div class="bg-white">
          <div class="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
            <div class="space-y-8 sm:space-y-12">
              <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Our Clients</h2>
                <p class="text-xl text-gray-500">Proudly partnered with 160+ clients from diverse industries including Banking & Finance, Automotive, Retail, Health Care, Education, Media & Entertainment</p>
              </div>
              <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
                <li v-for="client in Clients" :key="client.name">
                  <div class="space-y-4">
                    <img v-if="client.imageUrl === '/client-bitatech-1.jpeg'" class="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24" src="/client-bitatech-1.jpeg" alt="" />
                    <img v-else-if="client.imageUrl === '/client-bitatech-2.jpeg'" class="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24" src="/client-bitatech-2.jpeg" alt="" />
                    <img v-else-if="client.imageUrl === '/client-bitatech-3.jpeg'" class="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24" src="/client-bitatech-3.jpeg" alt="" />
                    <img v-else-if="client.imageUrl === '/client-bitatech-4.jpeg'" class="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24" src="/client-bitatech-4.jpeg" alt="" />
                    <img v-else-if="client.imageUrl === '/client-bitatech-5.jpeg'" class="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24" src="/client-bitatech-5.jpeg" alt="" />
                    <img v-else-if="client.imageUrl === '/client-bitatech-6.png'" class="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24" src="/client-bitatech-6.png" alt="" />
                    <img v-else-if="client.imageUrl === '/client-bitatech-7.svg'" class="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24" src="/client-bitatech-7.svg" alt="" />
                    <img v-else-if="client.imageUrl === '/client-bitatech-8.png'" class="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24" src="/client-bitatech-8.png" alt="" />
                    <img v-else-if="client.imageUrl === '/client-bitatech-9.png'" class="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24" src="/client-bitatech-9.png" alt="" />
                    <img v-else-if="client.imageUrl === '/client-bitatech-10.jpeg'" class="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24" src="/client-bitatech-10.jpeg" alt="" />
                    <img v-else-if="client.imageUrl === '/client-bitatech-11.jpeg'" class="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24" src="/client-bitatech-11.jpeg" alt="" />
                    <img v-else class="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24" src="/client-bitatech-12.jpeg" alt="" />
                    
                    <div class="space-y-2">
                      <div class="text-xs font-medium lg:text-sm">
                        <!-- <h3>{{ client.name }}</h3> -->
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- award -->
        <div class="bg-white">
          <!-- Header -->
          <div class="relative bg-gray-800 pb-32">
            <div class="absolute inset-0">
              <img class="h-full w-full object-cover" src="/banner-award.jpeg" alt="" />
              <div class="absolute inset-0 bg-gray-500 mix-blend-multiply" aria-hidden="true" />
            </div>
            <div class="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
              <!-- <p class="mb-6 max-w-3xl text-xl text-yellow-500">SAO KHUE AWARD</p> -->
              <h1 class="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">2020 & 2022 Leading Software Development Company</h1>
            </div>
          </div>

          <!-- Overlapping cards -->
          <section class="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
            <h2 class="sr-only" id="contact-heading">SAO KHUE AWARD</h2>
            <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
              <div v-for="award in awards" :key="award.name" class="flex flex-col rounded-2xl bg-white shadow-xl">
                <div class="relative flex-1">
                  <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
                    <div class="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                      <img v-if="award.image === '/award-1.png'" class="object-cover lg:h-full lg:w-full" src="/award-1.png" alt="" />
                      <img v-else-if="award.image === '/award-4.webp'" class="object-cover lg:h-full lg:w-full" src="/award-4.webp" alt="" />
                      <img v-else class="object-cover lg:h-full lg:w-full" src="/award-3.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- Blog section -->
        <!-- <div class="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
          <div class="relative">
            <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 class="text-lg font-semibold text-cyan-600">Learn</h2>
              <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Helpful Resources</p>
              <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.</p>
            </div>
            <div class="mx-auto mt-12 grid max-w-md gap-8 px-4 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:px-8">
              <div v-for="post in blogPosts" :key="post.id" class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="flex-shrink-0">
                  <img class="h-48 w-full object-cover" :src="post.imageUrl" alt="" />
                </div>
                <div class="flex flex-1 flex-col justify-between bg-white p-6">
                  <div class="flex-1">
                    <p class="text-sm font-medium text-cyan-600">
                      <a :href="post.category.href" class="hover:underline">{{ post.category.name }}</a>
                    </p>
                    <a :href="post.href" class="mt-2 block">
                      <p class="text-xl font-semibold text-gray-900">{{ post.title }}</p>
                      <p class="mt-3 text-base text-gray-500">{{ post.preview }}</p>
                    </a>
                  </div>
                  <div class="mt-6 flex items-center">
                    <div class="flex-shrink-0">
                      <a :href="post.author.href">
                        <img class="h-10 w-10 rounded-full" :src="post.author.imageUrl" :alt="post.author.name" />
                      </a>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-900">
                        <a :href="post.author.href" class="hover:underline">{{ post.author.name }}</a>
                      </p>
                      <div class="flex space-x-1 text-sm text-gray-500">
                        <time :datetime="post.datetime">{{ post.date }}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{{ post.readingLength }} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->

        <div class="bg-white">
          <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-10 lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
              <div>
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Awards & Recognitions</h2>
                <p class="mt-3 max-w-3xl text-lg text-gray-500">Take a glance at our Awards & Recognitions. This is how we made success stories for over 5+ years with our market-leading digitally advanced software solutions.</p>
                <div class="mt-8 sm:flex">
                  <!-- <div class="rounded-md shadow">
                    <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700">Create Account</a>
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-5 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200">Contact Us</a>
                  </div> -->
                </div>
              </div>
              <div class="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                <div class="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                  <img class="max-h-36" src="/award1.png" alt="award 1" />
                </div>
                <div class="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                  <img class="max-h-36" src="/award2.png" alt="award 2" />
                </div>
                <div class="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                  <img class="max-h-36" src="/award3.png" alt="award 3" />
                </div>
                <div class="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                  <img class="max-h-36" src="/award4.jpeg" alt="award 4" />
                </div>
                <div class="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                  <img class="max-h-36" src="/award5.jpeg" alt="award 5" />
                </div>
                <div class="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                  <img class="max-h-36" src="/award6.webp" alt="award 6" />
                </div>
              </div>
            </div>
          </div>
        </div>


        <!-- CTA Section -->
        <div class="relative bg-gray-900">
          <div class="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
            <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100" alt="" />
            <div aria-hidden="true" class="absolute inset-0 bg-gradient-to-r from-yellow-200 to-orange-400 mix-blend-multiply" />
          </div>
          <div class="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
            <div class="md:ml-auto md:w-1/2 md:pl-10">
              <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready To Get Started?</p>
              <p class="mt-3 text-lg text-gray-300">Consistently recognized as one of India’s best software development companies with the proven success of over 5+ years with hundreds of customers globally. You can entrust us with your software development and outsourcing needs.</p>
              <div class="mt-8">
                <div class="inline-flex rounded-md shadow">
                  <a href="#" class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50">
                    Contact Us
                    <ArrowTopRightOnSquareIcon class="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
      <footer class="bg-gray-50" aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="sr-only">Footer</h2>
        <div class="mx-auto max-w-md px-4 pt-12 sm:max-w-7xl sm:px-6 lg:px-8 lg:pt-16">
          <div class="xl:grid xl:grid-cols-3 xl:gap-8">
            <div class="space-y-8 xl:col-span-1">
              <!-- <img class="h-10" src="https://tailwindui.com/img/logos/mark.svg?color=gray&shade=300" alt="Company name" /> -->
              <img class="h-10" src="/logo-bitatech-2.png" alt="Bitatech"/>
              <p class="text-base text-gray-500">We partner with founders, startups, and enterprises to design and create MVP, products, and services following industry best practices</p>
              <div class="flex space-x-6">
                <a v-for="item in footerNavigation.social" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-500">
                  <span class="sr-only">{{ item.name }}</span>
                  <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                </a>
              </div>
            </div>
            <!-- <div class="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div class="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 class="text-base font-medium text-gray-900">Solutions</h3>
                  <ul role="list" class="mt-4 space-y-4">
                    <li v-for="item in footerNavigation.solutions" :key="item.name">
                      <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">{{ item.name }}</a>
                    </li>
                  </ul>
                </div>
                <div class="mt-12 md:mt-0">
                  <h3 class="text-base font-medium text-gray-900">Support</h3>
                  <ul role="list" class="mt-4 space-y-4">
                    <li v-for="item in footerNavigation.support" :key="item.name">
                      <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">{{ item.name }}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 class="text-base font-medium text-gray-900">Company</h3>
                  <ul role="list" class="mt-4 space-y-4">
                    <li v-for="item in footerNavigation.company" :key="item.name">
                      <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">{{ item.name }}</a>
                    </li>
                  </ul>
                </div>
                <div class="mt-12 md:mt-0">
                  <h3 class="text-base font-medium text-gray-900">Legal</h3>
                  <ul role="list" class="mt-4 space-y-4">
                    <li v-for="item in footerNavigation.legal" :key="item.name">
                      <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">{{ item.name }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> -->
          </div>
          <div class="mt-12 border-t border-gray-200 py-8">
            <p class="text-base text-gray-400 xl:text-center">&copy; 2023 Bitatech, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, h } from 'vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import {
  ArrowPathIcon,
  Bars3Icon,
  CloudArrowUpIcon,
  CogIcon,
  LockClosedIcon,
  ServerIcon,
  ShieldCheckIcon,
  XMarkIcon,
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
  MapPinIcon,
  UserGroupIcon,
  CodeBracketIcon,
  PhoneIcon,
  NewspaperIcon,
  LifebuoyIcon
} from '@heroicons/vue/24/outline'
import { ArrowTopRightOnSquareIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/vue/20/solid'

const awards = [
  {
    name: 'Sao Khue',
    image: '/award-1.png',
  },
  {
    name: 'Top softwawre',
    image: '/award-4.webp',
  },
  {
    name: 'AWS',
    image: '/award-3.png',
  }
]

const Clients = [
  {
    imageUrl:
      '/client-bitatech-1.jpeg',
  },
  {
    imageUrl:
      '/client-bitatech-2.jpeg',
  },
  {
    imageUrl:
      '/client-bitatech-3.jpeg',
  },
  {
    imageUrl:
      '/client-bitatech-4.jpeg',
  },
  {
    imageUrl:
      '/client-bitatech-5.jpeg',
  },
  {
    imageUrl:
      '/client-bitatech-6.png',
  },
  {
    imageUrl:
      '/client-bitatech-7.svg',
  },
  {
    imageUrl:
      '/client-bitatech-8.png',
  },
  {
    imageUrl:
      '/client-bitatech-9.png',
  },
  {
    imageUrl:
      '/client-bitatech-10.jpeg',
  },
  {
    imageUrl:
      '/client-bitatech-11.jpeg',
  },
  {
    imageUrl:
      '/client-bitatech-12.jpeg',
  }
  // More whyUs...
]

const whyUs = [
  {
    name: 'Proven Software Success',
    role: '',
    imageUrl: '/why-bitatech-icon-1.svg',
    bio: 'We’ve served over 160 clients and develop our own software companies in house, which sets us apart from the rest.',
  },
  {
    name: 'Develop Innovative Solutions',
    role: '',
    imageUrl: '/why-bitatech-icon-2.svg',
    bio: 'Bring your software visions to life by leveraging emerging technologies.',
  },
  {
    name: 'Accelerate Speed to Market',
    role: '',
    imageUrl: '/why-bitatech-icon-3.svg',
    bio: 'Achieve continuous delivery cycles to outpace your competitors with faster speed to market.',
  },
  {
    name: 'Expand Your Team Capacity',
    role: '',
    imageUrl: '/why-bitatech-icon-4.svg',
    bio: 'Fill your talent gaps and enhance your team’s skills with senior-level developers.',
  }
]

const stats = [
  { id: 1, name: 'COUNTRIES', stat: '12', icon: MapPinIcon },
  { id: 2, name: 'CUSTOMERS', stat: '160+', icon: UserGroupIcon },
  { id: 3, name: 'SUCCESSFUL PROJECTS', stat: '300+', icon: ShieldCheckIcon },
  { id: 4, name: 'DEVELOPERS', stat: '450+', icon: CodeBracketIcon }
]

const metrics = [
  { id: 1, stat: '8K+', emphasis: 'Companies', rest: 'use laoreet amet lacus nibh integer quis.' },
  { id: 2, stat: '25K+', emphasis: 'Countries around the globe', rest: 'lacus nibh integer quis.' },
  { id: 3, stat: '98%', emphasis: 'Customer satisfaction', rest: 'laoreet amet lacus nibh integer quis.' },
  { id: 4, stat: '12M+', emphasis: 'Issues resolved', rest: 'lacus nibh integer quis.' },
]
const navigation = [
  { name: 'Portfolio', href: '#' }
]
const features = [
  {
    name: 'Software Development',
    description: 'We’re building a new generation of innovative software companies.',
    icon: ServerIcon,
  },
  {
    name: 'Mobile App Development',
    description: 'As a leading mobile app development company, we have years of experience creating innovative, high-quality applications for our clients.',
    icon: ServerIcon,
  },
  {
    name: 'DevOps Solutions',
    description:
      'Boost efficiency and minimize costs with the help of our DevOps experts.',
    icon: CogIcon,
  },
  {
    name: 'MVP Product Development',
    description: 'Bitatech Technology can provide a full-scale team to support the entire development lifecycle or fill the gaps in your MVP team. No matter your needs, we follow our proven methodology for ensuring quality and success for your minimum viable product (MVP).',
    icon: ArrowPathIcon,
  },
  {
    name: 'Software Testing',
    description: 'Increase the speed, accuracy, and security of your QA and software testing with comprehensive services that deliver better products for your end users.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Blockchain',
    description: 'We provide NFTs, DEX, CEX, eWallet Development, ICO/IEO/STO, Smart Contracts Development to effortlessly leverage Blockchain solutions.',
    icon: CloudArrowUpIcon,
  }
]
const blogPosts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { name: 'Article', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    author: {
      name: 'Roel Aufderehar',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '6 min',
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    category: { name: 'Video', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    author: {
      name: 'Brenna Goyette',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '4 min',
  },
  {
    id: 3,
    title: 'Improve your customer experience',
    href: '#',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { name: 'Case Study', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    author: {
      name: 'Daniela Metz',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '11 min',
  },
]
const footerNavigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
            }),
          ]),
      }),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'Dribbble',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
  ],
}
</script>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>