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
            recipeIdToDisplay:this.$route.params.recipeId
        }
    }
}
</script>
<template>
   <Recipe :recipeId="recipeIdToDisplay"></Recipe>
</template>