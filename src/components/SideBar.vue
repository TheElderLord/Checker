<script>
// import { eventBus } from '../event-bus';

export default {
    data() {
        return {
            first: 'Проверка валидности дипломов организаций ТиПО',
            second: 'Проверка валидности дипломов вузов',
            third:'Генерация данных по дипломам ТиПО',
            fourth: 'Генерация данных по дипломам вузов'
        }
    },

    methods: {
    // emitHeaderText(text) {
    //   eventBus.$emit('updateHeaderText', text);
    // }
  }
}
</script>

<template>
    <aside class="sidebar">
        <div class="menu">
            <div class="menu"><router-link to="/">{{first}}</router-link></div>
            <div class="menu"><router-link to="/check-valid" >{{second}}</router-link></div>
            <div class="menu"><router-link to="/auth">{{third}}</router-link></div>
            <div class="menu"><router-link to="/auth" >{{fourth}}</router-link></div>
        </div>
    </aside>
</template>

<style scoped>
.sidebar {
    width: 25vw;
    height: 100vh;
    background-color: white;
    
    
}
.menu{
    margin: 0;
    padding: 0;
    list-style-type: none;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    background-color: #f1f1f1;
    
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
}
a{
    text-decoration: none;
    color: black;
}



</style>


  