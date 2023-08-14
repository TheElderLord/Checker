export default {
    props:['id'],
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
            console.log(this.data.fullname);
        }
    },
    created() {
        this.getData();
        console.log(this.id);
    },
}