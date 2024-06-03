<template>
    <div class="container">
      <!-- Barra lateral -->
      <Sidebar/>
  
      <div class="myclinic">
  
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from "../components/sidebar.vue"; 


  export default {
    components: {
    Sidebar, 
  },
    data() {
    },
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: row;
  }
  
  
  
  .myclinic {
    font-family: 'Arial', sans-serif;
    color: #000000;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  </style>
  