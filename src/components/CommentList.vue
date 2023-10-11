<template>
    <div>
        <ul>
            <li v-for="comment in comments" :key="comment._id">{{ comment.name }}: {{ comment.comment }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        recipeId: String
    },
    data() {
        return {
            comments: [],
        }
    },
    created() {
        fetch(`https://jau22-recept-grupp2-yiqamvjp984a.reky.se/recipes/${this.recipeId}/comments`)
        .then(response => response.json())
        .then(data => {
            this.comments = data
        })
    }
}
</script>

<style scoped></style>