<template>
    <div>
<WelcomeText></WelcomeText>
    </div>
    <p>
<SearchRecipe></SearchRecipe>
    </p>
    <main>
        <Recipe_desc />
    </main>
</template>

<script>
import Recipe_desc from '../components/Recipe_desc.vue';
import WelcomeText from '../components/WelcomeText.vue';
import SearchRecipe from '../components/SearchRecipe.vue';

export default {
    components: {
        WelcomeText,
        SearchRecipe,
        Recipe_desc,
    },
    data() {
        return {

        }
    }
}
</script>