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
    },
    updateHeaderText(){
      const currentPath = this.$route.path;
      if(currentPath === '/main'){
        if(this.lang === 'kz'){
          this.headerTxt = 'ТжКБ ұйымдары дипломдарының дұрыстығын тексеру';

        }
        else if (this.lang === 'rus'){
          this.headerTxt = 'Проверка валидности дипломов организаций ТиПО'
        }
        else this.headerTxt = 'Validation of University Diplomas'
      }
      else if (currentPath === '/check-valid'){
        if(this.lang === 'kz'){
          this.headerTxt = 'ЖОО дипломдарының дұрыстығын тексеру';
        }
        else if(this.lang === 'rus'){
          this.headerTxt = 'Проверка валидности дипломов вуза';
        }
        else this.headerTxt = 'Validation of University Diplomas'

      }
      else if(currentPath === '/auth'){
        if(this.lang === 'kz'){
          this.headerTxt = 'ЖОО бойынша деректерді генерациялау';
        }
        else if(this.lang === 'rus'){
          this.headerTxt = 'Генерация данных по дипломам ВУЗ'
        }
        else{
          this.headerTxt = 'Generate University Diploma Data'
        }
      }
    }
  },
  computed: {
    shown() {
      return this.$route.path !== '/';
    },
    
  },
  created() {
    // Call a method to update the headerText based on the current URL
    this.updateHeaderText();
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
        <div class="langtxt">қаз</div></div>
      <div class="rus" @click="changeLang('rus')"> <div class="icon"></div>
      <div class="langtxt">рус</div></div>
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
      <div class="acc">Ведутся технические работы</div>
      <router-view />
    </div>
    
  </div>
</template>

<style scoped>

#app{
  background-color: aliceblue ;
  
}
.acc{
  margin-top: 12vh;
  color: red;
  display: flex;
  justify-content: center;
  font-weight: bold;
  text-align: center;
  
}
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
  top: 8%;
  left: 0;
  bottom: 0;
  width: 25vw;
  height: 50vh;
  z-index: 100;
 
  margin:0;
  padding: 1% 0.5% 0 0.5%;
}
.router-wrapper{
  margin-left: 25vw;
  width: 75vw;
  /* margin-top: 10vh; */

  padding: 1%;
  
 
}


@media (min-width: 320px) and (max-width: 425px) {
  *{
    overflow: hidden;
  }
  .acc{
    font-size: 1rem;
  }
 
  .header-wrapper h1{
    margin: 0;
    padding: 0;
    font-size: 24px;
    font-weight: normal;
  }
 
  .sidebar-wrapper{
    position: relative;
    width: 100%;
    height: fit-content;
  }
  .router-wrapper{
    
    margin-left: 0;
    width: 100%;
  }
  
  .header-wrapper{
    position: relative;
    height: 20vh;
    display: block;
  }
  
  
  .title{
    width:100%;
  
  }
  .lang{
    position: absolute;
    top:65%;
    left: 30%;
    width: 100%
  
  }
  .icon{
    margin: 0;
    padding: 0;
    width: fit-content;
  }

  .lang div{
    width: fit-content;
    padding: 0.4rem;
    
  }
  .langtxt{
    width: 100%;
    margin: 0;
    text-align: left;
    font-size: 1rem;
  }
  .icon{
    width: 30%;
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
  .acc{
    margin: 0;
  }
  
 
  
  /* CSS styles for mobile screens */
  /* ... */
}
@media (max-width: 320px){
  /*.header-wrapper{
    height: 10vh;
  }
  .sidebar-wrapper{
    top: 10%;
  }
  */
  .sidebar-wrapper{
    
  }
  .acc{
    margin: 1rem;
  }
  
  .header-wrapper{
    text-align: center;
    height: 35vh;
    display: block;
  }
  
  .title{
    text-align: center;
    width:100%;
    font-weight: normal;
  }
  .title h1{
    font-weight: normal;
  }
  .lang{
    position: absolute;
    top:70%;
    left: 25%;
    width: 100%;
    
  
  }
  .lang > div{
    font-size: 1.5rem;
  }
  
}
</style>


