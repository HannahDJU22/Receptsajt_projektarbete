<script>
import Ingredients from '../components/Ingredients.vue'
import Recipe from '../components/Recipe.vue'
export default {
    components: {
        Ingredients
    },
    data() {
        return {
            recipes: [
                { id: 1, name: 'Lentil spinach soup' },
                { id: 2, name: 'Kung pao tofu' },
                { id: 3, name: 'Tarragon zucchini casserole' }
            ]
        }
    },
    methods: {
        getRecipeNameById(recipeId) {

            const recipe = this.recipes.find((r) => r.id === parseInt(recipeId));

            return recipe ? recipe.name : 'Recipe not found';
        }
    }
}
</script>
<template>
    <p>
    <recipe/>
    <p>{{ getRecipeNameById($route.params.recipeId) }}</p>
    </p>
</template>