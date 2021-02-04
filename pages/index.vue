<template>
  <div>
    <h2>Readings</h2>
    <ol class="nav-links">
      <li class="mr" :class="{ 'mr-0': index === links.length - 1 }" v-for="(link, index) in links">
        <NuxtLink :to="link.to">{{ link.name }}</NuxtLink>
      </li>
    </ol>
    <hr class="mt-2x" />
    <h2>Applications</h2>
    <ol class="nav-links">
      <li
        class="mr"
        :class="{ 'mr-0': index === links.length - 1 }"
        v-for="(link, index) in applications"
      >
        <NuxtLink :to="link.to">{{ link.name }}</NuxtLink>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      { name: 'Week 01', to: '/week1' },
      { name: 'Week 02', to: '/week2' },
      { name: 'Week 03', to: '/week3' },
      { name: 'Week 04', to: '/week4' },
      { name: 'Week 05', to: '/week5' },
    ],
    applications: [{ name: 'ToDo App', to: '/todo' }],
  }),
};
</script>
