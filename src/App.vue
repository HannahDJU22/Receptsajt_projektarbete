<template>
  <header>
    <h1>
      <MainHeader></MainHeader>
    </h1>
  </header>
  <nav id="nav">
    <Navbar />
  </nav>
  <main>
    <RouterView />
  </main>
  <footer>
    <MainFooter></MainFooter>
  </footer>
</template>

<script>
import Navbar from './components/Navbar.vue';
import { RouterLink, RouterView } from 'vue-router';
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';

export default {
  components: {
    Navbar,
    MainHeader,
    MainFooter,

  },
  data() {
    return {

    }
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
