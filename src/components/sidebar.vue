<template>
    <div class="sidebar">
      <!-- Conteúdo da barra lateral aqui -->
      <ul class="sidebar-icons">
        <img src="../img/myclinic.png" alt="Logo" class="sidebar-logo">
        <router-link to="/home">
          <img src="../img/icons-sidebar/home.png" alt="Inicio" class="sidebar-icon">
        </router-link>
        <router-link to="/dadosmarcacao">
          <img src="../img/icons-sidebar/plus.png" alt="Marcações" class="sidebar-icon">
        </router-link>
        <img src="../img/icons-sidebar/calendar.png" alt="Agenda" class="sidebar-icon">
        <router-link to="/medicos">
          <img src="../img/icons-sidebar/doctor.png" alt="Médicos" class="sidebar-icon">
        </router-link>
        <router-link to="/especialidades">
          <img src="../img/icons-sidebar/especialidades.png" alt="Especialidades" class="sidebar-icon">
        </router-link>
        <router-link to="/user">
          <img src="../img/icons-sidebar/user.png" alt="Perfil" class="sidebar-icon">
        </router-link>
        <router-link to="/login">
          <img src="../img/icons-sidebar/logout.png" alt="Terminar Sessão" class="sidebar-icon">
        </router-link>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
  }
  </script>
  
  <style scoped>
  .sidebar {
    width: 250px;
    background-color: #f0f0f0;
    padding: 20px;
    height: 100vh;
    background: linear-gradient(135deg, #480ca8, #4cc9f0);
  }
  
  .sidebar-logo {
    width: 90px;
    height: 90px;
    margin-left: 15%;
  }
  
  .sidebar-icon {
    width: 40px;
    height: 40px;
    margin-left: 25%;
    margin-top: 15%;
  }
  </style>
  