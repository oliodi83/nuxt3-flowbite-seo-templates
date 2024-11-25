<template>
  <div>
    <nav
      class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
    >
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5"
      >
        <NavLogo />
        <NavMobileMenu />
        <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul
            class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700"
          >
            <NavLink url="/">Home</NavLink>
            <NavLink url="/service">Service</NavLink>
            <NavLink url="/pricing">Pricing</NavLink>
            <NavLink url="/contact">Contact</NavLink>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts"></script>
