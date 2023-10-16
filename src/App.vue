<template>
  <header>
    <h1>
      <MainHeader />
    </h1>
  </header>
  <nav>
    <Navbar />
  </nav>
  <main>
    <RouterView />
  </main>
  <footer>
    <MainFooter />
  </footer>
</template>

<script>
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';

export default {
  components: {
    Navbar,
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
