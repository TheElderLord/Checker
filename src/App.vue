<script>
import Sidebar from './components/SideBar.vue';
// import Header from './components/Header.vue';

export default {
  components: {
    Sidebar,
    // Header
  }
}
</script>

<template>
  <div id="app">
    <!-- <div class="header-wrapper">
      <Header />
    </div> -->
    <div class="sidebar-wrapper">
      <Sidebar />
    </div>
    <div class="router-wrapper">
      <router-view />
    </div>
    
  </div>
</template>

<style scoped>
.sidebar-wrapper {
  position: fixed;
  top: 10%;
  left: 0;
  bottom: 0;
  width: 25vw;
  height: 100vh;
  z-index: 100;
  background-color: white;
  margin:0;
  padding: 0;
}
.router-wrapper{
  flex: 1;
  width: 70vw;
  height: 100vh;
  padding: 1rem;
  margin-left: 25vw;
}
</style>


