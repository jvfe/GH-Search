<template>
  <div>
    <h1>Hi from search!</h1>
    <h1>{{ user }}</h1>
  </div>
</template>

<script>
export default {
  name: 'UserPage',
  asyncData({ params }) {
    return {
      user: params.user,
    }
  },
}
</script>
