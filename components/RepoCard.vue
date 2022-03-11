<template>
  <div
    class="flex flex-col justify-between gap-4 animate-slide-up bg-cardblack w-80 m-2 p-4 rounded min-h-[200px]"
  >
    <div class="grid gap-3">
      <span class="flex text-lg font-bold">
        <span v-if="repo.fork" class="icon-style" title="Repo is a fork"
          ><i class="fa-solid fa-code-fork ml-1"></i
        ></span>
        <h1>{{ repo.name }}</h1>
      </span>
      <p class="text-sm text-justify overflow-hidden text-clip">
        {{ repo.description }}
      </p>
    </div>
    <div class="flex justify-between text-xs">
      <span>
        <i class="fa-solid fa-star icon-style"></i>{{ repo.stargazers_count }}
      </span>
      <span
        ><i class="fa-solid fa-code-fork icon-style"></i>{{ repo.forks }}</span
      >
      <span v-if="repo.language"
        ><i class="fa-solid fa-file-code icon-style"></i
        >{{ repo.language }}</span
      >
      <span>
        <i class="fa-solid fa-arrow-up-right-from-square icon-style"></i>
        <a
          :href="repo.html_url"
          target="_blank"
          class="underline hover:no-underline"
          >View on Github</a
        >
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    repo: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
