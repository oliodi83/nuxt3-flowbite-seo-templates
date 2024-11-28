<template>
  <div>
    <nav class="bg-base-100">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <NavLogo />
        <NavMobileMenu />
        <div
          class="hidden w-full md:block md:w-auto"
          id="navbar-solid-bg"
        >
          <ul class="menu menu-horizontal">
            <NavLink url="/">Home</NavLink>
            <NavThemeSwitcher />
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts"></script>
