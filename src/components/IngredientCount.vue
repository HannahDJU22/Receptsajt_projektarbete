<template>
    <div>
        <p>Antal ingredienser: {{ ingredientCount }}</p>
    </div>
</template>

<script>
export default {
    props: {
        ingredientCount: Number
    }
}
</script>

<style scoped></style>