<template>
    <div>
        <h3>{{ message }}</h3>
        <ul>
            <li v-for="item in apiData" :key="item.id">
                <Category :name="item.name" />
            </li>
            <li>
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/recipe/1">Recipe</RouterLink>
            </li>
        </ul>
    </div>
</template>

<script>
import Category from './Category.vue';  

export default {
    data() {
        return {
            message: 'Uppstart av navbar',
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
    color: crimson
}</style>