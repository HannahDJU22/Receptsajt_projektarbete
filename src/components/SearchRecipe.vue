<template>
    <div>
        <input type="text" v-model="searchRecipe" @input="$emit('searchFieldUpdate', this.searchRecipe)" placeholder="Sök recept">
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
</style>