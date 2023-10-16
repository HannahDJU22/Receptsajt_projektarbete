<template>
    <div id="top-div">
        <div v-if="loading" class="loading">Loading...</div>
        <div v-if="error" class="error">{{ error }}</div>
        <div v-if="recipe">
            <div class="card">
                <RecipeCard :recipe="recipe" />
            </div>
            <div class="how-to-with-what">
                <div class="ingredients">
                    <h4>Ingredienser</h4>
                    <Ingredients :ingredients="recipe.ingredients" />
                </div>
                <div class="instructions">
                    <h4>Gör så här:</h4>
                    <Instructions :recipe="recipe" />
                </div>
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
        }
    },
    components: {
        RecipeCard,
        CommentSection,
        Ingredients,
        Instructions,
        UserRating
    }
}
</script>

<style scoped>
#top-div {
    padding: 5px;
}

.card {
    padding: 5px;
    margin-bottom: 5px;
    background-color: rgb(240, 230, 140);
    border: 3px solid rgb(218, 165, 32);
    border-radius: 5px;
}

.comment {
    padding: 5px;
    margin-bottom: 5px;
    background-color: rgb(240, 230, 140);
    border: 3px solid rgb(218, 165, 32);
    border-radius: 5px;
}

.how-to-with-what {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.ingredients {
    flex: 1;
    margin-bottom: 5px;
    background-color: rgb(240, 230, 140);
    border: 3px solid rgb(218, 165, 32);
    border-radius: 5px;
    padding: 5px;
}

.instructions {
    flex: 1;
    padding: 5px;
    margin-bottom: 5px;
    background-color: rgb(240, 230, 140);
    border: 3px solid rgb(218, 165, 32);
    border-radius: 5px;
}

.rating {
    margin-bottom: 5px;
    background-color: rgb(240, 230, 140);
    border: 3px solid rgb(218, 165, 32);
    border-radius: 5px;
}
</style>
  