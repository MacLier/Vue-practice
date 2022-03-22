const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "John Doe",
    };
  },
  methods: {
    setName(event, lastname) {
      this.name = event.target.value + ' ' + lastname;
    },

    increaseCounter(num) {
      this.counter += num;
    },
    decreaseCounter(num) {
      this.counter -= num;
    },
  }
});

app.mount('#events');
