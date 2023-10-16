<template>
        <h2>Vad tyckte du om receptet? Klicka på en stjärna för att ge ditt omdöme!</h2>
</template>

<script>
export default {
    data() {
        return {
            rating: null,
        };
    },
    props: {
        recipeId: String
    },
    methods: {
        submitRating() {
            fetch(`https://jau22-recept-grupp2-yiqamvjp984a.reky.se/recipes/${this.recipeId}/ratings`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    rating: this.rating
                })
            })
                .then((response) => response.json())
                .then((json) => console.log(json));

            this.formSubmitted = true;
        }
    }
    
}
</script>

<style scoped></style>