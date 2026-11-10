<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { tsParticles } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'
import { heroVideos } from '@/data/nature'

gsap.registerPlugin(TextPlugin)

const current = ref(0)
const titleEl = ref(null)
const subtitleEl = ref(null)
const btnEl = ref(null)

let timer
let particles

onMounted(async () => {
  timer = setInterval(() => {
    current.value = (current.value + 1) % heroVideos.length
  }, 8000)

  gsap.to(titleEl.value, {
    duration: 3,
    text: 'A natureza é uma fonte inesgotável de beleza 🌿',
    ease: 'none',
    delay: 0.5
  })
  gsap.from(subtitleEl.value, { opacity: 0, y: 30, duration: 1.5, delay: 3.5, ease: 'power2.out' })
  gsap.from(btnEl.value, { opacity: 0, scale: 0.6, duration: 1, delay: 4, ease: 'back.out(1.7)' })

  await loadSlim(tsParticles)
  particles = await tsParticles.load({
    id: 'hero-particles',
    options: {
      fpsLimit: 60,
      background: { color: 'transparent' },
      particles: {
        number: { value: 60, density: { enable: true } },
        color: { value: '#ffffff' },
        opacity: { value: 0.4 },
        size: { value: { min: 1, max: 3 } },
        links: { enable: true, distance: 150, color: '#ffffff', opacity: 0.25, width: 1 },
        move: { enable: true, speed: 1.5, direction: 'none', outModes: { default: 'out' } }
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'grab' },
          onClick: { enable: true, mode: 'push' }
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.6 } },
          push: { quantity: 3 }
        }
      },
      detectRetina: true
    }
  })
})

onBeforeUnmount(() => {
  clearInterval(timer)
  particles?.destroy()
})
</script>

<template>
  <header id="inicio" class="relative h-screen min-h-[600px] overflow-hidden">
    <video
      v-for="(src, index) in heroVideos"
      :key="src"
      :src="src"
      autoplay
      muted
      loop
      playsinline
      class="hero-video"
      :class="{ 'is-active': index === current }"
    />

    <div class="absolute inset-0 z-[2] bg-gradient-to-b from-brand-dark/35 to-brand-dark/85" />
    <div id="hero-particles" class="absolute inset-0 z-[3]" />

    <div class="container-page relative z-[4] flex h-full flex-col items-center justify-center text-center text-white">
      <span class="section-tag" v-reveal:up>Floresta Amazônica</span>

      <h1 ref="titleEl" class="min-h-[1.4em] font-display text-4xl font-bold drop-shadow-2xl md:text-6xl"></h1>

      <p ref="subtitleEl" class="mt-4 text-lg drop-shadow-lg md:text-xl">
        Cada canto da natureza carrega uma história...
      </p>

      <a ref="btnEl" href="#fauna" class="btn-glow mt-8">Explorar</a>
    </div>

    <a href="#fauna" class="scroll-down" aria-label="Rolar para baixo">
      <span></span>
    </a>
  </header>
</template>
