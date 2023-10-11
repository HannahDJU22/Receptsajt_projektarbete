<template>
    <header>
        <RouterLink to="/">Home</RouterLink>
    </header>
    <div>
        <h3>{{ message }}</h3>
        <ul>
            <li v-for="item in apiData" :key="item.id">
                
                <RouterLink :to="`/category/${item.name}`">
                    <Category :name="item.name" :count="item.count" :is-active="this.$route.params.categoryId == item.name"/>
                </RouterLink>
            </li>
        </ul>
    </div>
</template>

<script>
import Category from './Category.vue';

export default {
    data() {
        return {
            message: 'Receptkategorier',
            apiData: [],
        };
    },
    created() {
        fetch('https://jau22-recept-grupp2-yiqamvjp984a.reky.se/categories')
            .then(response => response.json())
            .then(data => { this.apiData = data; })
            .catch(error => { console.error('An error occured: ', error); });
    },
    components: { Category }
}


</script>

<style scoped>
:root {
    grid-column: 1/3;
    grid-row: 2;
}

h3 {
    color: rgb(32, 34, 196)
}
</style>