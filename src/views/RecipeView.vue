<script>
import Ingredients from '../components/Ingredients.vue'
import Recipe from '../components/Recipe.vue'
export default {
    components: {
        Ingredients,
        Recipe
    },
    data() {
        return {
            recipes: [
                { id: 1, name: 'Lentil spinach soup' },
                { id: 2, name: 'Kung pao tofu' },
                { id: 3, name: 'Tarragon zucchini casserole' }
            ],
            selectedRecipe: this.$route.params.recipeId,
            listOfIngredients: [{ name: 'carrot', amount: '2', unit: 'pieces' }]
        }
    },
    methods:{
        getRecipeName(recipeId){
            const recipe = this.recipes.find(r => r.id===parseInt(recipeId))
            return recipe ? recipe.name : 'Recept saknas'
        }
    }
}
</script>
<template>
    <p>
        Valt recept: {{ getRecipeName(selectedRecipe) }}
    </p>
    <Ingredients :ingredients="listOfIngredients"></Ingredients>
</template>