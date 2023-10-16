<template>
    <div>
        <ol>
            <li v-for="instruction in recipe.instructions" :key="instruction">{{ instruction }}</li>
        </ol>
    </div>
</template>

<script>
export default {
    props: {
        recipe: Object
    }
}
</script>

<style scoped></style>