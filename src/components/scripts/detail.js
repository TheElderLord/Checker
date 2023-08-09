export default {
    props:['id'],
    data() {
        return {
            data:null,
        }
    },

    methods: {
        async getData() {
            const response = await fetch(`http://localhost:3000/records/${this.id}`);
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