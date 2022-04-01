<template>
  <li>
    <div>
      <header>
        <h3>{{ title }}</h3>
        <button>Delete</button>
      </header>
    </div>
    <p>{{ description }}</p>
    <nav>
      <a :href="link">View resource</a>
    </nav>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      reqired: true,
    },
    title: {
      type: String,
      reqired: true,
    },
    description: {
      type: String,
      reqired: true,
    },
    link: {
      type: String,
      reqired: true,
    },
  },
  data() {
    return {};
  },
};
</script>