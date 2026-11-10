<script setup>
import BackgroundVideo from './BackgroundVideo.vue'

defineProps({
  animal: { type: Object, required: true }
})
</script>

<template>
  <section :id="animal.id" class="nature-section">
    <BackgroundVideo :src="animal.video" />

    <div class="container-page relative z-[2] grid items-center gap-12 py-24 lg:grid-cols-2">
      <div :class="{ 'lg:order-2': animal.reverse }" v-reveal:left>
        <span class="section-tag">{{ animal.tag }}</span>
        <h2 class="section-title">{{ animal.title }}</h2>
        <p class="glass-card">{{ animal.text }}</p>
      </div>

      <figure class="text-center" v-reveal:right="{ delay: 150 }">
        <img :src="animal.image" :alt="animal.caption" class="animal-img float-anim mx-auto" />
        <figcaption class="animal-caption">{{ animal.caption }}</figcaption>
      </figure>
    </div>
  </section>
</template>
