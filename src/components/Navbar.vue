<template>
    <header>
        <RouterLink to="/">Home</RouterLink>  |   <RouterLink to="/recipe/1">Recipe</RouterLink>
    </header>
    <div>
        <h3>{{ message }}</h3>
        <ul>
            <li v-for="item in apiData" :key="item.id">
                
                <RouterLink :to="`/category/${item.name}`" @click="makeBold(item.name)">
                    <Category :name="item.name" :count="item.count" />
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
            categories: document.getElementsByClassName("category")
        };
    },
    created() {
        fetch('https://jau22-recept-grupp2-yiqamvjp984a.reky.se/categories')
            .then(response => response.json())
            .then(data => { this.apiData = data; })
            .catch(error => { console.error('An error occured: ', error); });
    },
    methods: {
            makeBold(selectedCategory) {
                for (const element of this.categories) {
                        element.classList.remove("bolded")
                    }
                let currentCategory = document.getElementById(selectedCategory)
                currentCategory.classList.add("bolded")
            }
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
}
</style>