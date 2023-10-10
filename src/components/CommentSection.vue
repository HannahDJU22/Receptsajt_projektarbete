<template>
    <div>
        <h2>Kommentarer:</h2>
        <CommentForm :recipe-id="recipeId"/>
        <CommentList :recipe-id="recipeId"/>
    </div>
</template>

<script>
import CommentForm from './CommentForm.vue';
import CommentList from './CommentList.vue';
export default {
    components: {
        CommentForm,
        CommentList
    },
    props: {
        recipeId: String
    }
}
</script>

<style scoped></style>