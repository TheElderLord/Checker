export default {
    props:['lang'],
    data() {
        return {
            login: "",
            password: "",
        };
    },
    methods: {
        async auth() {
            
            if (this.login == "admin" && this.password == "admin") {
                this.$router.push({
                    path: '/admin',
                    query: {
                      lang: this.lang,
                    }
                  });
            }
            // const response = await fetch("http://localhost:3000/auth", {
            //     method: "POST",
            //     headers: {
            //     "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({
            //     login: this.login,
            //     password: this.password,
            //     }),
            // });
            // const data = await response.json();
            
            
        },
    },
};


