<template>
  <nav
    class="flex justify-between items-center py-8 px-2 w-full lg:w-6/12 animate-slide-down"
  >
    <nuxt-link to="/"><LogoHorizontal /></nuxt-link>
    <nuxt-link to="/"
      ><i class="fa-solid fa-arrow-left text-2xl text-icongrey mr-1"></i
    ></nuxt-link>
  </nav>
</template>

<script>
import LogoHorizontal from '@/components/icons/LogoHorizontal.vue'

export default {
  components: {
    LogoHorizontal,
  },
}
</script>
