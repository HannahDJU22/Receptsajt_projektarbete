<template>
    <div>
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" v-model="userName"><br>
        <label for="name">Kommentar:</label><br>
        <input type="text" id="comment" name="comment" v-model="commentBody"><br>
        <button type="button" @click="submitComment()">Submit</button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            userName: null,
            commentBody: null
        };
    },
    props: {
        recipeId: String
    },
    methods: {
        submitComment() {
            fetch(`https://jau22-recept-grupp2-yiqamvjp984a.reky.se/recipes/${this.recipeId}/comments`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                  name:this.userName,
                  comment:this.commentBody

                })
            })
                .then((response) => response.json())
                .then((json) => console.log(json));
        }
    }
}
</script>

<style scoped></style>