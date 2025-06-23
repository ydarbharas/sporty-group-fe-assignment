<template>
  <v-fade-transition>
    <v-btn
      v-show="showFab"
      fab
      color="primary"
      size="large"
      icon="mdi-arrow-up"
      class="scroll-to-top-fab"
      @click="scrollToTop"
    />
  </v-fade-transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const showFab = ref<boolean>(false)

const handleScroll = () => {
  showFab.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.scroll-to-top-fab {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 100;
}
</style>
