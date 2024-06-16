<template>
    <div class="sidebar">
      <!-- Conteúdo da barra lateral aqui -->
      <ul class="sidebar-icons">
        <img src="../img/myclinic.webp" alt="Logo" class="sidebar-logo">
        <router-link to="/home">
          <img :src="$route.name === 'home' ? '../src/img/icons-sidebar/home-rose.webp' : '../src/img/icons-sidebar/home.webp'" alt="Home" class="sidebar-icon">
        </router-link>
        <router-link to="/dadosmarcacao">
          <img :src="$route.name === 'dadosmarcacao' ? '../src/img/icons-sidebar/plus-rose.webp' : '../src/img/icons-sidebar/plus.webp'" alt="Marcação" class="sidebar-icon">
        </router-link>
        <router-link to="/agenda">
          <img :src="$route.name === 'agenda' ? '../src/img/icons-sidebar/calendar-rose.webp' : '../src/img/icons-sidebar/calendar.webp'" alt="Marcação" class="sidebar-icon">
      </router-link>
        <router-link to="/medicos">
          <img :src="$route.name === 'medicos' ? '../src/img/icons-sidebar/doctor-rose.webp' : '../src/img/icons-sidebar/doctor.webp'" alt="Medicos" class="sidebar-icon">
        </router-link>
        <router-link to="/especialidades">
          <img :src="$route.name === 'especialidades' ? '../src/img/icons-sidebar/especialidades-rose.webp' : '../src/img/icons-sidebar/especialidades.webp'" alt="Especialidades" class="sidebar-icon">
        </router-link>
        <router-link to="/user">
          <img :src="$route.name === 'user' ? '../src/img/icons-sidebar/user-rose.webp' : '../src/img/icons-sidebar/user.webp'" alt="Perfil" class="sidebar-icon">
        </router-link>
        <router-link to="/" @click="logout">
          <img src="../img/icons-sidebar/logout.webp" alt="Terminar Sessão" class="sidebar-icon">
        </router-link>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {

    },
    methods: {
      logout() {
        sessionStorage.removeItem('jwt');
      },
    }
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
  