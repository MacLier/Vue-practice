const app = Vue.createApp({
    data() {
        return {

            detailsVisible: false,
            friends: [
                { id: 'ali', name: 'Aladin Lopez', phone: '012345678991', email: 'aliezdont@lop.com' },
                { id: 'pali', name: 'Pali Nemlopez', phone: '012345678991', email: 'howeverpali@dontlopez.com' },
            ]
        }
    },
    methods: {

        toggleDetails() {
            this.detailsVisible = !this.detailsVisible;
        },
    },
    computed: {},
    watch: {},
});

app.mount('#app');