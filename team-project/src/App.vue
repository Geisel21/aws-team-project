<script setup lang="ts">
import ApiPanel from './components/ApiPanel.vue'
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <a
    href="#main"
    class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900 focus:shadow dark:focus:bg-slate-900 dark:focus:text-white"
  >
    Skip to content
  </a>

  <NavBar />

  <main id="main">
    <!-- Hero / Home -->
    <section id="home" class="scroll-mt-24">
      <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div class="grid items-center gap-10 lg:grid-cols-2">
          <div data-aos="fade-up">
            <p class="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-200">
              Single-page Vue.js site • Responsive • AWS-ready
            </p>
            <h1 class="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Team Project
            </h1>
            <p class="mt-4 max-w-xl text-lg text-slate-600 dark:text-slate-300">
              A clean, modern team site with subtle animations, a persistent dark mode, and demo buttons wired to AWS API Gateway.
            </p>

            <div class="mt-8 flex flex-wrap gap-3">
              <a
                href="#aws"
                class="rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
              >
                Try AWS Demo
              </a>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <div
              class="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-indigo-50 p-6 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
            >
              <div class="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-400/20 blur-2xl" aria-hidden="true" />
              <div class="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-indigo-400/20 blur-2xl" aria-hidden="true" />

              <div class="relative">
                <h2 class="text-base font-semibold text-slate-900 dark:text-white">What you get</h2>
                <ul class="mt-4 grid gap-3 text-sm text-slate-700 dark:text-slate-200">
                  <li class="flex gap-2">
                    <span class="mt-1 h-2 w-2 rounded-full bg-sky-500" aria-hidden="true" />
                    Professional layout, responsive from mobile to desktop
                  </li>
                  <li class="flex gap-2">
                    <span class="mt-1 h-2 w-2 rounded-full bg-sky-500" aria-hidden="true" />
                    Dark mode toggle that remembers your preference
                  </li>
                  <li class="flex gap-2">
                    <span class="mt-1 h-2 w-2 rounded-full bg-sky-500" aria-hidden="true" />
                    Smooth scrolling + AOS-powered animations
                  </li>
                  <li class="flex gap-2">
                    <span class="mt-1 h-2 w-2 rounded-full bg-sky-500" aria-hidden="true" />
                    Buttons wired to API Gateway (Aurora + Region)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AWS Demo -->
    <section id="aws" class="scroll-mt-24 border-t border-slate-200 bg-white/50 dark:border-slate-800 dark:bg-slate-950/40">
      <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div data-aos="fade-up">
          <h2 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">AWS Demo</h2>
          <p class="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
            Save and retrieve data through API Gateway (backed by Aurora), and query the EC2 region via a dedicated endpoint.
          </p>
        </div>

        <div class="mt-8" data-aos="fade-up" data-aos-delay="80">
          <ApiPanel />
        </div>
      </div>
    </section>

    <!-- Contact (no hosted form) -->
    <section class="border-t border-slate-200 bg-white/50 dark:border-slate-800 dark:bg-slate-950/40">
      <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div data-aos="fade-up">
          <h2 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Get in touch</h2>
          <p class="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
            No embedded form here (by design). Use links below, or wire this section to your own API later.
          </p>
        </div>

        <div class="mt-8 grid gap-4 md:grid-cols-3" data-aos="fade-up" data-aos-delay="80">
          <a
            class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/40"
            href="mailto:your-team@example.com"
          >
            <p class="text-sm font-semibold text-slate-900 dark:text-white">Email</p>
            <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">your-team@example.com</p>
            <p class="mt-3 text-xs text-sky-700 group-hover:underline dark:text-sky-300">Open email →</p>
          </a>

          <a
            class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/40"
            href="#"
          >
            <p class="text-sm font-semibold text-slate-900 dark:text-white">LinkedIn</p>
            <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">Add your team/company page</p>
            <p class="mt-3 text-xs text-sky-700 group-hover:underline dark:text-sky-300">Visit →</p>
          </a>

          <a
            class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/40"
            href="#"
          >
            <p class="text-sm font-semibold text-slate-900 dark:text-white">GitHub</p>
            <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">Link to the repository</p>
            <p class="mt-3 text-xs text-sky-700 group-hover:underline dark:text-sky-300">View →</p>
          </a>
        </div>
      </div>
    </section>

    <SiteFooter />
  </main>
</template>
