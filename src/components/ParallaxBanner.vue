<script setup>
defineProps({
  image: { type: String, default: '/img/top.jpeg' }
})
</script>

<template>
  <section
    id="mais"
    class="relative flex min-h-[70vh] items-center overflow-hidden bg-cover bg-center text-center text-white md:bg-fixed"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div class="absolute inset-0 bg-gradient-to-b from-brand-dark/60 to-brand-dark/85"></div>

    <div class="container-page relative z-[2] py-24" v-reveal:zoom>
      <h2 class="section-title mx-auto">Araras: Beleza e Cores da Amazônia</h2>
      <p class="mx-auto max-w-2xl text-xl italic text-white/90">
        As araras vermelhas e azuis da Amazônia são verdadeiros tesouros da selva tropical, com plumagens que iluminam a floresta.
      </p>
      <a href="#inicio" class="btn-glow mt-8">Voltar ao início</a>
    </div>
  </section>
</template>
