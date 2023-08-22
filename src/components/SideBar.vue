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
            this.txt = txt;
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
    background-color: white;


}

.menu {
    margin: 0;
    padding: 0;
    list-style-type: none;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    background-color: #ffffff;

    padding: 0.5rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
}

a {
    text-decoration: none;
    color: black;
}

@media (min-width: 320px) and (max-width: 425px) {
   
    .sidebar {
        width: 100vw;
        height: fit-content;
        background-color: white;
    
    
    }
    
    .menu {
        flex: 1;
        padding: 0.5rem;
        margin: 0;
        font-size: 0.9rem;
        font-weight: normal;
        text-align:left;
      
        
        margin-right: 5%;
        border-bottom: 1px solid #e5e5e5;
    }
    
    a {
        text-decoration: none;
        color: black;
    }
    
    

    /* CSS styles for mobile screens */
    /* ... */
}
</style>


  