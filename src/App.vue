<template>
  <header id="header">
    <h1>
      <MainHeader />
    </h1>
  </header>
  <main id="app-main">
    <RouterView />
  </main>
  <footer id="footer">
    <MainFooter />
  </footer>
</template>

<script>
import { RouterView } from 'vue-router';
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';

export default {
  components: {
    MainHeader,
    MainFooter
  }
}
</script>

<style scoped>
h1 {
  font-size: 35px;
  color: rgb(58, 43, 3);
  font-weight: bolder;
}
</style>
