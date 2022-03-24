<template>
  <li>
    <h3>{{ name }}</h3>
    <button @click="toggleVisibility">
      {{ detailsAreVisible ? "Hide" : "Show" }} details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAdress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["name", "phoneNumber", "emailAdress"],
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "ali",
        name: "Aladin Lopez",
        phone: "012345678991",
        email: "aliezdont@lop.com",
      },
    };
  },
  methods: {
    toggleVisibility() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>