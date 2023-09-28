<script>
import Navbar from './components/Navbar.vue';

export default{
components:{
  Navbar,
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
  <Navbar/>
  <main>
    <ul>
      <li>
        Recept 1
      </li>
      <li>
        Recept 2
      </li>
      <li>
        Recept 3...
      </li>
    </ul>
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
