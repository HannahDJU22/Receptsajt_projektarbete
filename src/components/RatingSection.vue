<template>
    <div>
        <h2>Vad tyckte du om receptet? Klicka på en stjärna för att ge ditt omdöme!</h2>

            <font-awesome-icon v-if="!ratingSubmitted" v-for="starItem in starsTotal" @click="submitRating(starItem)"
            :icon="['fas', 'star']" class="star-icon"/>
        
        <p v-else>Tack för ditt betyg: {{starNumber}}!</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            starsTotal: 5,
            ratingSubmitted: false,
            starNumber:0
        };
    },
    props: {
        recipeId: String
    },
    methods: {
        submitRating(starNumber) {

            this.starNumber=starNumber;
            let starsToPostObj = {
                rating: starNumber
            };

            fetch(`https://jau22-recept-grupp2-yiqamvjp984a.reky.se/recipes/${this.recipeId}/ratings`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(starsToPostObj)
            })
                .then((response) => response.text())
                .then((json) => {

                    console.log(json)

                });
            this.ratingSubmitted = true;
        }
    }
}
</script>

<style scoped>
.star-icon:hover{
    transform: scale(1.8);
    color: rgb(250, 214, 8);
}

</style>