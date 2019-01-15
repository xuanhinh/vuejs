<template>
    <div class="singalpost">
        <Directions/>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-lg-8">
                        <Posts/>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <Sidebar/>
                    </div>
                </div>
            </div>
        </section>
        <Posts/>
        <Sidebar/>
    </div>
</template>

<script>
    import Posts from "../components/SingalPosts/Posts";
    import Directions from "../components/SingalPosts/Directions";
    import Sidebar from "../components/homes/Sidebar";
    export default {
        name: "SingalPost",
        components: {Sidebar, Directions, Posts}
    }
</script>

<style scoped>

</style>