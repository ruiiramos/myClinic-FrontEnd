<template>
    <div class="container">
      <!-- Barra lateral -->
      <Sidebar/>
  
      <div class="myclinic">
        <div class="progress-bar">
          <!--Barra de progresso com etapas -->
          <span>1. Dados da Marcação</span>
          <span class="active">2. Confirmação</span>
        </div>
        <div class="centered-box">
          <p>Você deseja marcar uma consulta para:</p>
          <p>Terça-Feira, 14 de Maio às 9:00h</p>
          <a href='/dadosmarcacao' class="link">Alterar dados ou horario</a>
          <p>João Silva - Psicologia</p>
        </div>
        <button class="confirm-button" @click="showPopup">Confirmar Consulta</button>
        <!-- Pop-up -->
        <div v-if="popupVisible" class="popup">
          Consulta marcada com sucesso
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
      showPopup() {
        this.popupVisible = true;
        setTimeout(() => {
          this.popupVisible = false;
        }, 2000); // 2 segundos
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: row;
  }
  
  .sidebar {
    width: 250px; 
    background-color: #f0f0f0; 
    padding: 20px;
    height: 100vh; 
    background: #04D0AB;
  }
  .sidebar-logo {
    width: 90px;
    height: 90px;
    margin-left: 15%;
  }
  
  .sidebar-icon {
    width: 50px;
    height: 50px;
    margin-left: 25%;
    margin-top: 15%;
  }
  
  .myclinic {
    font-family: 'Arial', sans-serif;
    color: #000000;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;

  }
  
  /* Barra de progresso e etapas */
  .progress-bar {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .progress-bar span {
    background: #f0f0f0;
    padding: 5px 10px;
    border-radius: 5px;
    margin-left: auto; 
    margin-right: auto;
  }
  
  .progress-bar span.active {
    background: #04D0AB;
    color: black;
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
  }
  
  .link {
    display: block;
    text-align: center;
    margin-top: 20px;
    color: #04D0AB; 
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .confirm-button {
    display: block;
    margin-top: 10px;
    padding: 10px 20px; 
    background-color: #04D0AB; 
    color: white; 
    border: none; 
    border-radius: 5px; 
    cursor: pointer; 
  }
  
  .confirm-button:hover {
    background-color: #03b598; 
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
  