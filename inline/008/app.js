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
    removeGoal(i) {
      this.goals.splice(i, 1);
    },
  },

});

app.mount('#user-goals');
