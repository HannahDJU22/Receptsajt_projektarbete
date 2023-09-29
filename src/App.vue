<script>
import Navbar from './components/Navbar.vue';
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
  <h1>{{ heading }}</h1>
  <Navbar/>
  <Recipe_desc/>
</template>

<style scoped>
h1{
  font-size: 30px;
  text-align: center;
  color: blue;
}
</style>
