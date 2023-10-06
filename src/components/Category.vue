<template>
    <div :id=name class="category">
        {{ name }} ({{ count }})
    </div>
</template>

<script>
    const categories = document.getElementsByClassName("category")

    export default {
        props: {
            name: String,
            count: Number
        }
    }

    export function makeBold(selectedCategory) {
        for (const element of categories) {
                element.classList.remove("bolded")
        }
        if (selectedCategory !== null) {
            document.getElementById(selectedCategory).classList.add("bolded")
        }
    }
</script>

<style scoped>

</style>