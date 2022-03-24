const app = Vue.createApp({
    data() {
        return {
            friends: [
                { id: 'ali', name: 'Aladin Lopez', phone: '012345678991', email: 'aliezdont@lop.com' },
                { id: 'pali', name: 'Pali Nemlopez', phone: '012345678991', email: 'howeverpali@dontlopez.com' },
            ]
        }
    },
    methods: {

    },
    computed: {},
    watch: {},
});

app.component('friend-contact', {
    template: `
    <li v-for="friend in friends">
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{ detailsVisible ? 'Hide' : 'Show'}} details</button>
        <ul v-show="detailsVisible">
          <li><strong>Phone:</strong> {{ friend.phone }}</li>
          <li><strong>Email:</strong> {{friend.email}}</li>
        </ul>
      </li>
    `,
    data() {
        return {
            detailsVisible: false,
            friends: [{ id: 'ali', name: 'Aladin Lopez', phone: '012345678991', email: 'aliezdont@lop.com' },]
        };
    },
    methods: {
        toggleDetails() {
            this.detailsVisible = !this.detailsVisible;
        },
    }
});

app.mount('#app');