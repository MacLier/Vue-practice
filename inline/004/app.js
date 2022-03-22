const app = Vue.createApp({
    data() {
        return {
            paragraphA: "OUTPUT",
            confirmedParagraphA: "OUTPUT",
            paragraphB: "OUTPUT",
            confirmedParagraphB: "OUTPUT",

        }
    },
    methods: {
        showAlert(event) {
            alert("Don't touch me!");
        },
        confirmOutputA(event) {
            this.paragraphA = event.target.value;
        },
        setOutputB(event) {
            this.confirmedParagraphB = event.target.value;
        },
        confirmOutputB(event) {
            this.paragraphB = this.confirmedParagraphB;
        },
    }
});

app.mount('#assignment');