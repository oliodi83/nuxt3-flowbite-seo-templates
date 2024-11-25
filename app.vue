<template>
  <div>
    <NuxtRouteAnnouncer />
    <div class="font-inter">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import { NuxtLayout } from "#build/components";
import { onMounted } from "vue";
import { useFlowbite } from "~/composables/useFlowbite";

useHead({
  bodyAttrs: {
    class:
      "font-sans antialiased text-gray-600 dark:bg-slate-900 dark:text-gray-400",
  },
});

// Initialize Flowbite when the DOM is ready
onMounted(() => {
  useFlowbite((flowbite: { initFlowbite: () => void }) => {
    // Safe initialization of Flowbite
    flowbite.initFlowbite();
  });
});
</script>
