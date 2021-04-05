<template>
  <div class="reading">
    <main class="container">
      <a class="back-btn" href="#" @click.prevent="$router.go(-1)">&larr; Back</a>
      <Nuxt />
    </main>
  </div>
</template>

<style lang="scss" scoped>
main {
  margin-top: 30px;
}
.back-btn {
  color: $primary;
  margin-bottom: 15px;
}
</style>
