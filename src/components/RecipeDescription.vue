<template>
    <div>
        <h2>{{ desc }}</h2>
        <ul><li v-for="recipe in recipeData" :key="recipe.id">{{recipe.title  }} <CookingTime :recipe="recipe"/><DescriptionShort :recipe="recipe"/>
        <IngredientCount :ingredientCount="recipe.ingredients.length"/>
        <UserRating />
        </li>
        </ul>
    </div>
</template>

<script>
import CookingTime from './CookingTime.vue';
import DescriptionShort from './DescriptionShort.vue';
import IngredientCount from './IngredientCount.vue';
import UserRating from './UserRating.vue';

export default {
    components: {
    CookingTime,
    DescriptionShort,
    IngredientCount,
    UserRating,
    },
    props: {
        category: String
    },
    data() {
        return {
            desc: 'RECEPT:',
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

<style scoped></style>