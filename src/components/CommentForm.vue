<template>
    <div>
        <form v-if="!formSubmitted">
            <fieldset>
                <legend>
                    Lämna gärna en kommentar
                </legend>
                <label for="comment" id="form-block">
                    Kommentar:
                </label>
                <textarea id="comment" placeholder="Skriv din kommentar" name="comment" v-model="commentBody" required rows="3" cols="50">
                </textarea>
                <label for="name" id="form-block">
                    Namn:
                </label>
                <input type="text" id="name" placeholder="Ditt namn" name="name" v-model="userName" required>
                <button type="button" @click="submitComment()">
                    Skicka kommentar
                </button>
                <p v-if="isError" class="error-msg">
                    Både namn och kommentar måste fyllas i!
                </p>
            </fieldset>
        </form>
        <form v-else>
            <p id="confirm-comment"> {{ userName }} - Tack för din kommentar!</p>
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            userName: null,
            commentBody: null,
            timestamp: null,
            isError: false,
            formSubmitted: false,
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
                    comment: this.commentBody,
                })
            })
                .then((response) => response.json())
                .then((json) => console.log(json));

            this.formSubmitted = true;
        }
    }
}
</script>

<style scoped>
.error-msg {
    color: red;
    font-size: 20px;
}

#confirm-comment {
    font-size: 20px;
    font-style: bold;
    color: black;
}

#name {
    
    margin-right: 20px;
}

#comment {
    display: block;
    width: 50%;
}
#form-block{
    display: block;
}

</style>