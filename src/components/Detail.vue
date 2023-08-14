<script type="module" src="./scripts/detail"></script>
<style scoped>
@import "./styles/detail.css";
</style>

<template>

   <main>
    <div class="container">Информация
      <div class="cards" v-if="data" >
         <div class="card" >
          <div class="org-name">
           <div class="boldtxt"> Диплом выдан следующей организацией </div>
          <!-- <div class="regul"> Некоммерческое акционарное общество «Казахский национальный университет имени Аль-Фараби»</div> -->
          <div class="regul">  {{ data.organ_title }}</div>
          </div>
          <div class="full-name">
           <div  class="boldtxt">Фамилия, имя, отчество выпускника</div>
           <!-- <div class="regul">Алимбай Абай Кайратбекулы</div> -->
           <div class="regul"> {{ data.fullname }}</div>
          </div>
          <div class="spec">
           <div  class="boldtxt">Специальность</div>
           <!-- <div class="regul">5B020300-История</div> -->
           <div class="regul"> {{ data.diplom_number }}</div>
          </div>
          <div class="study-period">
           <div  class="boldtxt">Период обучения</div>
           <!-- <div class="regul">2017-2021</div> -->
           <div class="regul">  {{ data.studying_period }}</div>
          </div>
          <div class="study-type">
           <div  class="boldtxt">Форма обучения</div>
           <!-- <div class="regul">Очная</div> -->
           <div class="regul">  {{ data.study_type }}</div>
          </div>
         </div>
        
       </div>

     
       <!-- <h1> {{ data.fullname }}</h1>
       <h1> {{ data.iin }}</h1>
       <h1> {{ data.birthday }}</h1>
       <h1> {{ data.organ_title }}</h1>
       <h1> {{ data.studying_period }}</h1>
       <h1> {{ data.type }}</h1>
       <h1> {{ data.serialNumber }}</h1>
       <h1> {{ data.number }}</h1> -->
    </div>
   </main>
</template>