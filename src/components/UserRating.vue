<template>
    <div>
        <p>Genomsnittligt omdöme:</p>
        <font-awesome-icon v-if="userRating" v-for="index in roundedRating" :key="index" :icon="['fas', 'star']" />
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
    components: {
        FontAwesomeIcon
    },
    props: {
        userRating: Number,
    },
    computed: {
        roundedRating() {
            return Math.round(this.userRating);
        }
    }
}
</script>

<style scoped></style>