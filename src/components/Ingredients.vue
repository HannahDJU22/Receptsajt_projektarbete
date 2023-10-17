<template>
    <div>
        <ul>
            <li v-for="(ingredient, index) in ingredients" :key="index">
                {{ ingredient.amount }}
                {{ ingredient.unit }}
                {{ ingredient.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        ingredients: Array
    }
}
</script>

<style scoped></style>