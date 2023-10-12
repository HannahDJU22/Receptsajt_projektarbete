<template>
  <div>
    <div v-if="loading" class="loading">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="recipe">
        <div class="card">
            <RecipeCard :recipe="recipe"/>
        </div>
        <div class="ingredients">
            <h4>Ingredienser</h4>
            <Ingredients :ingredients="recipe.ingredients" />
        </div>
        <div class="instructions">
            <h4>Gör så här:</h4>
            <Instructions :recipe="recipe" />
        </div>
        <div class="comment">
            <CommentSection :recipe-id="recipeId" />
        </div>
        <div class="rating">
            <UserRating />
        </div>
    </div>
  </div>
</template>
  
<script>
import RecipeCard from './RecipeCard.vue';
import CommentSection from './CommentSection.vue';
import Ingredients from './Ingredients.vue';
import Instructions from './Instructions.vue';
import UserRating from './UserRating.vue';

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
    CommentSection,
    Ingredients,
    Instructions,
    UserRating
}
};
</script>

<style scoped>
div{
padding: 5px;
}
.card{
    background-color: rgb(218, 218, 179);
    margin-bottom: 5px;
}

.comment{
    background-color: rgb(160, 153, 153);
}
.ingredients{
    background-color: rgb(218, 218, 200);
    margin-bottom: 5px;;
}
.instructions{
    background-color: rgb(241, 213, 176);
    margin-bottom: 5px;
}
.rating{
    background-color: rgb(175, 221, 240);
    margin-top: 5px;
}
</style>
  