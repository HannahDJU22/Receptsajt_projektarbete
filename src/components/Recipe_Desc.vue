<template>
    <div>
        <h2>{{ desc }}</h2>
        <ul><li v-for="recipe in recipeData" :key="recipe.id">{{recipe.title  }} <CookingTime :recipe="recipe"/></li>
        </ul>
    </div>
</template>

<script>
import CookingTime from './CookingTime.vue';

export default {
    components:{
        CookingTime,
    },
    data() {
        return {
            desc: 'Receptnamn:',
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