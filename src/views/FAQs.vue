<template>
    <div class="faqs">
        <section>
        <Direction_FAQs></Direction_FAQs>
        <Menu_FAQs/>
        <Content_FAQs/>
        </section>
    </div>
</template>

<script>
    import Direction_FAQs from "../components/faqs/Direction_FAQs";
    import Menu_FAQs from "../components/faqs/Menu_FAQs";
    import Content_FAQs from "../components/faqs/Content_FAQs";
    export default {
        name: "FAQs",
        components: {Content_FAQs, Menu_FAQs, Direction_FAQs}
    }
</script>

<style scoped>

</style>