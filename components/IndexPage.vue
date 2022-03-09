<template>
  <div class="bg-darkgrey h-screen w-full grid place-items-center">
    <div class="grid place-items-center gap-0">
      <LogoVertical class="mb-10 animate-slide-down" />
      <form
        class="grid gap-5 animate-slide-up"
        method="post"
        @submit.prevent="submitUsername"
      >
        <label for="ghUser" class="text-xs font-medium text-white"
          >Enter a GitHub user name:</label
        >
        <input
          id="ghUser"
          v-model="ghUser"
          class="bg-darkgrey leading-6 py-2 px-4 placeholder-gray-500 text-center text-lg text-gray-300 focus:outline-none border-b-4 border-brightpurple"
          type="text"
          placeholder="Search for a user"
          tabindex="0"
          required
        />
        <input
          type="submit"
          class="cursor-pointer bg-brightpurple text-white font-semibold text-sm rounded p-3 w-72 transition-all hover:bg-opacity-90"
          value="Search"
        />
      </form>
    </div>
  </div>
</template>

<script>
import LogoVertical from '@/components/icons/LogoVertical.vue'

export default {
  components: {
    LogoVertical,
  },
  data() {
    return {
      ghUser: '',
    }
  },
  methods: {
    submitUsername() {
      window.$nuxt.$router.push(`/search/${this.ghUser}`)
    },
  },
}
</script>
