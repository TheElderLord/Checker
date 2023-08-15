<script>
// import { eventBus } from '../eventBus';

export default {
    data() {
        return {
            first: 'Проверка валидности дипломов организаций ТиПО',
            second: 'Проверка валидности дипломов вузов',
            third:'Генерация данных по дипломам ТиПО',
            fourth: 'Генерация данных по дипломам вузов',
            txt: '',
        }
    },

    methods: {
        emitHeaderText(txt) {
            this.txt = txt;
            this.$emit('data-sent', this.txt);
        }
        
  },
  created(){
    this.emitHeaderText(this.first)
  }
}
</script>

<template>
    <aside class="sidebar">
        <div class="menu">
            <div class="menu"><router-link to="/main" @click="emitHeaderText(first)">{{first}}</router-link></div>
            <div class="menu"><router-link to="/check-valid" @click="emitHeaderText(second)">{{second}}</router-link></div>
            <div class="menu"><router-link to="/auth" @click="emitHeaderText(third)">{{third}}</router-link></div>
            <div class="menu"><router-link to="/auth" @click="emitHeaderText(fourth)">{{fourth}}</router-link></div>
        </div>
    </aside>

  
</template>

<style scoped>
.sidebar {
    width: 25vw;
    height: 50vh;
    background-color: white;
    
    
}
.menu{
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
a{
    text-decoration: none;
    color: black;
}

@media (max-width: 768px) {
    .menu{
        font-size: .7rem;
    }
    /* CSS styles for mobile screens */
    /* ... */
}

</style>


  