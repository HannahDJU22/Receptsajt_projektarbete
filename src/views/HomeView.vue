<template>
    <div id="home-welcome">
        <WelcomeText :text="homeText" />
    </div>
    <nav id="nav">
    <Navbar />
  </nav>
    <main id="main">
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
        document.getElementById('app-main').style.display = null;
        this.$watch(
            () => this.$route.params,
            (toParams) => {
                this.selectedCategory = toParams.categoryId;
            }
        );
    }
}
</script>