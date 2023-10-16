<template>
    <div class="recipe-grid">
        <h3 class="grid-item item-title">{{ recipe.title }}</h3>
        <RecipeImage :recipe="recipe" class="grid-item item-img"/>
        <DescriptionShort :recipe="recipe" class="grid-item item-desc"/>
        <UserRating :userRating="recipe.avgRating" class="grid-item item-rating"/>
        <IngredientCount :ingredientCount="recipe.ingredients.length" class="grid-item item-ingred-count"/>
        <CookingTime :recipe="recipe" class="grid-item item-time"/>
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
        RecipeImage
    },
    props: {
        recipe: Object
    }
}
</script>

<style scoped>
.recipe-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    grid-template-rows: repeat(3, auto);
}

.item-title {
    grid-row: 1;
    grid-column: 1;
    color: rgb(29, 14, 14);
    text-decoration: underline;
    font-size: large;
    font-weight: bold;
}

.item-rating {
    grid-row: 1;
    grid-column: 2;
}

.item-desc {
    grid-row: 2;
    grid-column: 1;
}

.item-img {
    grid-row: 2;
    grid-column: 2;
}

.item-ingred-count {
    grid-row: 3;
    grid-column: 1;
    font-style: italic;
}

.item-time {
    grid-row: 3;
    grid-column: 2;
    font-style: italic;
}
</style>