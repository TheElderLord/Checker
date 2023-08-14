import axios from "axios"

export default {
    data() {
        return {
            IIN: null,
            serialNumber: null,
            diplomNumber: null,
            data: null,

            //warnings
            IINWarning: null,
            serialNumberWarning: null,
            diplomNumberWarning: null,

        }
    },
    methods: {
         async checkDiploma() {
            
            const backHost = import.meta.env.VITE_SERVER_BACKEND_HOST;
            const backPort = import.meta.env.VITE_SERVER_BACKEND_PORT;

            if (this.IIN == null) this.IINWarning = "Заполните поле";
            if (this.serialNumber == null) this.serialNumberWarning = "Заполните поле";
            if (this.diplomNumber == null) this.diplomNumberWarning = "Заполните поле";
            else if (this.IIN != null && this.serialNumber != null && this.diplomNumber != null) {
             await axios.get(`http://${backHost}:${backPort}/search?iin=${this.IIN}&serialNumber=${this.serialNumber}&number=${this.diplomNumber}`).then((response) => {
                this.data = response.data[0];
                console.log(this.data.fullname);
                // if(this.data.fullname ==undefined)
                // this.data = null;

                
            }).catch((error) => {
                console.log(error);
            });
        }
        
        },

    },
}