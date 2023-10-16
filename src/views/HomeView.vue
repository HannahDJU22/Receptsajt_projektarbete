<template>
    <div>
        <WelcomeText :text="homeText" />
    </div>
    <nav>
    <Navbar />
  </nav>
    <main>
        <RecipeCardList :category=selectedCategory />
    </main>
</template>

<script>
import RecipeCardList from '../components/RecipeCardList.vue';
import WelcomeText from '../components/WelcomeText.vue';
import Navbar from '../components/Navbar.vue';

export default {
    components: {
        WelcomeText,
        RecipeCardList,
        Navbar
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