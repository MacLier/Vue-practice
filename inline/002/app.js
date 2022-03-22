const app = Vue.createApp({
    data() {
        return {
            name: "John Doe",
            age: 21,
            imgSrc: "https://vuejs.org/images/logo.png"
        }
    },
    methods: {
        getYourAgeFiveYearsLater() {
            return this.age + 5;
        },
        getFavoriteNumber() {
            return Math.floor(Math.random());
        },
    }
});
app.mount('#assignment');