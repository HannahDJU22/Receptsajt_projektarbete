<template>
    <div>
<WelcomeText></WelcomeText>
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
import { makeBold } from '../components/Category.vue';

export default {
    components: {
        WelcomeText,
        SearchRecipe,
        RecipeDescription,
    },
    data() {
        return {
            selectedCategory: this.$route.params.categoryId
        }
    },
    created() {
        this.$watch (
            () => this.$route.params,
            (toParams) => {
                this.selectedCategory = toParams.categoryId
                makeBold(this.selectedCategory)
            }
        )
    },
}
</script>