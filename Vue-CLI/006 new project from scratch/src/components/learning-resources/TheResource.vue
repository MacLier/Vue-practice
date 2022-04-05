<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resource')"
      >Stored Resource</base-button
    >
    <base-button @click="setSelectedTab('add-resource')"
      >Add Resource</base-button
    >
  </base-card>
  <component :is="selectedTab"></component>
</template>
<script>

import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue'
import BaseCard from '../UI/BaseCard.vue';
import BaseButton from '../UI/BaseButton.vue';
export default {
  components: { BaseCard, BaseButton, StoredResources, AddResource },
  data(){
      return {
          selectedTab: 'stored-resource';
      }
  },
  methods: {
      setSelecetedTab(tab){
          this.setSelecetedTab = tab;
      }
  }
};
</script>
<style scoped>
</style>