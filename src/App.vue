<template>
   
    <!--  BEGIN NAVBAR  -->
    <navbar />
    <!--  END NAVBAR  -->

    <!--  BEGIN MAIN CONTAINER  -->
    <div class="main-container sidebar-closed sbar-open" id="container">

        <div class="overlay"></div>
        <div class="cs-overlay"></div>
        <div class="search-overlay"></div>

        <!--  BEGIN SIDEBAR  -->
        <sidebar />
        <!--  END SIDEBAR  -->
        
        <!--  BEGIN CONTENT AREA  -->
        <router-view></router-view>
        
        <!--  END CONTENT AREA  -->
    </div>
    <!-- END MAIN CONTAINER -->
  
</template>

<script>
import navbar from './components/navbar.vue'
import sidebar from './components/sidebar.vue'

export default {
  components: { 
        navbar, 
        sidebar
    },

}
</script>

<style scoped>

</style>