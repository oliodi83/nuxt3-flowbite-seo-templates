<template>
  <div>
    <li>
      <NuxtLink
        aria-current="page"
        :class="{
          'text-inherit': isActive,
        }"
        :to="url"
      >
        {{ label }}
      </NuxtLink>
    </li>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  url: string
  label: string
}

const props = defineProps<Props>()

// Check the current route against the passed url to set to active or not
const route = useRoute()

const isActive = computed(() => {
  if (route.name === 'index' && props.url === '/') {
    return true
  }
  return route.name === props.url
})
</script>
