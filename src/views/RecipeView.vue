<script>
import Ingredients from '../components/Ingredients.vue'
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
            ],
            selectedRecipe: this.$route.params.recipeId,
            listOfIngredients: [{ name: 'carrot', amount: '2', unit: 'pieces' }]
        }
    }
}
</script>
<template>
    <p>
        id:{{ selectedRecipe }}
    </p>
    <Ingredients :ingredients="listOfIngredients"></Ingredients>
</template>