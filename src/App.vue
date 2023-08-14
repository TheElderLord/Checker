<script>
import Sidebar from './components/SideBar.vue';
  // import Header from './components/Header.vue';
 import * as Vue from 'vue';

export default {
  components: {
    Sidebar,
    //  Header
  },
  data() {
    return {
      headerTxt: '',
     
    };
  },
  methods: {
    receiveDataFromChild(data) {
      this.headerTxt = data;
    },
  },
}
</script>

<template>
  <div id="app">
    <div class="header-wrapper">
     <h1>{{ headerTxt  }}</h1>
      
    </div>
    <div class="sidebar-wrapper">
      <Sidebar @data-sent="receiveDataFromChild"/>
    </div>
    <div class="router-wrapper">
      <router-view />
    </div>
    
  </div>
</template>

<style scoped>
.header-wrapper{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #15435f;
  color: white;
  text-align: center;
  
}
.header-wrapper h1{
  margin: 0;
  padding: 0;
  font-size: 2vw;
}
.sidebar-wrapper {
  position: fixed;
  top: 10%;
  left: 0;
  bottom: 0;
  width: 25vw;
  height: 50vh;
  z-index: 100;
  background-color: white;
  margin:0;
  padding: 1% 0.5% 0 0.5%;
}
.router-wrapper{
  margin-left: 25vw;
  width: 75vw;
  margin-top: 10vh;

  padding: 1%;
  
 
}

@media (max-width: 768px) {
  .header-wrapper h1{
    font-size: 5vw;
  }
  /* CSS styles for mobile screens */
  /* ... */
}
</style>


