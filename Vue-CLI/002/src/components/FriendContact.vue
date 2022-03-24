<template>
  <li>
    <h3>{{ name }} {{ friendIsFavorite ? "(Favorite)" : "" }}</h3>
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
  //   props: ["name", "phoneNumber", "emailAdress", "isFavorite"],
  props: {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAdress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      //   validator(value) {
      //     return value === "1" || value === "0";
      //   },
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleVisibility() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.friendIsFavorite = !this.friendIsFavorite;
    },
  },
};
</script>