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
        
        
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
}

.sidebar {
    width: 250px; /* Largura da barra lateral */
    background-color: #f0f0f0; /* Cor de fundo da barra lateral */
    padding: 20px;
    height: 100vh; /* Altura total da tela */
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
</style>
