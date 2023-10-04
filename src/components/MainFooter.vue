<template>
    <footer>
        <p>{{ footertext }}</p>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            footertext: '@copyright LOTS'
        }
    }
}
</script>

<style scoped>
p {
    font-style: italic;
}
</style>