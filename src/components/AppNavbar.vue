<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { navLinks } from '@/data/nature'

const scrolled = ref(false)
const menuOpen = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <nav
    class="fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-all duration-300"
    :class="scrolled ? 'bg-brand-dark/90 py-2 shadow-xl' : 'bg-brand-dark/35 py-4'"
  >
    <div class="container-page flex items-center justify-between">
      <a href="#inicio" class="flex items-center gap-3">
        <video
          src="/video/video1.mp4"
          autoplay
          muted
          loop
          playsinline
          class="h-10 w-10 rounded-full border-2 border-brand-green object-cover"
        />
        <span class="font-display text-lg font-bold tracking-wide text-white">NATUREZA E VIDA</span>
      </a>

      <button
        class="text-2xl text-white md:hidden"
        aria-label="Abrir menu"
        @click="menuOpen = !menuOpen"
      >
        <i :class="menuOpen ? 'bi bi-x-lg' : 'bi bi-list'"></i>
      </button>

      <ul class="hidden items-center gap-8 md:flex">
        <li v-for="link in navLinks" :key="link.href">
          <a :href="link.href" class="nav-link">{{ link.label }}</a>
        </li>
      </ul>
    </div>

    <ul
      v-if="menuOpen"
      class="mx-4 mt-3 flex flex-col rounded-2xl bg-brand-dark/95 p-4 text-center md:hidden"
    >
      <li v-for="link in navLinks" :key="link.href">
        <a
          :href="link.href"
          class="block py-3 text-white hover:text-brand-green"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>
