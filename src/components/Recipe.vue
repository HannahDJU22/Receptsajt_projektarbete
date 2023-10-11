<template>
  <div>
    <div v-if="loading" class="loading">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="recipe">
      <RecipeCard :recipe="recipe" class="card"/>
    </div>
    <CommentSection :recipe-id="recipeId" class="comment"/>
  </div>
</template>
  
<script>
import RecipeCard from './RecipeCard.vue';
import CommentSection from './CommentSection.vue';

export default {
    data() {
        return {
            loading: false,
            error: null,
            recipe: null,
        };
    },
    props: {
        recipeId: String
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.loading = true;
            this.error = null;
            this.recipe = null;

            fetch(`https://jau22-recept-grupp2-yiqamvjp984a.reky.se/recipes/${this.recipeId}`)
                .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
                .then((data) => {
                console.log(data);
                this.loading = false;
                this.recipe = data;
            })
                .catch((error) => {
                console.error('Error:', error);
                this.loading = false;
                this.error = 'Network error: ' + error.message;
            });
        },
    },
    components: {
      RecipeCard,
      CommentSection
    }
};
</script>

<style scoped>
.card{
    background-color: rgb(207, 207, 100);
}

.comment{
    background-color: rgb(243, 178, 171);
}
</style>
  