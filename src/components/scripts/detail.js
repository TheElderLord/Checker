export default {
    props:['id','lang'],
    data() {
        return {
            data:null,
        }
    },
    

    methods: {
        async getData() {
            const backhost = import.meta.env.VITE_SERVER_BACKEND_HOST;
            const backport = import.meta.env.VITE_SERVER_BACKEND_PORT;
            const response = await fetch(`http://${backhost}:${backport}/records/${this.id}`);
            const data = await response.json();
            this.data = data[0];
            
        }
    },
    async mounted() {
        console.log(this.id);
        console.log(this.lang);
        if(this.ur)
        await this.getData(); // Wait for the API request to complete
    },

}