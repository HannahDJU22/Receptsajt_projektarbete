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
                let categories = document.getElementsByClassName("category")
                for (const element of categories) {
                        element.classList.remove("bolded")
                }
                if (this.selectedCategory !== undefined) {
                    let currentCategory = document.getElementById(this.selectedCategory)
                    currentCategory.classList.add("bolded")
                }
            }
        )
    }
}
</script>