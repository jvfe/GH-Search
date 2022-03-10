<template>
  <section
    class="lg:w-7/12 flex flex-wrap flex-grow justify-center mx-10 md:mx-28 my-10 text-icongrey"
  >
    <RepoCard v-for="repo in repoList" :key="repo.id" :repo="repo" />
  </section>
</template>

<script>
import RepoCard from '@/components/RepoCard.vue'

export default {
  components: {
    RepoCard,
  },
  props: {
    repoList: {
      type: {},
      default: () => {},
    },
  },
}
</script>
