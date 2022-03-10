<template>
  <div class="bg-darkgrey flex flex-col items-center">
    <NavBar />
    <UserCard :user-info="userData.user" />
    <RepoSection :repo-list="userData.repos[0]" />
  </div>
</template>

<script>
// import getGitHubData from '@/lib/getData.js'

export default {
  name: 'UserPage',
  async asyncData({ params }) {
    const dataset = await require('@/pages/search/data.json')

    // const dataset = await getGitHubData(params.user)
    return {
      userData: dataset,
    }
  },
  data() {
    return {
      error: false,
    }
  },
}
</script>
