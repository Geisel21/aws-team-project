<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#aws', label: 'AWS Demo' },
] as const
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/60">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
      <a href="#home" class="flex items-center gap-2 font-semibold tracking-tight text-slate-900 dark:text-white">
        <span
          class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 text-white shadow-sm"
          aria-hidden="true"
        >
          TP
        </span>
        <span>Team Project</span>
      </a>

      <nav class="hidden items-center gap-1 sm:flex" aria-label="Primary">
        <a
          v-for="l in links"
          :key="l.href"
          :href="l.href"
          class="rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-900/60 dark:hover:text-white"
        >
          {{ l.label }}
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>


