const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "John Doe",
      confirmedName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },

    submitForm(event) {
      alert('Submitted!')
    },

    setName(event, lastname) {
      this.name = event.target.value;
    },

    increaseCounter(num) {
      this.counter += num;
    },
    decreaseCounter(num) {
      this.counter -= num;
    },
    resetNameInput() {
      this.name = '';
    },
  }
});

app.mount('#events');
