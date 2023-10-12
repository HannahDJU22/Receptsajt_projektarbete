<template>
    <div>
        <fieldset>
            <legend>Lämna gärna en kommentar</legend>
            <label for="name">Namn:</label><br>
            <input type="text" id="name" placeholder="Ditt namn" name="name" v-model="userName" required><br>
            <label for="name">Kommentar:</label><br>
            <input type="text" id="comment" placeholder="Skriv din kommentar" name="comment" v-model="commentBody" required>
            <button type="button" @click="submitComment()">Skicka kommentar</button>
            <p v-if="isError" class="error-msg">Både namn och kommentar måste fyllas i!</p>
        </fieldset>
    </div>
</template>

<script>

export default {
    data() {
        return {
            userName: null,
            commentBody: null,
            isError: false,
        };
    },
    props: {
        recipeId: String
    },
    methods: {
        submitComment() {
            if (!this.userName || !this.commentBody) {
                this.isError = true;
                return;
            }

            fetch(`https://jau22-recept-grupp2-yiqamvjp984a.reky.se/recipes/${this.recipeId}/comments`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    name: this.userName,
                    comment: this.commentBody

                })
            })
                .then((response) => response.json())
                .then((json) => console.log(json));
        }
    }
}
</script>

<style scoped>
.error-msg{
    color: red;
    font-size: 20px;
}
</style>