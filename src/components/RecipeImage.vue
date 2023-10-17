<template>
    <div>
        <img :src="recipe.imageUrl" alt="Receptbild">
    </div>
</template>

<script>
export default {
    props: {
        recipe: Object
    }
}
</script>

<style scoped>
img {
    width: 100%;
    height: auto;
    border-radius: 30px;
}
</style>