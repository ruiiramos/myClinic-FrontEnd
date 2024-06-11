<template>
    <div class="container">
      <!-- Barra lateral -->
      <Sidebar/>
  
      <div class="myclinic">
        <div class="centered-box">
          <p>Você deseja desmarcar a consulta de:</p>
          <p>Terça-Feira, 14 de Maio às 9:00h</p>
          <p>João Silva - Psicologia</p>
        </div>
        <button class="desmarcar-button" @click="desmarcarConsulta">Desmarcar Consulta</button>
        <!-- Pop-up -->
        <div v-if="popupVisible" class="popup">
          Consulta desmarcada com sucesso
        </div>
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
      return {
        popupVisible: false
      };
    },
    methods: {
      desmarcarConsulta() {
        this.popupVisible = true;
        setTimeout(() => {
          this.popupVisible = false;
          this.$router.push('/agenda');  // Navega para a página "agenda"
        }, 2000); 
      }
    }
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
  
  .centered-box {
    width: 300px; 
    height: 200px; 
    background-color: white; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 15px;
    border: 1px solid black;
  }
  
  .link {
    display: block;
    text-align: center;
    margin-top: 20px;
    color: blue; 
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .desmarcar-button {
    display: block;
    margin-top: 10px;
    padding: 10px 20px; 
    background: red; 
    color: white; 
    border: none; 
    border-radius: 5px; 
    cursor: pointer; 
  }
  
  .popup {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: rgba(0, 255, 8, 0.7);
    color: white;
    padding: 10px;
    border-radius: 5px;
  }
  </style>
  