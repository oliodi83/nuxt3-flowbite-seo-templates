<template>
  <div>
    <li>
      <NuxtLink
        :to="url"
        class="block py-2 px-3 md:p-0 rounded"
        :class="{
          'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent':
            isActive,
          'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:text-blue-500 md:dark:hover:bg-transparent':
            !isActive,
        }"
        aria-current="page"
      >
        <slot />
      </NuxtLink>
    </li>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  url: String,
});

// Check the current route against the passed url to set to active or not
const route = useRoute();

const isActive = computed(() => {
  if (route.name === "index" && props.url === "/") {
    return true;
  }
  return route.name === props.url;
});
</script>
