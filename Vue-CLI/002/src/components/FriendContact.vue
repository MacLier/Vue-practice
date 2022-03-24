<template>
  <li>
    <h3>{{ name }} {{ friendIsFavorite === "1" ? "(Favorite)" : "" }}</h3>
    <button @click="toggleFavorite">Toggle favorite</button>
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
  props: ["name", "phoneNumber", "emailAdress", "isFavorite"],
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "ali",
        name: "Aladin Lopez",
        phone: "012345678991",
        email: "aliezdont@lop.com",
      },
      friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleVisibility() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      if (this.friendIsFavorite === "1") {
        this.friendIsFavorite = "0";
      } else {
        this.friendIsFavorite = "1";
      }
    },
  },
};
</script>