<template>
  <div>
    <ul></ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      storedResources: [
        {
          id: '1',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: '2',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.com',
        },
      ],
    };
  },
};
</script>
<style>
</style>