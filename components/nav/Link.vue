<template>
  <div>
    <li>
      <NuxtLink
        :to="url"
        class="btn btn-ghost"
        :class="{
          'text-primary': isActive,
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
})

// Check the current route against the passed url to set to active or not
const route = useRoute()

const isActive = computed(() => {
  if (route.name === 'index' && props.url === '/') {
    return true
  }
  return route.name === props.url
})
</script>
