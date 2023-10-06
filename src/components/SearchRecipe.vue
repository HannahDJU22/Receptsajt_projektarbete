<template>
    <div>
<input type="text" v-model="searchRecipe" @input="recipeSearch" placeholder="Sök recept">
    </div>
</template>

<script>
    export default {
      
        data(){
            return{
                searchRecipe: ''
            }
        },
    
    }
</script>

<style scoped>

</style>