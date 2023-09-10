<script>
// import { eventBus } from '../eventBus';
// LanguageOptions.js

export const languageOptions = {
    kz: {
        main: 'ТжКБ ұйымдары дипломдарының дұрыстығын тексеру',
        valid: 'ЖОО дипломдарының дұрыстығын тексеру',
        auth: 'ТжКБ бойынша деректерді генерациялау',
        auth1: 'ЖОО дипломдары бойынша деректер генерациясы',
        // ... other translations
    },
    rus: {
        main: 'Проверка валидности дипломов организаций ТиПО',
        valid: 'Проверка валидности дипломов вуза',
        auth: 'Генерация данных по ТиПО',
        auth1: 'Генерация данных по вузам',
        // ... other translations
    },
    eng: {
        main: 'Validation of Organization Diplomas',
        valid: 'Validation of University Diplomas',
        auth: 'Generate Organization Data',
        auth1: 'Generating data on university diplomas'
        // ... other translations
    },
};

export default {


    props: ['lang'],
    data() {
        return {
            main: '',
            valid: '',
            auth: '',
            auth1: '',

        }
    },
    watch: {
    lang(newLang, oldLang) {
      // Perform actions when 'lang' prop changes
     
      this.changeLang(newLang)
            if (this.$route.path == '/main') {
                this.emitHeaderText(this.main)
            }
            else if (this.$route.path == '/check-valid') {
                this.emitHeaderText(this.valid)
            }
            else if (this.$route.path == '/auth') {
                this.emitHeaderText(this.auth)
            }
            else if (this.$route.path == '/auth1') {
                this.emitHeaderText(this.auth1)
            }
      // You can perform any other logic here
    },
},



    methods: {
        emitHeaderText(txt) {
          
                if(txt == 'ТжКБ ұйымдары дипломдарының дұрыстығын тексеру'){
                    this.txt = 'Қазақстан Республикасының техникалық және кәсіптік білім беру ұйымдары дипломдарының жарамдылығын тексеру';
                }
                else if(txt == 'ЖОО дипломдарының дұрыстығын тексеру'){
                    this.txt = 'Қазақстан Республикасының жоғары және жоғары оқу орнынан кейінгі білім беру ұйымдары дипломдарының валидтілігін тексеру';
                }
                else if(txt == 'ТжКБ бойынша деректерді генерациялау'){
                    this.txt = 'Жүйеге кіру';
                }
                else if(txt == 'ЖОО дипломдары бойынша деректер генерациясы'){
                    this.txt = 'Жүйеге кіру';
                }
             
                if(txt == 'Проверка валидности дипломов организаций ТиПО'){
                    this.txt = 'Проверка валидности дипломов организаций технического и професиионального образования Республики Казахстан';
                }
                else if(txt == 'Проверка валидности дипломов вуза'){
                    this.txt = 'Проверка валидности дипломов организаций высшего и послевузовского образования Республики Казахстан';
                }
                else if(txt == 'Генерация данных по ТиПО'){
                    this.txt = 'Вход в систему';
                }
                else if(txt == 'Генерация данных по вузам'){
                    this.txt = 'Вход в систему';
                }
            
                if(txt == 'Validation of Organization Diplomas'){
                    this.txt = 'Validation of Organization Diplomas of the Republic of Kazakhstan';
                }
                else if(txt == 'Validation of University Diplomas'){
                    this.txt = 'Validation of University Diplomas of the Republic of Kazakhstan';
                }
                else if(txt == 'Generate Organization Data'){
                    this.txt = 'Login';
                }
                else if(txt == 'Generating data on university diplomas'){
                    this.txt = 'Login';
                }
             
            
            this.$emit('data-sent', this.txt);
        },
        changeLang() {
            if (this.lang == 'kz') {
                this.main = languageOptions.kz.main;
                this.valid = languageOptions.kz.valid;
                this.auth = languageOptions.kz.auth;
                this.auth1 = languageOptions.kz.auth1;
            }
            else if (this.lang == 'rus') {
                this.main = languageOptions.rus.main;
                this.valid = languageOptions.rus.valid;
                this.auth = languageOptions.rus.auth;
                this.auth1 = languageOptions.rus.auth1;
            }
            else if (this.lang == 'eng') {
                this.main = languageOptions.eng.main;
                this.valid = languageOptions.eng.valid;
                this.auth = languageOptions.eng.auth;
                this.auth1 = languageOptions.eng.auth1;
            }
        },

    },
    computed: {
        
        

    },
    created() {


        this.changeLang()


    }
}
</script>

<template>
    <aside class="sidebar">
        <div class="menu"> 
             <div class="menu"><router-link :to="{ path: '/main', query: { lang } }" @click="emitHeaderText(main)"
                    :lang="lang">{{ main }}</router-link></div>
            <div class="menu"><router-link :to="{ path: '/check-valid', query: { lang } }" @click="emitHeaderText(valid)"
                    :lang="lang">{{ valid }}</router-link></div>
            <div class="menu"><router-link :to="{ path: '/auth', query: { lang } }" @click="emitHeaderText(auth)"
                    :lang="lang">{{ auth }}</router-link></div>
            <div class="menu"><router-link :to="{ path: '/auth', query: { lang } }" @click="emitHeaderText(auth1)"
                    :lang="lang">{{ auth1 }}</router-link></div>
        </div>
    </aside>
</template>

<style scoped>
.sidebar {
    width: 25vw;
    height: 50vh;
    
    


}

.menu {
    
    list-style-type: none;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    background-color: #ffffff;

    padding: 0.5rem;
    margin: 0.5rem;
    cursor: pointer;
    border-bottom: 1px solid #e5e5e5;
}

a {
    text-decoration: none;
    color: black;
}

@media (min-width: 320px) and (max-width: 425px) {
   
    aside{
        width: 100%;
        height: 100%;
    }
    .sidebar{
        /*width:30vw;
        */
    width: 100%;
    height: fit-content;
    }
    
    .menu {

        flex: 1;
        width: 100%;
        padding: 0.5rem;
        margin: 0;
        font-size: 1rem;
        font-weight: normal;
        text-align:left;
      
        
      
        border-bottom: 1px solid #e5e5e5;
    }
    
    a {
        text-decoration: none;
        color: black;
        font-size: 1rem;
    }
    
    

    /* CSS styles for mobile screens */
    /* ... */
}
</style>


  