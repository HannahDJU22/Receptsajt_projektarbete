<template>
    <div>
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
    </div>
</template>

<script>
import CookingTime from './CookingTime.vue';
import DescriptionShort from './DescriptionShort.vue';
import IngredientCount from './IngredientCount.vue';
import UserRating from './UserRating.vue';
import RecipeImage from './RecipeImage.vue';

    export default {
        components: {
            CookingTime,
            DescriptionShort,
            IngredientCount,
            UserRating,
            RecipeImage,
        },
        props: {
            recipe: Object
        }
    }
</script>

<style scoped>
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
}
</style>