<script setup lang="ts">
import { useTheme } from '../composables/useTheme'

const { isDark, toggleDark } = useTheme()
</script>

<template>
  <button
    type="button"
    class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-sm font-medium text-slate-900 shadow-sm backdrop-blur transition hover:bg-white dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:bg-slate-900"
    :aria-pressed="isDark"
    @click="toggleDark()"
  >
    <span class="sr-only">Toggle dark mode</span>
    <svg v-if="isDark" aria-hidden="true" viewBox="0 0 24 24" class="h-5 w-5 fill-current">
      <path
        d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73A8.15 8.15 0 0 1 9.08 5.49a8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36 10.14 10.14 0 1 0 22 14a1 1 0 0 0-.36-1Z"
      />
    </svg>
    <svg v-else aria-hidden="true" viewBox="0 0 24 24" class="h-5 w-5 fill-current">
      <path
        d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-14a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Zm0 16a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM4.93 6.34a1 1 0 0 1 1.41 0l.71.71a1 1 0 1 1-1.41 1.41l-.71-.7a1 1 0 0 1 0-1.42Zm12.02 12.02a1 1 0 0 1 1.41 0l.71.71a1 1 0 0 1-1.41 1.41l-.71-.71a1 1 0 0 1 0-1.41ZM3 13H2a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Zm20 0h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2ZM6.34 19.07a1 1 0 0 1 0-1.41l.7-.71a1 1 0 1 1 1.42 1.41l-.71.71a1 1 0 0 1-1.41 0Zm12.02-12.02a1 1 0 0 1 0-1.41l.71-.71a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1-1.41 0Z"
      />
    </svg>
    <span class="hidden sm:inline">{{ isDark ? 'Dark' : 'Light' }}</span>
  </button>
</template>


