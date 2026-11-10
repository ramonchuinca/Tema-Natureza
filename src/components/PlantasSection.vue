<script setup>
import BackgroundVideo from './BackgroundVideo.vue'
import { plantas } from '@/data/nature'
</script>

<template>
  <section id="plantas" class="nature-section">
    <BackgroundVideo src="/video/video3.mp4" />

    <div class="container-page relative z-[2] py-24">
      <div class="mb-14 text-center" v-reveal:up>
        <span class="section-tag">Biodiversidade</span>
        <h2 class="section-title">Plantas da Amazônia</h2>
        <p class="mx-auto max-w-2xl text-white/50">
          A floresta guarda milhares de espécies usadas há gerações por povos tradicionais.
        </p>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="(planta, index) in plantas"
          :key="planta.nome"
          class="plant-card h-full p-8"
          v-reveal:up="{ delay: index * 100 }"
        >
          <i :class="['bi', planta.icon, 'plant-icon']"></i>
          <h3 class="mb-2 mt-4 font-display text-xl font-bold text-white">{{ planta.nome }}</h3>
          <p class="text-sm text-white/75">{{ planta.descricao }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
