<template>
    <div>
        <h2>{{ desc }}</h2>
        <ul><li v-for="recipe in recipeData" :key="recipe.id">{{recipe.title  }}</li></ul>
    </div>
</template>

<script>
export default {
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