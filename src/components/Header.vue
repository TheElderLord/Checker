<template>
    <header class="header">
      <h1>{{ headerText }}</h1>
    </header>
  </template>
  
  <script>
  // import { eventBus } from '../event-bus';
  
  export default {
    data() {
      return {
        headerText: ''
      };
    },
    created() {
      eventBus.$on('updateHeaderText', this.updateHeaderText);
    },
    methods: {
      updateHeaderText(text) {
        this.headerText = text;
      }
    }
  }
  </script>
  