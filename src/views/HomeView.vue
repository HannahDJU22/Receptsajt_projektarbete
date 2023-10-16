<template>
    <div>
        <WelcomeText :text="homeText" />
    </div>
    <main>
        <RecipeCardList :category=selectedCategory />
    </main>
</template>

<script>
import RecipeCardList from '../components/RecipeCardList.vue';
import WelcomeText from '../components/WelcomeText.vue';

export default {
    components: {
        WelcomeText,
        RecipeCardList
    },
    data() {
        return {
            selectedCategory: this.$route.params.categoryId,
            homeText: "Här kan du ta del av Davids magiska och veganska recept! ENJOY!"
        };
    },
    created() {
        this.$watch(
            () => this.$route.params,
            (toParams) => {
                this.selectedCategory = toParams.categoryId;
            }
        );
    }
}
</script>