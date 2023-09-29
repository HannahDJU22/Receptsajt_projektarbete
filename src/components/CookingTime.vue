<template>
    <div>
Tillagningstid: {{ recipe.timeInMins }} minuter
    </div>
</template>

<script>
    export default {
        props:{
            recipe: Object,
        }
    }
</script>

<style scoped>

</style>