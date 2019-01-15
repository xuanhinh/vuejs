<template>
    <div class="archivepage">
        <Direction/>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-lg-8">
                       <Recent/>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <Sidebar/>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Direction from "../components/archivepage/Direction";
    import Recent from "../components/homes/Recent";
    import Sidebar from "../components/homes/Sidebar";
    export default {
        name: "ArchivePage",
        components: {Sidebar, Recent, Direction}
    }
</script>

<style scoped>

</style>