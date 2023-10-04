<template>
    <div>
<WelcomeText></WelcomeText>
    </div>
    <main>
        <Recipe_desc />
    </main>
</template>

<script>
import Recipe_desc from '../components/Recipe_desc.vue';
import WelcomeText from '../components/WelcomeText.vue';

export default {
    components: {
        WelcomeText,
        Recipe_desc,
    },
    data() {
        return {

        }
    }
}
</script>