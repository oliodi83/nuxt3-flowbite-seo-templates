<template>
  <div class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
    <div class="mx-auto max-w-screen-xl text-center">
      <div
        class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <NavLogo />
      </div>
      <p class="my-6 text-gray-500 dark:text-gray-400">
        A Nuxt3 Flowbite temmplate optimized for SEO
      </p>
      <ul
        class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white"
      >
        <li>
          <NuxtLink to="/services" class="mr-4 hover:underline md:mr-6">
            Services
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/pricing" class="mr-4 hover:underline md:mr-6">
            Pricing
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="mr-4 hover:underline md:mr-6">
            Contact
          </NuxtLink>
        </li>
      </ul>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2021-2022
        <NuxtLink to="/" class="hover:underline">NuxtBite™</NuxtLink>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
