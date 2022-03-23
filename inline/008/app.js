const app = Vue.createApp({
  data() {
    return {
      goalInput: '',
      goals: [],
    };
  },
  watch: {},
  computed: {},
  methods: {

    addGoal() {
      this.goals.push(this.goalInput);
      this.goalInput = '';
    },
  },

});

app.mount('#user-goals');
