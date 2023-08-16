
export default {
  props: ['lang'],
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

      vite_host: import.meta.env.VITE_SERVER_BACKEND_HOST,
      
      warning: false,
      data: [],
    };
  },
 
  methods: {
    async addRecord() {
        
        const backHost = import.meta.env.VITE_SERVER_BACKEND_HOST;
        const backport = import.meta.env.VITE_SERVER_BACKEND_PORT;
        if(this.fullname == '' || this.iin == '' || this.birthday == '' || this.organ_title == '' || this.studying_period == '' || this.type == '' || this.serialNumber == '' || this.number == ''){
          this.warning = true;
          return;
        }
        this.warning = false;
        const response = await fetch(`http://${backHost}:${backport}/add`, {
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
            lang: this.lang,
            }),
        });
        const data = await response.json();

        this.fullname = '';
        this.iin = '';
        this.birthday = '';
        this.organ_title = '';
        this.studying_period = '';
        this.type = '';
        this.serialNumber = '';
        this.number = '';
        
        this.img_link = data;
        console.log(this.img_link);
        // console.log(data);
        },
        pops() {
            this.pop_up = !this.pop_up;
            console.log(this.pop_up)
        },
        async fetchdata(){
          const backHost = import.meta.env.VITE_SERVER_BACKEND_HOST;
          const backport = import.meta.env.VITE_SERVER_BACKEND_PORT;
          const response = await fetch(`http://${backHost}:${backport}/records`);
          this.data = await response.json();
          console.log(this.data);
        }
        
  },
  mounted() {
    this.fetchdata();
  }
  
};
