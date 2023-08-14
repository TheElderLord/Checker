

<template>
  <main>
  <header class="header">
    <h1>{{ headerText }}</h1>
  </header>
  </main>
</template>
  
<script>
import Sidebar from './SideBar.vue';

export default {
  
  props: ['headerText'],
  
  data() {
    return {
      
    };
  },
  created() {
    

  },
  methods: {
    
    
  },
  
}
</script>
  
<style >
header {
  background-color: #1872b7;
  margin:0;
  padding: 0;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  height: 10vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
h1{
  color: black;
}
</style>