<template>
    <div>
<WelcomeText :text="homeText" />
    </div>
    <p>
<SearchRecipe></SearchRecipe>
    </p>
    <main>
        category id: {{ selectedCategory }}
        <RecipeDescription :category=selectedCategory />
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
            selectedCategory: this.$route.params.categoryId,
            homeText: "Här kan du ta del av Davids magiska och veganska recept! ENJOY!",
        }
    },
    created() {
        this.$watch (
            () => this.$route.params,
            (toParams) => {
                this.selectedCategory = toParams.categoryId
            }
        )
    }
}
</script>