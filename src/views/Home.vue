<template>
  <div class="home">
      <Hometop></Hometop>
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
// @ is an alias to /src

import Hometop from "../components/homes/Hometop";
import Recent from "../components/homes/Recent";
import Sidebar from "../components/homes/Sidebar";
export default {
  name: 'home',
    components: {Hometop, Sidebar, Recent},
}
</script>
