<template>
  <main>
    <section>
      <h1>Fetch</h1>
      <p>
        The Fetch API provides a JavaScript interface for accessing and manipulating parts of the
        HTTP pipeline, such as requests and responses. It also provides a global fetch() method that
        provides an easy, logical way to fetch resources asynchronously across the network.
      </p>

      <p>
        This kind of functionality was previously achieved using XMLHttpRequest. Fetch provides a
        better alternative that can be easily used by other technologies such as Service Workers.
        Fetch also provides a single logical place to define other HTTP-related concepts such as
        CORS and extensions to HTTP.
      </p>

      <h2>Example using the MEMES API</h2>
      <p>
        Applying the concept above, you can get a list from memes using the
        <a href="https://api.imgflip.com/get_memes">Memes API</a>
      </p>
      <nuxt-content :document="examples[0]"></nuxt-content>

      <h4>Results</h4>
      <div v-for="meme of memes">
        <figure>
          <img :src="meme.url" :alt="meme.name" />
          <figcaption>{{ meme.name }} ({{ meme.id }})</figcaption>
        </figure>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data: () => ({
    memes: null,
  }),
  async asyncData({ $content }) {
    const examples = await $content('week10').sortBy('slug').fetch();
    return { examples };
  },
  async mounted() {
    const res = await window.fetch('https://api.imgflip.com/get_memes');
    const { data } = await res.json();
    this.memes = data.memes.filter(meme => meme.name !== 'Sleeping Shaq');
  },
};
</script>

<style lang="scss" scoped>
figure {
  height: 50%;
  width: 50%;

  img {
    height: auto;
    width: 100%;
  }
}
</style>
