<template>
    <div>
        <p>
            <SearchRecipe @search-field-update="fetchRecipes"/>
        </p>
        <div v-for="recipe in recipeData" :key="recipe._id" class="recipe-block">
            <RouterLink :to="{ name: 'recipe', params: { recipeId: recipe._id }}">
                <RecipeCard :recipe="recipe"/>
            </RouterLink>
        </div>
    </div>
</template>

<script>
import RecipeCard from './RecipeCard.vue';
import SearchRecipe from './SearchRecipe.vue';
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
        this.fetchRecipes('');
        this.$watch(() => this.category, () => {
            this.fetchRecipes('');
        });
    },
    methods: {
        fetchRecipes(query) {
            if (this.category !== undefined) {
                fetch(`https://jau22-recept-grupp2-yiqamvjp984a.reky.se/categories/${this.category}/recipes?query=${query}`)
                    .then(response => response.json())
                    .then(data => { this.recipeData = data; });
            }
            else {
                fetch(`https://jau22-recept-grupp2-yiqamvjp984a.reky.se/recipes?query=${query}`)
                    .then(response => response.json())
                    .then(data => { this.recipeData = data; });
            }
        }
    },
    components: {
        RecipeCard,
        RouterLink,
        SearchRecipe,
    }
}
</script>

<style scoped>
.recipe-block {
    background-color: rgb(240,230,140);
    border: 3px solid rgb(218,165,32);
    border-radius: 7px;
    padding: 5px;
    margin: 5px;
}
</style>