<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineProps({
  src: { type: String, required: true }
})

const videoEl = ref(null)
let observer

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (!videoEl.value) return
      if (entry.isIntersecting) {
        videoEl.value.play().catch(() => {})
      } else {
        videoEl.value.pause()
      }
    },
    { threshold: 0.1 }
  )
  observer.observe(videoEl.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <video
    ref="videoEl"
    :src="src"
    class="bg-video"
    autoplay
    muted
    loop
    playsinline
    preload="metadata"
  />
  <div class="section-overlay" />
</template>
