const app = Vue.createApp({
    data(){
        return {
            friends: [
                {id: 'manuel', name: 'Manuel Perez', phone: '11111', email: 'eee@ww.com'},
                {id: 'Holi', name: 'Holi Perez', phone: '12222', email: 'eee@ww.com'}
            ],
        };
    },
   
});

app.component('friend-contact', {
    template:`
    <li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails"> {{detailsAreVisible ? 'Hide ' : 'Show '}}Details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
        </li>
    `,
    data(){
        return {
            detailsAreVisible: false,
            friend: {id: 'manuel', name: 'Manuel Perez', phone: '11111', email: 'eee@ww.com'}, 
        };
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});
app.mount('#app')