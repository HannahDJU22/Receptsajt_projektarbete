<template>
    <div :class="{ bolded: isActive }">
        {{ name }} ({{ count }})
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        count: Number,
        isActive: Boolean
    }
}
</script>

<style scoped></style>