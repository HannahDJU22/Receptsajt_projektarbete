<template>
    <div>
<WelcomeText></WelcomeText>
    </div>
    <p>
<SearchRecipe></SearchRecipe>
    </p>
    <main>
        <RecipeDescription />
    </main>
</template>

<script>
import RecipeDescription from '../components/RecipeDescription.vue';
import WelcomeText from '../components/WelcomeText.vue';
import SearchRecipe from '../components/SearchRecipe.vue';

export default {
    components: {
        WelcomeText,
        SearchRecipe,
        RecipeDescription,
    },
    data() {
        return {

        }
    }
}
</script>