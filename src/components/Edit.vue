<script >
export default {
  props: ['id', 'lang'],
  data() {
    return {
      fullname: "",
      iin: "",
      birthday: "",
      organ_title: "",
      studying_period: "",
      type: "",
      serialNumber: "",
      number: "",
      img_link: "",
    }
  },
  methods: {
    //  "fullname": "dasd",
    // "iin": "dsad",
    // "birthday": "ada",
    // "organ_title": "sda",
    // "studying_period": "sdad",
    // "study_type": "dasd",
    // "serial_number": "dasd",
    // "diplom_number": "ad"
    async getData() {
      const backhost = import.meta.env.VITE_SERVER_BACKEND_HOST;
      const backport = import.meta.env.VITE_SERVER_BACKEND_PORT;
      const response = await fetch(`http://${backhost}:${backport}/records/${this.id}`);
      const data = await response.json();
      const d = data[0];
      this.fullname = d.fullname;
      this.iin = d.iin;
      this.birthday = d.birthday;
      this.organ_title = d.organ_title;
      this.studying_period = d.studying_period;
      this.type = d.study_type;
      this.serialNumber = d.serial_number;
      this.number = d.diplom_number;
      

    },
    async updateRecord() {

      const backHost = import.meta.env.VITE_SERVER_BACKEND_HOST;
      const backport = import.meta.env.VITE_SERVER_BACKEND_PORT;
      if (this.fullname == '' || this.birthday == '' || this.organ_title == '' || this.studying_period == '' || this.type == '' || this.serialNumber == '' || this.number == '') {
        this.warning = true;
        return;
      }
      this.warning = false;
      const response = await fetch(`http://${backHost}:${backport}/records/${this.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: this.fullname,
          iin: this.iin,
          birthday: this.birthday,
          organ_title: this.organ_title,
          studying_period: this.studying_period,
          type: this.type,
          serialNumber: this.serialNumber,
          number: this.number,
          lang: this.lang,
        }),
      });
      const data = await response.message;
      console.log(data)





      // console.log(data);
    },

  },
  created() {
    this.getData()
  }
}
</script>

<template>
  <main>

    <div class="container">
      <div class="title">Edit</div>
      <div class="form">
        <div>
          <input type="text" v-model="fullname" name="fullname"
            :placeholder="lang === 'rus' ? 'Ф.И.О' : lang === 'kz' ? 'Аты-жөні' : 'Full Name'" required>
          <input type="text" v-model="iin" name="iin"
            :placeholder="lang === 'rus' ? 'ИИН' : lang === 'kz' ? 'ЖСН' : 'ID Number'" required>
          <input type="text" v-model="birthday" name="birthday"
            :placeholder="lang === 'rus' ? 'День рождения' : lang === 'kz' ? 'Туған күні' : 'Date of Birth'" required>
          <input type="text" v-model="organ_title" name="organ_title"
            :placeholder="lang === 'rus' ? 'Организация' : lang === 'kz' ? 'Ұйым' : 'Organization'" required>
          <input type="text" v-model="studying_period" name="studying_period"
            :placeholder="lang === 'rus' ? 'Период обучения' : lang === 'kz' ? 'Оқу периоды' : 'Study Period'" required>
          <input type="text" v-model="type" name="type"
            :placeholder="lang === 'rus' ? 'Формат обучения' : lang === 'kz' ? 'Оқу форматы' : 'Study Format'" required>
          <input type="text" v-model="serialNumber" name="serialNumber"
            :placeholder="lang === 'rus' ? 'Серийный номер' : lang === 'kz' ? 'Сериялық нөмір' : 'Serial Number'"
            required>
          <input type="text" v-model="number" name="number"
            :placeholder="lang === 'rus' ? 'Номер диплома' : lang === 'kz' ? 'Диплом нөмірі' : 'Diploma Number'" required>
          <div class="warning" v-if="warning">{{ lang === 'rus' ? 'Заполните все поля' : lang === 'kz' ? 'Барлық жолдарды толтырыңыз' : 'Please fill in all fields' }}</div>


          <button @click="updateRecord()">
            {{ lang === 'rus' ? 'Обновить' : lang === 'kz' ? 'Жаңарту' : 'Update' }}
          </button>


        </div>

      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  text-align: center;
  margin: 0.5rem;
  padding: 0.5rem;
  font-weight: 700;
  font-size: 2vw;
}

.form {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.form input[type="text"] {

  margin: 1% auto 0 auto;
  width: 100%;
  padding: 2%;
  margin: 0.5%;

}

.form button {
  background-color: #4CAF50;
  font-size: 1rem;
  color: white;
  width: 100%;
  padding: 2%;
  margin: 0.5%;

}</style>
