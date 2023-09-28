<template>
    <div>
        <h3>{{ message }}</h3>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: 'Kategori 1\nKategori 2...'
            }
        }
    }
</script>

<style scoped>
:root {
    grid-column: 1/3;
    grid-row: 2;
}

h3 {
    color: crimson
}
</style>