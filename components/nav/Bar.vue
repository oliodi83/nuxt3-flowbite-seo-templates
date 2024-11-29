<template>
  <nav
    class="navbar"
    :class="variantClass"
  >
    <div class="navbar-start">
      <NavBarMobileMenu />
      <NavBarBrand />
    </div>

    <div class="navbar-center hidden md:block">
      <ul class="menu menu-horizontal px-1">
        <NavBarLink
          label="Home"
          url="/"
        />
      </ul>
    </div>

    <div class="navbar-end">
      <NavBarThemeSwitcher />
    </div>
  </nav>
</template>

<script lang="ts" setup>
interface Props {
  variant?: 'default' | 'neutral' | 'base' | 'primary'
}

const props = defineProps<Props>()

const variantClass = computed(() => {
  switch (props.variant) {
    case 'neutral':
      return 'bg-neutral text-neutral-content'
    case 'base':
      return 'bg-base-300'
    case 'primary':
      return 'bg-primary text-primary-content'
    default:
      return 'bg-base-100'
  }
})
</script>
