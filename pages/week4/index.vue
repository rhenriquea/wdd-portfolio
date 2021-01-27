<template>
  <main>
    <h1>Practical application of Classes and Forms</h1>
    <div ref="editor1" class="editor"></div>
    <nuxt-content :document="page" />
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('week4').fetch();

    return {
      page,
    };
  },
};
</script>
