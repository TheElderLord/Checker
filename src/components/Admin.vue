<script type="module" src="./scripts/admin"></script>
<style scoped>
@import "./styles/admin.css";
</style>

<template>
    <main >
        <div class="popup-overlay" v-if="pop_up">

        </div>
        <header>
            <h3>{{lang === 'rus' ? 'Добавить запись' : 
                lang === 'kz' ? 'Жазба косу' : 'Add a record'}}</h3>
        </header>
        
        <div class="container">
            <div class="title"><h3>{{lang ==='rus' ? 'Запись' : lang === 'kz' ? 'Жазба' : 'Record'}}</h3></div>
            <div class="form">
                <div>
                    <input type="text" v-model="fullname" name="fullname" :placeholder="lang === 'rus' ? 'Ф.И.О' : lang === 'kz' ? 'Аты-жөні' : 'Full Name'" required>
                    <input type="text" v-model="iin" name="iin" :placeholder="lang === 'rus' ? 'ИИН' : lang === 'kz' ? 'ЖСН' : 'ID Number'" required>
                    <input type="text" v-model="birthday" name="birthday" :placeholder="lang === 'rus' ? 'День рождения' : lang === 'kz' ? 'Туған күні' : 'Date of Birth'" required>
                    <input type="text" v-model="organ_title" name="organ_title" :placeholder="lang === 'rus' ? 'Организация' : lang === 'kz' ? 'Ұйым' : 'Organization'" required>
                    <input type="text" v-model="studying_period" name="studying_period" :placeholder="lang === 'rus' ? 'Период обучения' : lang === 'kz' ? 'Оқу периоды' : 'Study Period'" required>
                    <input type="text" v-model="type" name="type" :placeholder="lang === 'rus' ? 'Формат обучения' : lang === 'kz' ? 'Оқу форматы' : 'Study Format'" required>
                    <input type="text" v-model="serialNumber" name="serialNumber" :placeholder="lang === 'rus' ? 'Серийный номер' : lang === 'kz' ? 'Сериялық нөмір' : 'Serial Number'" required>
                    <input type="text" v-model="number" name="number" :placeholder="lang === 'rus' ? 'Номер диплома' : lang === 'kz' ? 'Диплом нөмірі' : 'Diploma Number'" required>
                    <div class="warning" v-if="warning">{{ lang === 'rus' ? 'Заполните все поля' : lang === 'kz' ? 'Барлық жолдарды толтырыңыз' : 'Please fill in all fields' }}</div>


                    <button @click="addRecord()">
                        {{ lang === 'rus' ? 'Добавить' : lang === 'kz' ? 'Қосу' : 'Add' }}
                      </button>
                      <button @click="pops()" v-if="img_link">
                        {{ lang === 'rus' ? 'Создать QR' : lang === 'kz' ? 'QR жасау' : 'Generate QR' }}
                      </button>
               
            </div>
                
            </div>
            <div class="qrimage" v-if="pop_up">
                <div class="title"><h3>{{ lang === 'rus' ? 'QR' : lang === 'kz' ? 'QR' : 'QR' }}</h3></div>
                <div class="imageBlock">
                  <img :src="`${img_link}`" alt="Fetched Image">
                </div>
                <div class="butt">
                  <a :href="`${img_link}`" download="image.jpg">
                    {{ lang === 'rus' ? 'Скачать' : lang === 'kz' ? 'Жүктеу' : 'Download' }}
                  </a>
                  <button @click="pops()">
                    {{ lang === 'rus' ? 'Закрыть' : lang === 'kz' ? 'Жабу' : 'Close' }}
                  </button>
                </div>
              </div>
              

            <div class="cards">
            <div class="card">
                <div class="fullname">
                    Ф.И.О
            </div>
            <div class="iin">
                ИИН
            </div>
            <div class="birthday">
                День рождения
                </div>
             </div>
            </div>
            <div class="cards" v-for="d in data" :key="d.id">
                
                <div class="card">
                    <div class="fullname">
                   {{ d.fullname }}
                </div>
                <div class="iin">
                    {{ d.iin }}
                </div>
                <div class="birthday">
                    {{ d.birthday }}
                    </div>
                 </div>
            </div>
            
           </div>
    </main>
</template>