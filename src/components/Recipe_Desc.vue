<template>
    <div>
        <h2>{{ desc }}</h2>
        <ul><li v-for="recipe in recipeData" :key="recipe.id">{{recipe.title  }} <CookingTime :recipe="recipe"/><Description_Short :recipe="recipe"/>
        <IngredientCount :ingredientCount="recipe.ingredients.length"/>
        </li>
        </ul>
    </div>
</template>

<script>
import CookingTime from './CookingTime.vue';
import Description_Short from './Description_Short.vue';
import IngredientCount from './IngredientCount.vue';

export default {
    components:{
    CookingTime,
    Description_Short,
    IngredientCount,
},
    data() {
        return {
            desc: 'Recept:',
            recipeData: [],
        }
    },
    created() {
        fetch('https://jau22-recept-grupp2-yiqamvjp984a.reky.se/recipes')
            .then(response => response.json())
            .then(data => { this.recipeData = data })
    },
}
</script>

<style scoped></style>