<template>
    <div>
{{ text }}
    </div>
</template>

<script>
    export default {
        props: {
            text: String,
        }
    }
</script>

<style scoped>
div{
    font-size: 20px;
}
</style>