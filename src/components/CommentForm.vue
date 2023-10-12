<template>
    <div>
        <fieldset>
            <legend>Lämna gärna en kommentar</legend>
        <label for="name">Namn:</label><br>
        <input type="text" id="name" placeholder="Ditt namn" name="name" v-model="userName"><br>
        <label for="name">Kommentar:</label><br>
        <input type="text" id="comment" placeholder="Skriv din kommentar" name="comment" v-model="commentBody">
        <button type="button" @click="submitComment()">Skicka kommentar</button>
    </fieldset>
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