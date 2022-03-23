const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            visible: true,
            inputBackground: '',
        }
    },
    watch: {},
    computed: {
        paraClasses() {
            return {
                user1: this.userInput === 'user1',
                user2: this.userInput === 'user2',
                visible: this.visible,
                hidden: !this.visible,
            }
        },
    },
    methods: {
        toggleParagraphVisibility() {
            this.visible = !this.visible
        },
    },
});

app.mount('#assignment');