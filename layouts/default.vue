<template>
  <div>
    <Header />
    <main class="px px-m-5x py">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
main {
  min-height: 100vh;
}
</style>
