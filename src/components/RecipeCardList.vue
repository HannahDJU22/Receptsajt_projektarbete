<template>
    <div>
        <div v-for="recipe in recipeData" :key="recipe._id" class="recipe-block">
            <RouterLink :to="{ name: 'recipe', params: { recipeId: recipe._id }}">
                <RecipeCard :recipe="recipe"/>
            </RouterLink>
        </div>
    </div>
</template>

<script>
import RecipeCard from './RecipeCard.vue'
import { RouterLink } from 'vue-router';

export default {
    props: {
        category: String
    },
    data() {
        return {
            recipeData: [],
        };
    },
    created() {
        fetch('https://jau22-recept-grupp2-yiqamvjp984a.reky.se/recipes')
            .then(response => response.json())
            .then(data => { this.recipeData = data; });
        this.$watch(() => this.category, () => {
            if (this.category !== undefined) {
                fetch(`https://jau22-recept-grupp2-yiqamvjp984a.reky.se/categories/${this.category}/recipes`)
                    .then(response => response.json())
                    .then(data => { this.recipeData = data; });
            }
            else {
                fetch('https://jau22-recept-grupp2-yiqamvjp984a.reky.se/recipes')
                    .then(response => response.json())
                    .then(data => { this.recipeData = data; });
            }
        });
    },
    components: {
        RecipeCard,
        RouterLink
    }
}
</script>

<style scoped>
.recipe-block {
    background-color: beige;
    border: 1px solid darkgrey;
    padding: 10px;
    margin: 10px;
}
</style>