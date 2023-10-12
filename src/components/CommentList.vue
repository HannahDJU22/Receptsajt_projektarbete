<template>
    <div>
        <ul>
            <li v-for="comment in comments" :key="comment._id">
                <div class="list-name"> {{ comment.name }}</div>
                <div class="list-comment">{{ comment.comment }}</div>
            </li>
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

<style scoped>
ul{
    padding-inline-start: 0;
    width: 50%;
}
li {
    list-style: none;
    border-radius: 10px;
    margin: 5px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    background-color: rgb(230, 230, 211);
}
.list-name{
    font-weight: bold;
    font-size: small;
}
.list-comment{
    font-size: smaller;
}
</style>