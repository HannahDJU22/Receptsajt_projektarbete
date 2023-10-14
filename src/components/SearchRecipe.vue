<template>
    <div>
        <input type="search" v-model="searchRecipe" @input="$emit('searchFieldUpdate', this.searchRecipe)" placeholder="Sök recept">
    </div>
</template>

<script>
export default {

    data() {
        return {
            searchRecipe: ''
        }
    },

}
</script>

<style scoped>
div {
    padding: 5px;
    margin: 5px;
    
}
input{
    background-color: rgb(247, 238, 160);
    width: 35%;
    height: 30px;
    border-radius: 7px;
    border-color: rgb(247, 238, 160);
    border-style: none;
}
</style>