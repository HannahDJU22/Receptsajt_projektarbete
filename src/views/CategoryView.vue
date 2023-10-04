<template>
    <div>
        category id: {{ selectedCategory }}
    </div>
</template>

<script>
    export default {
        created() {
            this.$watch (
                () => this.$route.params,
                (toParams) => {
                    this.selectedCategory = toParams.categoryId
                }
            )
        },
        data() {
            return {
                selectedCategory: this.$route.params.categoryId
            }
        }
    }
    
    
</script>

<style scoped>

</style>