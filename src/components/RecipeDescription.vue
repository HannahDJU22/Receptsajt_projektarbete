<template>
    <div>
        <div v-for="recipe in recipeData" :key="recipe._id" class="recipe-block">
            <RouterLink :to="{ name: 'recipe', params: { recipeId: recipe._id }}">
                <div class="recipe-grid">
                    <div class="grid-row-1">
                        <div class="grid-row-1-left">
                            <h3>{{ recipe.title }}</h3>
                            <UserRating />
                        </div>
                        <div class="grid-row-1-right">
                            <RecipeImage />
                        </div>
                    </div>
                    <div class="grid-row-2">
                        <DescriptionShort :recipe="recipe" />
                    </div>
                    <div class="grid-row-3">
                        <div class="grid-row-3-left">
                            <IngredientCount :ingredientCount="recipe.ingredients.length" />
                        </div>
                        <div class="grid-row-3-center">
                            <CookingTime :recipe="recipe" />
                        </div>
                        <div class="grid-row-3-right">
                        </div>
                    </div>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<script>
import CookingTime from './CookingTime.vue';
import DescriptionShort from './DescriptionShort.vue';
import IngredientCount from './IngredientCount.vue';
import UserRating from './UserRating.vue';
import RecipeImage from './RecipeImage.vue';
import { RouterLink } from 'vue-router';

export default {
    components: {
    CookingTime,
    DescriptionShort,
    IngredientCount,
    UserRating,
    RecipeImage,
    RouterLink
},
    props: {
        category: String
    },
    data() {
        return {
            recipeData: [],
        }
    },
    created() {
        fetch('https://jau22-recept-grupp2-yiqamvjp984a.reky.se/recipes')
            .then(response => response.json())
            .then(data => { this.recipeData = data })

        this.$watch(
            () => this.category,
            () => {
                if (this.category !== undefined) {
                    fetch(`https://jau22-recept-grupp2-yiqamvjp984a.reky.se/categories/${this.category}/recipes`)
                        .then(response => response.json())
                        .then(data => { this.recipeData = data })
                }
                else {
                    fetch('https://jau22-recept-grupp2-yiqamvjp984a.reky.se/recipes')
                        .then(response => response.json())
                        .then(data => { this.recipeData = data })
                }
            })
    },
}
</script>

<style scoped>
.recipe-block {
    background-color: beige;
    border: 1px solid darkgrey;
    padding: 10px;
    margin: 10px;
}

.recipe-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-template-rows: repeat(3, auto);
}

.grid-row-1 {
    grid-column: span 3;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.grid-row-1-left {
    color: rgb(107, 25, 25);
}

.grid-row-1-right {
    background-color: aqua;
    border: 1px solid black;
    border-radius: 10px;
}

.grid-row-2 {
    grid-column: span 2;
}

.grid-row-3 {
    grid-column: span 3;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.grid-row-3-left {
    font-style: italic;
}

.grid-row-3-center {
    font-style: italic;
}

.grid-row-3-right {
    font-style: bold;
}</style>