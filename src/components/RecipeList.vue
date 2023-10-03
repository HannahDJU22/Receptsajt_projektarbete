<template>
    <div>
<Recipe_desc/>
<Ingredients/>
<Instructions/>
    </div>
</template>

<script>
import Recipe_desc from './Recipe_desc.vue';
import Ingredients from './Ingredients.vue';
import Instructions from './Instructions.vue';

export default {
    components: { Recipe_desc, Ingredients, Instructions }
}
</script>

<style scoped></style>