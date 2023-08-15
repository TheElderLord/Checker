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
      headerTxt: 'Сервис',
      
     
    };
  },
  
  methods: {
    receiveDataFromChild(data) {
      this.headerTxt = data;
    },
   
  },
  computed: {
    shown() {
      return this.$route.path !== '/';
    },
  },
}
</script>

<template>
  <div id="app">
    <div class="header-wrapper">
     <h1>{{ headerTxt  }}</h1>
      
    </div>
    <div class="menus" v-if="!shown">
      <div class="menu">
        <router-link to="/main">Проверка валидности дипломов организаций ТиПО</router-link>
      </div>
      <div class="menu">
        <router-link to="/valid">Проверка валидности дипломов вуза</router-link>
      </div>
      <div class="menu">
        <router-link to="/auth">Генерация данных по ТиПО</router-link>
      </div>
      <div class="menu">
        <router-link to="/auth">Генерация данных по дипломам ВУЗ</router-link>
      </div>
    </div>
    <div class="sidebar-wrapper" v-if="shown">
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

.menus{
  display: flex;
  align-items: center;
  margin-top: 10vh;
  height: 70vh;
}

.menu{
  background-color: white;
  text-align: center;
  margin: 1rem;
  padding: 1rem;
}
.menu a{
  color:black;
  text-decoration: none;
  
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


