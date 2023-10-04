<template>
    <div>
<RecipeDescription/>
<Ingredients/>
<Instructions/>
    </div>
</template>

<script>
import RecipeDescription from './RecipeDescription.vue';
import Ingredients from './Ingredients.vue';
import Instructions from './Instructions.vue';

export default {
    components: { RecipeDescription, Ingredients, Instructions }
}
</script>

<style scoped></style>