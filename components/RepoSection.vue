<template>
  <section
    class="lg:w-7/12 flex flex-wrap flex-grow justify-center mx-2 md:mx-28 my-10 text-icongrey"
  >
    <RepoCard v-for="repo in currentRepoList" :key="repo.id" :repo="repo" />
  </section>
</template>

<script>
import debounce from 'lodash/debounce'
import RepoCard from '@/components/RepoCard.vue'

export default {
  components: {
    RepoCard,
  },
  props: {
    repoList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      curIndex: 0,
      currentRepoList: this.repoList[0],
    }
  },
  mounted() {
    this.debouncedGetRepos = debounce(this.getNextRepos, 200)
    window.addEventListener('scroll', this.debouncedGetRepos)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.debouncedGetRepos)
  },
  methods: {
    getNextRepos() {
      const bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight
      if (bottomOfWindow) {
        if (this.curIndex < this.repoList.length) {
          this.curIndex++
          this.currentRepoList = [
            ...this.currentRepoList,
            ...this.repoList[this.curIndex],
          ]
        }
      }
    },
  },
}
</script>
