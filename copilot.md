# Nuxt3 Copilot Styleguide

Please adhere to these standard. Failure to do so will result in a standup meeting.

## Application stack

- Html
- Tailwind
- Vue3 composition API with script setup syntax
- Nuxt3

## Code style

- Always use typescript
- Never import unnecessary files (eg; DefineProps, ref, Components), respect Nuxt3 auto-import
- Always use interfaces when defining props

## Order of Vue components

To keep code consistent always use the following order in a Vue component when generating code or asked to organize a file

1. Template
2. Script setup

## Order for <script setup lang="ts">

To keep code consistent always use the following order in a Vue component when generating code or asked to organize a file

1.  Imports
2.  useHead()
3.  useSeo()
4.  Interfaces
5.  defineProps()
6.  defineEmits()
7.  Reactive States ref()
8.  Reactive States reactive()
9.  Computed properties
10. Watchers
11. Functions
12. Lifecycle hooks
