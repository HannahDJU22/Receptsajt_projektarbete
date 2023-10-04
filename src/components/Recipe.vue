<template>
    <div>
      <div v-if="loading" class="loading">Loading...</div>
      <div v-if="error" class="error">{{ error }}</div>
      <div v-if="recipe">
        <h1>{{ recipe.name }}</h1>
        <p>{{ recipe.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        loading: false,
        error: null,
        recipe: null,
      };
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        this.loading = true;
        this.error = null;
        this.recipe = null;
  
        const recipeId = this.$route.params.recipeId;
        fetch(`https://jau22-recept-grupp2-yiqamvjp984a.reky.se/recipes/${recipeId}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            this.loading = false;
            this.recipe = data;
          })
          .catch((error) => {
            this.loading = false;
            this.error = 'Network error: ' + error.message;
          });
      },
    },
  };
  </script>
  