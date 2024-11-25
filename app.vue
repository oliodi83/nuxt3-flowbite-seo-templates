<template>
  <div>
    <NuxtRouteAnnouncer />
    <div class="font-Inter container">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useFlowbite } from "~/composables/useFlowbite";

// Initialize Flowbite when the DOM is ready
onMounted(() => {
  useFlowbite((flowbite: { initFlowbite: () => void }) => {
    // Safe initialization of Flowbite
    flowbite.initFlowbite();
  });
});
</script>
