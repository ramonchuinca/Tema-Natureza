<script setup>
import { footerColumns, socialLinks } from '@/data/nature'
</script>

<template>
  <footer class="border-t border-brand-green/15 bg-brand-deep">
    <div class="container-page py-20">
      <div class="grid gap-10 md:grid-cols-4">
        <div v-reveal:up>
          <h4 class="footer-title">Amazonia</h4>
          <img src="/img/lindo.jpeg" alt="Paisagem da Amazônia" class="footer-img" />
        </div>

        <div
          v-for="(column, index) in footerColumns"
          :key="column.titulo"
          v-reveal:up="{ delay: (index + 1) * 100 }"
        >
          <h4 class="footer-title">{{ column.titulo }}</h4>
          <ul>
            <li v-for="item in column.itens" :key="item" class="footer-item">{{ item }}</li>
          </ul>
        </div>
      </div>

      <div id="social" class="mt-16 flex justify-center gap-4">
        <a
          v-for="social in socialLinks"
          :key="social.nome"
          :href="social.href"
          target="_blank"
          rel="noopener"
          :aria-label="social.nome"
          class="social-link"
        >
          <img :src="social.icon" :alt="social.nome" />
        </a>
      </div>

      <p class="mt-12 text-center text-sm text-white/50">© 2024 Floresta Amazônica</p>
    </div>
  </footer>
</template>
