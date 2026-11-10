// Uso: v-reveal:up, v-reveal:left, v-reveal:right, v-reveal:zoom
// Com atraso: v-reveal:up="{ delay: 150 }"
export const reveal = {
  mounted(el, binding) {
    const direction = binding.arg || 'up'
    el.classList.add('reveal', `reveal-${direction}`)
    el.style.transitionDelay = `${binding.value?.delay ?? 0}ms`

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('is-visible')
        observer.disconnect()
      }
    }, { threshold: 0.15 })

    observer.observe(el)
    el._revealObserver = observer
  },
  unmounted(el) {
    el._revealObserver?.disconnect()
  }
}
