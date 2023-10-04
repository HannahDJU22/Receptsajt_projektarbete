<script>
import Navbar from './components/Navbar.vue';
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/Header.vue';

export default{
components:{
  Navbar,
  Header,
  
},
data(){
  return{
    
  }
}
}
</script>

<template>
  <header>
    <h1><Header></Header></h1>
  </header>
  <nav>
    <Navbar/>
  </nav>
  <main>
    <RouterView />
  </main>
  <footer>
    footer placeholder
  </footer>
  
</template>

<style scoped>

header {
  grid-row: 1;
}

header, footer {
  grid-column: 1/3;
  text-align: center;
}

h1{
  font-size: 30px;
  color: blue;
}

main {
  grid-column: 2/3;
  grid-row: 2/3;
  text-shadow: none;
}
</style>
