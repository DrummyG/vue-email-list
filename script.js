const app = new Vue({
    el: '#app',
    data: {
        listaMail: []
    },
    methods: {
        start() {
            for (i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(res => {
                        this.listaMail.push(res.data.response)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        }
    },
    mounted(){
        this.start()
    }
})