<script type="module" src="./scripts/admin"></script>
<style scoped>
@import "./styles/admin.css";
</style>

<template>
    <main >
        <div class="popup-overlay" v-if="pop_up">

        </div>
        <header>
            <h3>Добавить запись</h3>
        </header>
        
        <div class="container">
            <div class="title"><h3>Запись</h3></div>
            <div class="form">
                <div>
                <input type="text" v-model="fullname" name="fullname" placeholder="Ф.И.О" required>
                <input type="text" v-model="iin" name="iin" placeholder="ИИН" required>
                <input type="text" v-model="birthday" name="birthday" placeholder="День рождения" required>
                <input type="text" v-model="organ_title" name="organ_title" placeholder="Организация" required>
                <input type="text" v-model="studying_period" name="studying_period" placeholder="Период обучения" required>
                <input type="text" v-model="type" name="type" placeholder="Формат обучения" required>
                <input type="text" v-model="serialNumber" name="serialNumber" placeholder="Серийный номер" required>
                <input type="text" v-model="number" name="number" placeholder="Номер диплома" required>
                <div class="warning" v-if="warning">Заполните все поля</div>

                <button @click="addRecord()" >Добавить</button>
                <button @click="pops()" v-if="img_link">Создать QR</button>
               
            </div>
                
            </div>
            <div class="qrimage" v-if="pop_up">
                <div class="title"><h3>QR </h3></div>
                <div class="imageBlock">
                    <img  :src="`${img_link}`" alt="Fetched Image">
                    
                  </div>
                  <div class="butt">
                    <a :href="`${img_link}`" download="image.jpg">Скачать</a>
                  <button @click="pops()" >Закрыть</button>
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