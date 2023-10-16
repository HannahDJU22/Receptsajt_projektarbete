<template>
    <div>
        <p>Genomsnittligt omdöme:</p>
        <font-awesome-icon v-if="userRating" v-for="index in userRating" :key="index" :icon="['fas', 'star']" />
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
    components:{
        FontAwesomeIcon
    },
    props: {
        userRating: Number,
    }
}
</script>

<style scoped></style>