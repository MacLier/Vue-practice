<template>
  <li>
    <h3>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h3>
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
    id: {
      type: String,
      required: true,
    },
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
    emits: ["toggle-favorite"], // default
//   emits: {  // define to validate events
//     "toggle-favorite": function (id) {
//       if (id) {
//         return true;
//       } else {
//         console.log("Id is missing!");
//         return false;
//       }
//     },
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleVisibility() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>