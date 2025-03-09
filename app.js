const app = Vue.createApp({
    data(){
        return {
            friends: [
                {id: 'manuel', name: 'Manuel Perez', phone: '11111', email: 'eee@ww.com'},
                {id: 'Holi', name: 'Holi Perez', phone: '12222', email: 'eee@ww.com'}
            ],
            detailsAreVisible: false,
        };
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});


app.mount('#app')