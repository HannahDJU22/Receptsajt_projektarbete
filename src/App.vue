<script>
import Navbar from './components/Navbar.vue';
import { RouterLink, RouterView } from 'vue-router';
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';

export default{
components:{
  Navbar,
  MainHeader,
  MainFooter,
  
},
data(){
  return{
    
  }
}
}
</script>

<template>
  <header>
    <h1><MainHeader></MainHeader></h1>
  </header>
  <nav>
    <Navbar/>
  </nav>
  <main>
    <RouterView />
  </main>
  <footer>
    <MainFooter></MainFooter>
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
  font-size: 35px;
  color: rgb(58, 43, 3);
  font-weight: bolder;
}

main {
  grid-column: 2/3;
  grid-row: 2/3;
  text-shadow: none;
}


</style>
