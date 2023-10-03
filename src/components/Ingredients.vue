<template>
    <div>
        <ul>
            <li v-for="(ingredient, index) in ingredients" :key="index">
            {{ ingredient.name }} - {{ ingredient.amount
            }}{{ ingredient.unit }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        ingredients: Array,
    },
    data(){
        return{
        }
    }
}
</script>

<style scoped></style>