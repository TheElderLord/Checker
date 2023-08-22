<script type="module" src="./scripts/valid.js"></script>
<style >
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
  
              <div class="info-block" data-localized="i1">{{ lang === 'rus' ? ' Уважаемые пользователи системы! Данный функционал разработан для проверки валидности дипломов, выданных организациями высшего или послевузовского образования.'
                : lang === 'kz' ? 'Құрметті жүйені пайдаланушылар, бұл функционал жоғары немесе жоғары оқу орнынан кейінгі білім беру ұйымдары берген дипломдардың жарамдылығын тексеруге арналған.':'Dear users of the system, this functionality is designed to verify the validity of diplomas issued by organizations of higher or postgraduate education.' }}</div>
              <div class="info-block" data-localized="i2">{{ lang === 'rus' ? 'Данная система позволяет убедиться в подлинности дипломов.'
                : lang === 'kz' ? 'Бұл жүйе дипломдардың түпнұсқалығын тексеруге мүмкіндік береді.': 'This system allows you to verify the authenticity of diplomas.' }}
              </div>

              <div class="info-block" data-localized="i3">
                {{ lang === 'rus' ? 'Проверка валидности дипломов осуществляется на основании ИИН, серии и номера диплома. Данные поля заполняются на основании документа, удостоверяющего личность, и диплома, выданного организацией высшего или послевузовского образования.' :
                   lang === 'kz' ? 'Дипломдардың жарамдылығын тексеру құжаттардың түпнұсқасы, сериясы және нөмірі бойынша жүзеге асырылады. Бұл өрістер құжаттың түпнұсқасын және жоғары немесе жоғары оқу орнынан кейінгі білім беру ұйымының берген дипломдарында көрсетілген мәліметтер бойынша толтырылады.' :
                    'The validity of diplomas is checked on the basis of the IIN, series and number of the diploma. These fields are filled in on the basis of the identity document and the diploma issued by the organization of higher or postgraduate education.'}}
              </div>
  
              <div class="info-block" data-localized="i4">
                {{lang === 'rus' ? 'Алгоритм проверки:' : lang === 'kz' ? 'Тексеру алгоритмі:' : 'Check algorithm:'}}
              </div>
  
              <div class="info-block" style="font-weight: bold;" data-localized="i5">
                {{ lang === 'kz' ? '1. Введите ИИН в поле «ИИН»' : lang === 'rus' ? '1. Введите ИИН в поле «ИИН»' : '1. Enter the IIN in the "IIN" field'}}
              </div>
              <div class="info-block" data-localized="i6">
                {{lang === 'rus' ? 'Поле «ИИН» заполняется только при проверке дипломов, выданных резидентам Республики Казахстан, либо нерезидентам, получившим временный ИИН. В случае отсутствия ИИН данное поле не заполняется.'
                : lang === 'kz' ? '«ИИН» өрісті тек Қазақстан Республикасының резиденттеріне берілген дипломдарды тексеру кезінде немесе уақытша ИИН алған нерезиденттердің дипломдарын тексеру кезінде толтырылады. ИИН жоқ болса, бұл өрісті толтыру қажет емес.'
                : 'The "IIN" field is filled in only when checking diplomas issued to residents of the Republic of Kazakhstan or non-residents who have received a temporary IIN. If there is no IIN, this field is not filled in.'}}
              </div>
  
              <div class="info-block" style="font-weight: bold;" data-localized="i7">
                {{  lang === 'kz' ? '2. Введите серию диплома в поле «Серия диплома»'
                    : lang === 'rus' ? '2. Введите серию диплома в поле «Серия диплома»'
                    : '2. Enter the series of the diploma in the "Diploma series" field'  }}
              </div>
              <div class="info-block" data-localized="i8">
                {{lang ==='rus' ? 'Серия диплома обязательна для заполнения и представлена в виде буквенного кода (BD, BQ, MD, ЖБ-Б, ЖБ, ЖООК-М и др.)'
                : lang === 'kz' ? 'Дипломдың сериясы толтырылуы қажет және әріптік код (BD, BQ, MD, ЖБ-Б, ЖБ, ЖООК-М және т.б.) болып табылады.'
                : 'The diploma series is mandatory and is presented in the form of a letter code (BD, BQ, MD, JB-B, JB, ZHOK-M, etc.)'
                }}
              </div>
  
              <div class="info-block" style="font-weight: bold;" data-localized="i9">
                {{ lang ==='rus' ? '3. Введите номер диплома в поле «Номер диплома»'
                    : lang === 'kz' ? '3. Дипломдың нөмірін «Диплом нөмірі» өрісіне енгізіңіз'
                    : '3. Enter the number of the diploma in the "Diploma number" field'}}
                </div>

              <div class="info-block" data-localized="i10">
                {{lang ==='rus' ? 'Номер диплома обязателен для заполнения и представлен в виде цифрового кода, состоящего из 7-11 цифр.'
                : lang === 'kz' ? 'Диплом нөмірі міндетті түрде толтырылады және 7-11 цифрдан тұратын сандық код түрінде ұсынылады.'
                : 'The diploma number is required to be filled in and is presented in the form of a digital code consisting of 7-11 digits.' }}
              </div>
  
              <div class="info-block" data-localized="i11">
                {{lang === 'rus' ? 'В настоящее время в системе содержится информация о дипломах, выданных в 2020-2021 учебном году. Организациями высшего и послевузовского образования ведется работа по оцифровке дипломов прошлых лет. В связи с этим, информация о дипломах прошлых лет на данный момент может отсутствовать в системе. В случае отсутствия сведений о дипломе, выданном ранее 2020-2021 учебного года, необходимо обращаться в организацию высшего или послевузовского образования для дополнительного подтверждения.'
                  : lang=== 'kz' ? 'Қазіргі уақытта жүйеде 2020-2021 оқу жылында берілген дипломдар туралы ақпарат бар. Жоғары және жоғары оқу орнынан кейінгі білім беру ұйымдары өткен жылдардағы дипломдарды цифрландыру бойынша жұмыс жүргізуде. Осыған байланысты, қазіргі уақытта жүйеде өткен жылдардағы дипломдар туралы ақпарат болмауы мүмкін. 2020-2021 оқу жылынан бұрын берілген диплом туралы ақпарат болмаған жағдайда қосымша растау үшін жоғары немесе жоғары оқу орнынан кейінгі білім беру ұйымына хабарласыуңыз қажет.'
                : 'Currently, the system contains information about diplomas issued in the 2020-2021 academic year. Organizations of higher and postgraduate education are working on the digitalization of diplomas of previous years. In this regard, at the moment, the system may not contain information about diplomas of previous years. In the absence of information about the diploma issued before the 2020-2021 academic year, you must contact the organization of higher or postgraduate education for additional confirmation.' }}</div>
             
            </div>
  
          </div>
  
          <div id="form" class="bordered-container">
  
            <div class="form-section">
              <label data-localized="iin-field">{{lang === 'rus' ? 'ИИН' : lang ==='kz' ? 'ЖСН':'IIN'}}</label>
              <input type="text" class="form-control" id="iin-field" v-model="IIN" required>
              <div class="warning" v-if="IINWarning">{{IINWarning}} </div>
             
  
            </div>
  
            <div class="form-section">
              <label data-localized="diploma-series-field">{{lang == 'rus' ? 'Серия диплома' : lang === 'kz' ? 'Диплом сериясы' : 'Diploma series'}}</label><span style="margin-left: 2px; color: red;">*</span>
              <input type="text" class="form-control" id="diploma-series-field" v-model="serialNumber" required>
              <div class="warning" v-if="serialNumberWarning">{{serialNumberWarning}}</div>
            </div>
  
            <div class="form-section">
              <label data-localized="diploma-number-field">{{lang === 'rus' ? 'Номер диплома' : lang ==='kz' ? 'Диплом номері' : 'Diploma number'}}</label><span style="margin-left: 2px; color: red;">*</span>
              <input type="text" class="form-control" id="diploma-number-field" v-model="diplomNumber" required>
              <div class="warning" v-if="diplomNumberWarning">{{diplomNumberWarning}}</div>
            </div>
            
            <div class="form-buttons">
              <button type="button" class="btn btn-success" id="verify-btn" data-localized="verify-btn" @click="checkDiploma()">{{lang === 'rus' ? 'Проверить' : lang ==='kz' ? 'Тексеру' : 'Check'}}</button>
            </div>
            <div class="cards" v-if="data">
              <router-link :to="{ path: '/records', query: { lang,id:data.id } }">
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

