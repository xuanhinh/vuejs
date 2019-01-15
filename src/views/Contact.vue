<template>
    <div class="contact">
        <Direction_Contact/>
        <Content_Contact/>
    </div>
</template>

<script>
    import Direction_Contact from "../components/contacts/Direction_Contact";
    import Content_Contact from "../components/contacts/Content_Contact";
    export default {
        name: "Contact",
        components: {Content_Contact, Direction_Contact}
    }
</script>

<style scoped>

</style>