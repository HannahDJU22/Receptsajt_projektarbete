<template>
    <div id="welcome-text">
        {{ text }}
    </div>
</template>

<script>
export default {
    props: {
        text: String
    }
}
</script>

<style scoped>
div {
    font-size: 18px;
    text-align: center;
    color: rgb(148, 83, 10);
}
</style>