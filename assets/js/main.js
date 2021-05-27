const app = new Vue({
    el: '#root',
    data: {
    },
    methods: {

    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response =>{
                document.getElementById('lista_email').insertAdjacentHTML('afterbegin', `<li>${response.data.response}</li>`)
            })
            
        }

    }
})