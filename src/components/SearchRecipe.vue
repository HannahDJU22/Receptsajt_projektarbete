<template>
    <div id="search-box">
        <input type="search" v-model="searchRecipe" @input="$emit('searchFieldUpdate', this.searchRecipe)"
            placeholder="Sök recept">
        <FontAwesomeIcon id="search-icon" :icon="['fas', 'magnifying-glass']" />
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    data() {
        return {
            searchRecipe: ''
        };
    },
    components: { FontAwesomeIcon }
}
</script>

<style scoped>
div {
    margin: 8px;
}

input {
    background-color: rgb(247, 238, 160);
    width: 50%;
    height: 30px;
    border-radius: 7px;
    border-color: rgb(247, 238, 160);
    border-style: none;
}

#search-icon {
    height: 20px;
    padding-left: 5px;
}
</style>
