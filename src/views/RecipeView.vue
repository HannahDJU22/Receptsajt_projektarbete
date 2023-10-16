<template>
    <div>
        <WelcomeText :text="recipeText" />
    </div>
    <Recipe :recipeId="recipeIdToDisplay" />
</template>

<script>
import Ingredients from '../components/Ingredients.vue';
import Recipe from '../components/Recipe.vue';
import WelcomeText from '../components/WelcomeText.vue';

export default {
    components: {
        Ingredients,
        Recipe,
        WelcomeText
    },
    data() {
        return {
            recipeIdToDisplay: this.$route.params.recipeId,
            recipeText: "Vad roligt att du är intresserad av just detta recept. Lämna gärna en kommentar och ett betyg när du är klar!"
        };
    }
}
</script>
