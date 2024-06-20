<template>
    <div class="sidebar">
      <!-- Conteúdo da barra lateral aqui -->
      <ul class="sidebar-icons">
        <img src="../img/myclinic.webp" alt="Logo" class="sidebar-logo">
        <router-link to="/homeadmin">
          <img :src="$route.name === 'homeadmin' ? '../src/img/icons-sidebar/home-rose.webp' : '../src/img/icons-sidebar/home.webp'" alt="Home" class="sidebar-icon">
        </router-link>
        <router-link to="#">
          <img :src="$route.name === 'dadosmarcacao' ? '../src/img/icons-sidebar/plus-rose.webp' : '../src/img/icons-sidebar/plus.webp'" alt="Marcação" class="sidebar-icon">
        </router-link>
        <router-link to="patientadmin">
          <img :src="$route.name === 'patientadmin' ? '../src/img/icons-sidebar/patient-rose.webp' : '../src/img/icons-sidebar/patient.webp'" alt="Marcação" class="sidebar-icon">
        </router-link>
        <router-link to="/medicosadmin">
          <img :src="$route.name === 'medicosadmin' ? '../src/img/icons-sidebar/doctor-rose.webp' : '../src/img/icons-sidebar/doctor.webp'" alt="Medicos" class="sidebar-icon">
        </router-link>
        <router-link to="/especialidadesadmin">
          <img :src="$route.name === 'especialidadesadmin' ? '../src/img/icons-sidebar/especialidades-rose.webp' : '../src/img/icons-sidebar/especialidades.webp'" alt="Especialidades" class="sidebar-icon">
        </router-link>
        <router-link to="#">
          <img :src="$route.name === 'user' ? '../src/img/icons-sidebar/user-rose.webp' : '../src/img/icons-sidebar/user.webp'" alt="Perfil" class="sidebar-icon">
        </router-link>
        <router-link to="/" @click="logout">
          <img src="../img/icons-sidebar/logout.webp" alt="Terminar Sessão" class="sidebar-icon">
        </router-link>
      </ul>
    </div>
  </template>
  
  <script>
    import { useUserStore } from '@/stores/user';
    export default {
      methods: {
        logout() {
          const userStore = useUserStore();
          userStore.logout();
        },
      }
    }
  </script>
  
  <style scoped>
  .sidebar {
    display: flex;
    position: fixed; /* Alterado para fixed */
    top: 0;
    left: 0; /* Adicionado para garantir que a barra lateral fique no lado esquerdo da tela */
    width: 250px;
    height: 100vh; /* Alterado para 100vh para cobrir toda a altura da janela */
    background-color: #f0f0f0;
    padding-left: 20px;
    padding-right: 20px;
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
  