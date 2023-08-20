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
      lang: 'kz',
      
     
    };
  },
  
  methods: {
    receiveDataFromChild(data) {
      this.headerTxt = data;
    },
    changeLang(newLang){
      const currentQuery = { ...this.$route.query }; // Copy the existing query parameters
      currentQuery.lang = newLang; // Update the language parameter

      this.$router.push({ path: this.$route.path, query: currentQuery });
      
      // Update the component's local lang state if needed
      this.lang = newLang;
    }
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
      <div class="title">
     <h1>{{ headerTxt  }}</h1>
    </div>
    <div class="lang">
      <div class="kz" @click="changeLang('kz')">
        <div class="icon"></div>
        <div class="langtxt">kaz</div></div>
      <div class="rus" @click="changeLang('rus')"> <div class="icon"></div>
      <div class="langtxt">rus</div></div>
      <div class="eng" @click="changeLang('eng')"> <div class="icon"></div>
      <div class="langtxt">eng</div></div>
    </div>
    </div>
    <div class="menus" v-if="!shown">
      <div class="menu">
        <router-link :to="{ path: '/main', query: { lang } }">{{ lang === 'rus' ? 'Проверка валидности дипломов организаций ТиПО' : lang === 'kz' ? 'ТжКБ ұйымдары дипломдарының дұрыстығын тексеру' : 'Validation of University Diplomas' }}</router-link>
      </div>
      <div class="menu">
        <router-link :to="{ path: '/check-valid', query: { lang } }" >{{ lang === 'rus' ? 'Проверка валидности дипломов вуза' : lang === 'kz' ? 'ЖОО дипломдарының дұрыстығын тексеру' : 'Validation of University Diplomas' }}</router-link>
      </div>
      <div class="menu">
        <router-link :to="{ path: '/auth', query: { lang } }">{{ lang === 'rus' ? 'Генерация данных по ТиПО' : lang === 'kz' ? 'ТжКБ бойынша деректерді генерациялау' : 'Generate Data for Universities' }}</router-link>
      </div>
      <div class="menu">
        <router-link :to="{ path: '/auth', query: { lang } }">{{ lang === 'rus' ? 'Генерация данных по дипломам ВУЗ' : lang === 'kz' ? 'ЖОО дипломдары бойынша деректер генерациясы' : 'Generate University Diploma Data' }}</router-link>
      </div>
    </div>
    
    <div class="sidebar-wrapper" v-if="shown">
      <Sidebar @data-sent="receiveDataFromChild" :lang="lang"/>
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
  background: #15435f;
  color: white;
  text-align: center;
  
}
.header-wrapper h1{
  margin: 0;
  padding: 0;
  font-size: 2vw;
}
.title{
  width: 80%;
  margin: auto;
}
.lang{
  width: 20%;
  display: flex;
  margin: auto;
  
}

.lang div{

  padding: 0.5rem;
  cursor: pointer;
  display: flex;
}
.langtxt{
  width: 50%;
  margin: 0;
  text-align: left;
}
.icon{
  width: 50%;
  margin: 0;
}
.kz .icon{
  margin: auto;
  background: url(./assets/kz.svg) no-repeat;
}
.rus .icon{
  margin: auto;
  background: url(./assets/rus.svg) no-repeat;
}
.eng .icon{
  margin: auto;
  background: url(./assets/eng.svg) no-repeat;
}

.menus{
  display: flex;
  align-items: center;
  margin-top: 10vh;
  height: 70vh;
  width: 80%;
  margin: 0 auto;
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


@media (max-width: 425px) {
  .header-wrapper{
    display: block;
    height: 15vh;
  }
  .sidebar-wrapper{
    top:15%;
  }
  .router-wrapper{
    margin-top:15vh;
  }
  .header-wrapper h1{
    font-size: 5vw;
  }
  .title{
    width: fit-content;
  }
  .lang{
    width: fit-content;
  }
  .icon{
    margin: 0;
    padding: 0;
    width: fit-content;
  }
  .langtxt{
    width: fit-content;
    margin: 0;
    padding: 0;
  }
  .lang div{
    width: fit-content;
    padding: 0.4rem;
    
  }
  /* CSS styles for mobile screens */
  /* ... */
}
</style>


