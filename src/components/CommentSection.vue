<template>
    <div>
        <h2>Kommentarer:</h2>
        <CommentForm />
        <CommentList />
    </div>
</template>

<script>
import CommentForm from './CommentForm.vue';
import CommentList from './CommentList.vue';
export default {
    components: {
        CommentForm,
        CommentList
    }
}
</script>

<style scoped></style>