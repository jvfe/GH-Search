<template>
  <section
    class="grid grid-cols-1 md:grid-cols-user-card place-items-center md:justify-between gap-4 md:gap-2 mx-10 my-10 animate-slide-down text-center md:text-left text-icongrey"
  >
    <div class="w-1/2 md:w-3/4">
      <img
        :src="userInfo.avatar_url"
        :alt="`${userInfo.login} profile picture`"
        class="rounded-full"
      />
    </div>
    <div class="grid gap-3">
      <div class="grid gap-0">
        <h1 class="text-xl text-brightpurple font-bold">{{ userInfo.name }}</h1>
        <p>@{{ userInfo.login }}</p>
      </div>
      <div class="flex gap-3 md:gap-6">
        <span title="Location">
          <i class="fa-solid fa-location-dot icon-style"></i
          >{{ userInfo.location }}
        </span>
        <span title="Company">
          <i class="fa-solid fa-briefcase icon-style"></i>
          {{ userInfo.company }}
        </span>
      </div>
      <div class="flex gap-4 justify-center md:justify-start">
        <span title="Followers">
          <i class="fa-solid fa-user icon-style"></i>
          {{ userInfo.followers }}
        </span>
        <span title="Following">
          <i class="fa-solid fa-users icon-style"></i>{{ userInfo.following }}
        </span>
      </div>
    </div>
    <div class="flex items-center rounded bg-cardblack">
      <div class="h-1/3 p-4">
        <h4>Total Repositories</h4>
        <h3 class="text-center text-xl">
          <i class="fa-solid fa-code-branch icon-style"></i
          >{{ userInfo.public_repos }}
        </h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    userInfo: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
