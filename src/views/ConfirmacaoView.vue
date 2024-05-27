<template>
    <div class="container">
      <!-- Barra lateral -->
      <div class="sidebar">
        <!-- Conteúdo da barra lateral aqui -->
        <ul class="sidebar-icons">
          <img src="../img/myclinic.png" alt="Logo" class="sidebar-logo">
          <router-link to="/home">
            <img src="../img/noun-house-431615.png" alt="Inicio" class="sidebar-icon">
          </router-link>
          <router-link to="/dadosmarcacao">
            <img src="../img/noun-plus-669265.png" alt="Marcações" class="sidebar-icon">
          </router-link>
          <img src="../img/noun-calender-6465838.png" alt="Agenda" class="sidebar-icon">
          <router-link to="/medicos">
            <img src="../img/noun-doctor-79152.png" alt="Médicos" class="sidebar-icon">
          </router-link>
          <router-link to="/especialidades">
            <img src="../img/noun-diagnosis-6672493.png" alt="Especialidades" class="sidebar-icon">
          </router-link>
          <router-link to="/user">
            <img src="../img/noun-account-2049214.png" alt="Perfil" class="sidebar-icon">
          </router-link>
          <router-link to="/login">
            <img src="../img/noun-logout-6733782.png" alt="Terminar Sessão" class="sidebar-icon">
          </router-link>
        </ul>
      </div>
  
      <div class="myclinic">
        <div class="progress-bar">
          <!--Barra de progresso com etapas -->
          <span>1. Dados da Marcação</span>
          <span class="active">3. Confirmação</span>
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
  export default {
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
    margin-right: 250px; 
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
    cursor: pointer; /* Cursor de ponteiro ao passar o mouse */
  
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
  