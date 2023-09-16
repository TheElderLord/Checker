<script type="module" src="./scripts/detail"></script>
<style scoped>
@import "./styles/detail.css";
</style>

<template>

   <main>
    <div class="container">{{lang === 'rus' ? 'Информация' : lang === 'kz' ? 'Ақпарат' : 'Information'}}
      <div class="caps" v-if="data" >
         <div class="cap" >
          <div class="org-name">
           <div class="boldtxt"> {{ lang === 'rus' ? 'Диплом выдан следующей организацией' : 
            lang === 'kz' ? 'Диплом берілген мекеме' : 'The diploma was issued by the following organization'}} </div>
          <!-- <div class="regul"> Некоммерческое акционарное общество «Казахский национальный университет имени Аль-Фараби»</div> -->
          <div class="regul">  {{ data.organ_title }}</div>
          </div>
          <div class="full-name">
           <div  class="boldtxt">{{lang ==='rus' ? 'Фамилия, имя, отчество выпускника'
            : lang ==='kz' ? 'Бітірушінің тегі, аты, әкесінің аты' : 'Last name, first name, patronymic of the graduate'}}</div>
           <!-- <div class="regul">Алимбай Абай Кайратбекулы</div> -->
           <div class="regul"> {{ data.fullname }}</div>
          </div>
          <div class="spec">
           <div  class="boldtxt">{{lang ==='rus' ? 'Специальность'
            : lang === 'kz' ? 'Мамандық': 'Speciality'}}</div>
           <!-- <div class="regul">5B020300-История</div> -->
           <div class="regul"> {{ data.speciality }}</div>
          </div>
          <div class="study-period">
           <div  class="boldtxt">{{lang ==='rus' ? 'Период обучения'
            : lang ==='kz' ? 'Оқу уақыты' : 'Stydying period'}}</div>
           <!-- <div class="regul">2017-2021</div> -->
           <div class="regul">  {{ data.studying_period }}</div>
          </div>
          <div class="study-type">
           <div  class="boldtxt">{{lang ==='rus' ? 'Форма обучения' : lang ==='kz'?'Оқу форматы' : 'Type of study'}}</div>
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