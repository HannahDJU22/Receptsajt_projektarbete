<script>
import Navbar from './components/Navbar.vue';
import { RouterLink, RouterView } from 'vue-router'
import Recipe_desc from './components/Recipe_desc.vue';

export default{
components:{
  Navbar,
  Recipe_desc,
},
data(){
  return{
    heading: 'Lord of the Sprint',
  }
}
}
</script>

<template>
  <header>
    <h1>{{ heading }}</h1>
  </header>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <Navbar/>
  </nav>
  <main>
    <Recipe_desc/>
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
