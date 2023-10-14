<template>
    <header>
<h1>{{ welcome }}</h1>
    </header>
</template>

<script>
    export default {
        data(){
            return{
                welcome: 'Veganska recept by David'
            }
        }
    }
</script>

<style scoped>
header{
    background-image: url('https://cdn.pixabay.com/photo/2016/07/15/11/56/wheat-1518769_640.jpg');
}
</style>