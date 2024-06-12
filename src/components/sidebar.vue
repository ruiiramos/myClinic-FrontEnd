<template>
    <div class="sidebar">
      <!-- Conteúdo da barra lateral aqui -->
      <ul class="sidebar-icons">
        <img src="../img/myclinic.webp" alt="Logo" class="sidebar-logo">
        <router-link to="/home">
          <img :src="$route.name === 'home' ? '../src/img/icons-sidebar/home-rose.png' : '../src/img/icons-sidebar/home.png'" alt="Home" class="sidebar-icon">
        </router-link>
        <router-link to="/dadosmarcacao">
          <img :src="$route.name === 'dadosmarcacao' ? '../src/img/icons-sidebar/plus-rose.png' : '../src/img/icons-sidebar/plus.png'" alt="Marcação" class="sidebar-icon">
        </router-link>
        <router-link to="/agenda">
          <img :src="$route.name === 'agenda' ? '../src/img/icons-sidebar/calendar-rose.png' : '../src/img/icons-sidebar/calendar.png'" alt="Marcação" class="sidebar-icon">
      </router-link>
        <router-link to="/medicos">
          <img :src="$route.name === 'medicos' ? '../src/img/icons-sidebar/doctor-rose.png' : '../src/img/icons-sidebar/doctor.png'" alt="Medicos" class="sidebar-icon">
        </router-link>
        <router-link to="/especialidades">
          <img :src="$route.name === 'especialidades' ? '../src/img/icons-sidebar/especialidades-rose.png' : '../src/img/icons-sidebar/especialidades.png'" alt="Especialidades" class="sidebar-icon">
        </router-link>
        <router-link to="/user">
          <img :src="$route.name === 'user' ? '../src/img/icons-sidebar/user-rose.png' : '../src/img/icons-sidebar/user.png'" alt="Perfil" class="sidebar-icon">
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
  