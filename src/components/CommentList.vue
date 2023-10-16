<template>
    <div>
        <ul>
            <li v-for="comment in comments" :key="comment._id">
                <div class="comment-list-box">
                    <div class="comment-list-name"> {{ comment.name }}</div>
                    <div class="comment-list-date">{{ formatDate(comment.createdAt) }}</div>
                </div>
                <div class="comment-list-comment">{{ comment.comment }}</div>
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
            comments: []
        };
    },
    methods: {
        formatDate(commentDate) {
            const dateFromAPI = new Date(commentDate);
            const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
            return dateFromAPI.toLocaleDateString('sv-SE', dateOptions);
        }
    },
    created() {
        fetch(`https://jau22-recept-grupp2-yiqamvjp984a.reky.se/recipes/${this.recipeId}/comments`)
            .then(response => response.json())
            .then(data => {
                this.comments = data.slice().sort((a, b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                })
            });
    }
}
</script>

<style scoped>
ul {
    padding-inline-start: 0;
    width: 75%;
}

li {
    list-style: none;
    border-radius: 10px;
    margin: 5px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    background-color: rgb(247, 240, 183);
}

.comment-list-box {
    display: flex;
    justify-content: space-between;
}

.comment-list-name {
    font-weight: bold;
    font-size: small;
}

.comment-list-comment {
    font-size: smaller;
    text-align: left;
}

.comment-list-date {
    text-align: right;
    font-size: small;
}
</style>