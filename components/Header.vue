<template>
  <header ref="header" class="px px-m-5x py mb">
    <div>
      <router-link to="/" custom v-slot="{ navigate }">
        <h1 @click="navigate" @keypress.enter="navigate" role="link">WDD Portfolio</h1>
      </router-link>
      <a v-if="goBack" href="#" @click.prevent="$router.go(-1)">&larr; Back</a>
    </div>
    <img src="/wdd-portfolio/logo.png" height="60" alt="Logo from project" class="logo" />
  </header>
</template>

<script>
export default {
  computed: {
    goBack() {
      return this.$route.path !== '/';
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #fff;
  box-shadow: 1px 3px 0 -1px #0000001a;
  display: flex;
  justify-content: space-between;
}
</style>
