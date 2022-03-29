<template>
  <section>
    <form @submit.prevent="submitData">
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        placeholder="Your Name"
        v-model="enteredName"
      />
      <label for="age">Age</label>
      <input
        type="text"
        id="age"
        placeholder=" Your Age"
        v-model="enteredAge"
      />
      <button>Set User Data</button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ["set-data"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("set-data", this.enteredName, this.enteredAge);
    },
  },
};
</script>

<style>
</style>