<template>
  <div class="bg-darkgrey flex flex-col items-center">
    <NavBar />
    <div
      v-if="$fetchState.pending"
      class="grid place-items-center h-screen bg-darkgrey"
    >
      <span class="lds-dual-ring"></span>
    </div>
    <div
      v-else-if="$fetchState.error"
      class="grid place-items-center h-screen bg-darkgrey"
    >
      <h1 class="text-brightpurple text-3xl">
        Sorry we couldn't retrieve the data
      </h1>
    </div>
    <div v-else class="grid place-items-center">
      <UserCard :user-info="userData.user" />
      <RepoSection :repo-list="userData.repos" />
    </div>
  </div>
</template>

<script>
import getGitHubData from '@/lib/getData.js'

import NavBar from '@/components/NavBar.vue'
import UserCard from '@/components/UserCard.vue'
import RepoSection from '@/components/RepoSection.vue'

export default {
  components: {
    NavBar,
    UserCard,
    RepoSection,
  },
  data() {
    return {
      userData: [],
    }
  },
  async fetch() {
    const dataset = await getGitHubData(this.$route.params.user)
    this.userData = dataset
  },
}
</script>

<style scoped>
/* from https://loading.io/css/ */
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: ' ';
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid rgb(135, 82, 204);
  border-color: rgb(135, 82, 204) transparent rgb(135, 82, 204) transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
