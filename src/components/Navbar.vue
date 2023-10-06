<template>
    <header>
        <RouterLink to="/" @click="makeBold(null)">Home</RouterLink>
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
            let categories = document.getElementsByClassName("category")
            for (const element of categories) {
                    element.classList.remove("bolded")
                }
            if (selectedCategory !== null) {
                let currentCategory = document.getElementById(selectedCategory)
                currentCategory.classList.add("bolded")
            }
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