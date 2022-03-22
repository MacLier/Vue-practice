const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },
    methods: {
        boxSelected(box) {
            if (box === 'A') {
                if (this.boxASelected) this.boxASelected = false;
                else this.boxASelected = true;
            } else if (box === 'B') {
                this.boxBSelected = true;
            } else if (box === 'C') {
                this.boxCSelected = true;
            }
        },
    }

});

app.mount('#styling')