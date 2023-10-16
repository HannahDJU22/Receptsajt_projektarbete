<template>
    <div>
        <p>Genomsnittligt omdöme:</p>
        <font-awesome-icon v-for="index in userRating" :key="index" :icon="['fas', 'star']" />
    </div>
</template>

<script>
    export default {
        props:{
            userRating: Number,
        }
    }
</script>

<style scoped>

</style>