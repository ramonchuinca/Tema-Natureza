<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import BackgroundVideo from './BackgroundVideo.vue'
import { rioStats } from '@/data/nature'

const values = ref(rioStats.map(() => 0))
const statsEl = ref(null)
let observer

const countUp = () => {
  const start = performance.now()
  const duration = 2000

  const frame = (now) => {
    const progress = Math.min((now - start) / duration, 1)
    values.value = rioStats.map((stat) => Math.floor(stat.value * progress))
    if (progress < 1) requestAnimationFrame(frame)
  }

  requestAnimationFrame(frame)
}

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry], obs) => {
      if (entry.isIntersecting) {
        countUp()
        obs.disconnect()
      }
    },
    { threshold: 0.5 }
  )
  observer.observe(statsEl.value)
})

onBeforeUnmount(() => observer?.disconnect())

const format = (number, suffix) => number.toLocaleString('pt-BR') + suffix
</script>

<template>
  <section id="rio" class="nature-section">
    <BackgroundVideo src="/video/video2.mp4" />

    <div class="container-page relative z-[2] py-24">
      <div class="mb-14 text-center" v-reveal:up>
        <span class="section-tag">Hidrografia</span>
        <h2 class="section-title">O Rio Amazonas</h2>
        <p class="mx-auto max-w-2xl text-white/50">
          Um dos maiores rios do planeta, responsável por uma das redes hídricas mais ricas e complexas do mundo.
        </p>
      </div>

      <div ref="statsEl" class="grid gap-6 md:grid-cols-3">
        <div
          v-for="(stat, index) in rioStats"
          :key="stat.label"
          class="stat-card"
          v-reveal:zoom="{ delay: index * 150 }"
        >
          <i :class="['bi', stat.icon, 'text-4xl text-brand-blue']"></i>
          <div class="stat-number">{{ format(values[index], stat.suffix) }}</div>
          <p class="text-white/80">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
