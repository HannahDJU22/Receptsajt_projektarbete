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
  <h1>{{ heading }}</h1>
  <Navbar/>
</template>

<style scoped>
h1{
  font-size: 30px;
  text-align: center;
  color: blue;
}
</style>
