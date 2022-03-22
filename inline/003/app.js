const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  computed: {
    fullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + "Doe"
    }
  },
  methods: {
    outputFullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + "Doe"
    },

    setName(event) {
      this.name = event.target.value;
    },

    submitForm(event) {
      alert('Submitted!')
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
