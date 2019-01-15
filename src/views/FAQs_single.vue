<template>
    <div class="faqs_single">
        <Directions_FAQs_single/>
        <Contents_FAQs_single/>
    </div>
</template>

<script>
    import Directions_FAQs_single from "../components/faqs_singles/Directions_FAQs_single";
    import Contents_FAQs_single from "../components/faqs_singles/Contents_FAQs_single";
    export default {
        name: "FAQs_single",
        components: {Contents_FAQs_single, Directions_FAQs_single}
    }
</script>

<style scoped>

</style>