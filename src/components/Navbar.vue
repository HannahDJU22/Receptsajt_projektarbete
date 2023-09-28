<template>
    <div>
        <h3>{{ message }}</h3>
<ul>
    <li v-for="item in apiData" :key="item.id">{{ item.name }}</li>
</ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Uppstart av navbar',
            apiData: [],

        }
    },
    created(){
        fetch('https://jau22-recept-grupp2-yiqamvjp984a.reky.se/categories')
        .then(response=>response.json())
        .then(data=>{this.apiData=data;})
        .catch(error=>{console.error('An error occured: ', error)})
    }
}
</script>

<style scoped>
h3 {
    color: crimson
}
</style>