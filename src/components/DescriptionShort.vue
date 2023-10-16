<template>
    <div>
        {{ recipe.description }}
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