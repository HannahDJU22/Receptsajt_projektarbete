<template>
    <div id="comment-form-box">
        <form v-if="!formSubmitted">
            <fieldset>
                <legend>
                    Lämna gärna en kommentar
                </legend>
                <label for="comment" id="form-block">
                    Kommentar:
                </label>
                <textarea id="comment" placeholder="Skriv din kommentar" name="comment" v-model="commentBody" required
                    rows="3" cols="50" :disabled="formSubmitted">
                </textarea>
                <label for="name" id="form-block">
                    Namn:
                </label>
                <input type="text" id="name" placeholder="Ditt namn" name="name" v-model="userName" required
                    :disabled="formSubmitted">
                <button type="button" @click="submitComment()" :disabled="formSubmitted">
                    Skicka kommentar
                </button>
                <p v-if="isError" class="error-msg">{{ errorMsg }}
                </p>
            </fieldset>
        </form>
        <div v-else="formSubmitted">
            <p id="confirm-comment" v-if="showConfirmation"> {{ userName }} - {{ confirmation }}</p>
        </div>
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
            confirmation: 'Tack för din kommentar!',
            errorMsg: 'Både namn och kommentar måste fyllas i!',
            showConfirmation: false,
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
                .then((response) => {
                    if(response.ok){
                        return response.json();
                    
                    }else{
                        throw new Error('FEL');
                       
                    }
                })
                .then(()=>{
                    this.formSubmitted=true;
                    this.showConfirmation=true;
                })
           
                .catch(()=>{
                    this.isError=true;
                    this.errorMsg='Något gick fel, din kommentar kunde inte skickas'
                })
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

#comment-form-box{
    text-align: left;
}

#name {

    margin-right: 20px;
}

#comment {
    display: block;
    width: 50%;
}

#form-block {
    display: block;
}

fieldset {
    border-color: rgb(145, 66, 9);
}

input,
textarea {
    background-color: rgb(248, 242, 183);
    border-color: rgb(247, 238, 160);
    border-style: none;
}

button {
    background-color: rgb(248, 196, 24);
    border-radius: 8px;
}
</style>