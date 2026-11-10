<script setup>
import AppNavbar from '@/components/AppNavbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import AnimalSection from '@/components/AnimalSection.vue'
import RioSection from '@/components/RioSection.vue'
import PlantasSection from '@/components/PlantasSection.vue'
import ParallaxBanner from '@/components/ParallaxBanner.vue'
import AppFooter from '@/components/AppFooter.vue'
import { animals } from '@/data/nature'
</script>

<template>
  <AppNavbar />
  <HeroSection />

  <AnimalSection v-for="animal in animals" :key="animal.id" :animal="animal" />

  <RioSection />
  <PlantasSection />
  <ParallaxBanner />
  <AppFooter />
</template>
