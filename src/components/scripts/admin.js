
export default {
  data() {
    return {
      pop_up: false,
      fullname: "",
      iin: "",
      birthday: "",
      organ_title: "",
      studying_period: "",
      type: "",
      serialNumber: "",
      number: "",
      img_link: "",
    };
  },
  methods: {
    async addRecord() {
        const response = await fetch("http://localhost:3000/add", {
            method: "POST",
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
            }),
        });
        const data = await response.json();

        // this.fullname = '';
        // this.iin = '';
        // this.birthday = '';
        // this.organ_title = '';
        // this.studying_period = '';
        // this.type = '';
        // this.serialNumber = '';
        // this.number = '';
        
        this.img_link = data;
        console.log(this.img_link);
        // console.log(data);
        },
        pops() {
            this.pop_up = !this.pop_up;
            console.log(this.pop_up)
        }
  },
  
};
