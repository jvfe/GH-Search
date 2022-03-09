<template>
  <div>
    <h1>Hi from search!</h1>
    <pre>{{ userData }}</pre>
  </div>
</template>

<script>
import getGitHubData from '@/lib/getData.js'

export default {
  name: 'UserPage',
  async asyncData({ params }) {
    const dataset = await getGitHubData(params.user)
    return {
      userData: dataset,
    }
  },
}
</script>
