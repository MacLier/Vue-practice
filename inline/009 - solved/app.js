const app = Vue.createApp({
    data() {
        return {
            inputTask: '',
            tasks: [],
            visible: true,
            buttonValue: 'Hide',
        }
    },
    watch: {},
    computed: {},
    methods: {
        addTask() {
            this.tasks.push(this.inputTask);
            this.inputTask = '';
        },
        toggleVisibility() {
            this.visible = !this.visible;
            if (this.visible) {
                this.buttonValue = 'Hide'
            } else {
                this.buttonValue = 'Show List'
            }
        },
    }
});

app.mount('#assignment');