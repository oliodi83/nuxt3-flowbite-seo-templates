<template>
  <div>
    <header>
      <NavBar />
    </header>

    <main>
      <slot />
    </main>

    <footer><NavFooter /></footer>
  </div>
</template>

<script setup lang="ts"></script>
