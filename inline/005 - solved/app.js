const app = Vue.createApp({
    data() {
        return {
            result: 0,
            notEnough: 'Try to set the correct result!',
        }
    },
    watch: {
        result(value) {
            if (parseInt(value) < 37) {
                this.notEnough = "Not there yet";
            }
            else if (parseInt(value) > 37) {
                this.notEnough = "Too much!";
                const that = this;
                setTimeout(() => {
                    that.result = 0;
                }, 5000)
            }
            else if (parseInt(value) == 37) this.notEnough = "Congrats!"
        },

    },
    computed: {

    },
    methods: {
        increaseResult(num) {
            this.result += num
        },
    },
});

app.mount('#assignment');