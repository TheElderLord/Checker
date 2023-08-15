<script type="module" src="./scripts/valid.js"></script>
<style scoped>
@import "./styles/valid.css";
</style>

<template>
<main>
    <div id="contents">

        <div id="userforms">
          
          <div id="guide" class="bordered-container">

            <div class="collapse-header">
              
            </div>
  
            <div class="collapse-content">
  
              <div class="info-block" data-localized="i1">Уважаемые пользователи системы! Данный функционал разработан для проверки валидности дипломов, выданных организациями высшего или послевузовского образования.</div>
              <div class="info-block" data-localized="i2">Данная система позволяет убедиться в подлинности дипломов.</div>
              <div class="info-block" data-localized="i3">Проверка валидности дипломов осуществляется на основании ИИН, серии и номера диплома. Данные поля заполняются на основании документа, удостоверяющего личность, и диплома, выданного организацией высшего или послевузовского образования.</div>
  
              <div class="info-block" data-localized="i4">Алгоритм проверки:</div>
  
              <div class="info-block" style="font-weight: bold;" data-localized="i5">1. Введите ИИН в поле «ИИН»</div>
              <div class="info-block" data-localized="i6">Поле «ИИН» заполняется только при проверке дипломов, выданных резидентам Республики Казахстан, либо нерезидентам, получившим временный ИИН. В случае отсутствия ИИН данное поле не заполняется.</div>
  
              <div class="info-block" style="font-weight: bold;" data-localized="i7">2. Введите серию диплома в поле «Серия диплома»</div>
              <div class="info-block" data-localized="i8">Серия диплома обязательна для заполнения и представлена в виде буквенного кода (BD, BQ, MD, ЖБ-Б, ЖБ, ЖООК-М и др.)</div>
  
              <div class="info-block" style="font-weight: bold;" data-localized="i9">3. Введите номер диплома в поле «Номер диплома»</div>
              <div class="info-block" data-localized="i10">Номер диплома обязателен для заполнения и представлен в виде цифрового кода, состоящего из 7-11 цифр.</div>
  
              <div class="info-block" data-localized="i11">В настоящее время в системе содержится информация о дипломах, выданных в 2020-2021 учебном году. Организациями высшего и послевузовского образования ведется работа по оцифровке дипломов прошлых лет. В связи с этим, информация о дипломах прошлых лет на данный момент может отсутствовать в системе. В случае отсутствия сведений о дипломе, выданном ранее 2020-2021 учебного года, необходимо обращаться в организацию высшего или послевузовского образования для дополнительного подтверждения.</div>
             
            </div>
  
          </div>
  
          <div id="form" class="bordered-container">
  
            <div class="form-section">
              <label data-localized="iin-field">ИИН</label>
              <input type="text" class="form-control" id="iin-field" v-model="IIN" required>
              <div class="warning" v-if="IINWarning">{{IINWarning}} </div>
             
  
            </div>
  
            <div class="form-section">
              <label data-localized="diploma-series-field">Серия диплома</label><span style="margin-left: 2px; color: red;">*</span>
              <input type="text" class="form-control" id="diploma-series-field" v-model="serialNumber" required>
              <div class="warning" v-if="serialNumberWarning">{{serialNumberWarning}}</div>
            </div>
  
            <div class="form-section">
              <label data-localized="diploma-number-field">Номер диплома</label><span style="margin-left: 2px; color: red;">*</span>
              <input type="text" class="form-control" id="diploma-number-field" v-model="diplomNumber" required>
              <div class="warning" v-if="diplomNumberWarning">{{diplomNumberWarning}}</div>
            </div>
            
            <div class="form-buttons">
              <button type="button" class="btn btn-success" id="verify-btn" data-localized="verify-btn" @click="checkDiploma()">Тексеру</button>
            </div>
            <div class="cards" v-if="data">
              <router-link :to="{name:'Detail',params:{id:data.id}}">
              <div class="card" >
                <div class="card-text ">

                  <div class="boldtxt"><span class="material-symbols-outlined">
                    done
                    </span>
                    Диплом действителен</div>
                    <div class="regul"></div>
                </div>
               <div class="org-name">
                <div class="boldtxt"> Диплом выдан следующей организацией </div>
               <!-- <div class="regul"> Некоммерческое акционарное общество «Казахский национальный университет имени Аль-Фараби»</div> -->
                <div class="regul">{{ data.organ_title }}</div> 
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
                 <div class="regul"> {{ data.studying_period }}</div>
               </div>
               <div class="study-type">
                <div  class="boldtxt">Форма обучения</div>
                <!-- <div class="regul">Очная</div> -->
                 <div class="regul"> {{ data.study_type }}</div>
               </div>
              
              </div>
            </router-link>
              
             
            </div>
            <div class="notdata" v-if="data==undefined">
              <div class="notdata-text" data-localized="notdata-text">Сведения о дипломе не найдены</div>
              <div class="notdata-par"><p>В настоящее время в ИС "Национальная образовательная база данных" отсутвуют сведения о наличия дипломов о высшем и (или) 
                послевузовском образовании с указанными выше данными. Для получения информации о валидности или оцифровке диплома о высшем и (или)
                послевузовском образовании. Вам необходимо обратиться в организацию высшего и (или) послевузовского образования, в которой вы получили диплом.
                образования.Вы можете посмотреть на специальной странице.
              </p></div>
              <div class="notdata-butt">
                <a href="../assets/gg.docx" download>Посмотреть список</a>
              </div>
            </div>
  
          </div>
          
         
        </div>

       
  
      </div>
</main>
    
</template>

