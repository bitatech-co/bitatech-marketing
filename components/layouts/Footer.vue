<script setup lang="ts">
const footerNavigation = {
  company: [
    { name: 'About Us', to: '/about-us' },
    { name: 'Careers', to: { path: '/about-us', hash: '#careers'} },
    { name: 'Blogs', to: '/blogs' }
  ],
  legal: [
    { name: 'Privacy Policy', to: '/legal/privacy-policy' },
    { name: 'Terms of Use', to: '/legal/terms-of-use' },
    { name: 'Cookies', to: '/legal/cookies' },
  ]
}
</script>
<template>
  <!-- Footer -->
  <footer class="relative pt-20 sm:pt-24 bg-gray border-t border-white/10" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-10">
        <div class="space-y-8">
          <img class="h-7" src="/logo-bitatech-2.png" alt="Company name" />
          <p class="text-sm leading-6 text-gray-300 pr-10">We partner with founders, startups, and enterprises to design and create MVP, products, and services following industry best practices</p>
          <div class="flex space-x-6">
            <a href="https://www.linkedin.com/company/bitatech" target="_blank" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">Linkedin</span>
              <svg enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.0" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle clip-rule="evenodd" cx="16" cy="16" fill="#007BB5" fill-rule="evenodd" r="16"/><g><rect fill="#FFFFFF" height="14" width="4" x="7" y="11"/><path d="M20.499,11c-2.791,0-3.271,1.018-3.499,2v-2h-4v14h4v-8c0-1.297,0.703-2,2-2c1.266,0,2,0.688,2,2v8h4v-7    C25,14,24.479,11,20.499,11z" fill="#FFFFFF"/><circle cx="9" cy="8" fill="#FFFFFF" r="2"/></g></g><g/><g/><g/><g/><g/><g/></svg>
            </a>
            <a href="https://www.facebook.com/bitatech.co" target="_blank" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">Facebook</span>
              <svg height="32px" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M512,256c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z" style="fill:#1877f2;fill-rule:nonzero;"/><path d="M355.65,330l11.35,-74l-71,0l0,-48.022c0,-20.245 9.917,-39.978 41.719,-39.978l32.281,0l0,-63c0,0 -29.297,-5 -57.305,-5c-58.476,0 -96.695,35.44 -96.695,99.6l0,56.4l-65,0l0,74l65,0l0,178.89c13.033,2.045 26.392,3.11 40,3.11c13.608,0 26.966,-1.065 40,-3.11l0,-178.89l59.65,0Z" style="fill:#fff;fill-rule:nonzero;"/></g></svg>
            </a>
          </div>
        </div>
        <div class="mt-10 xl:mt-0">
          <h3 class="text-2xl font-bold tracking-tight text-white my-4">Our Offices</h3>
          <div class="mt-4 grid grid-cols-1 gap-2 xl:mt-0">
            <div>
              <p class="text-blue-400 mb-2">Sydney Office</p>
              <p class="text-gray-300">125 Wardell Rd, Earlwood, NSW 2206, Australia</p>
              <a class="hover:text-white text-white" href="tel:+61-4-4451-8693"
                >tel: +61-4-4451-8693</a
              >
            </div>
            <div>
              <p class="text-blue-400 mb-2">Sydney Office 2</p>
              <p class="text-gray-300">29 Slade Rd, Bardwell Park, NSW 2207, Australia</p>
              <a class="hover:text-white text-white" href="tel:+61-406-122-084"
                >tel: +61-406-122-084</a
              >
            </div>
          </div>
        </div>
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-1 xl:mt-0">
          <div>
            <h3 class="text-sm font-semibold leading-6 text-white">Company</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li v-for="item in footerNavigation.company" :key="item.name">
                <NuxtLink :to="item.to" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-sm font-semibold leading-6 text-white">Legal</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li v-for="item in footerNavigation.legal" :key="item.name">
                <NuxtLink :to="item.to" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
        <p class="text-xs leading-5 text-gray-400">&copy; 2024 Lysa Digital TS Co., LTD. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
