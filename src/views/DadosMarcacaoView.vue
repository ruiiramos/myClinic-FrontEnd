<template>
  <div class="container">
    <!-- Barra lateral -->
    <div class="sidebar">
      <!-- Conteúdo da barra lateral aqui -->
      <ul class="sidebar-icons">
        <img src="../img/myclinic.png" alt="Logo" class="sidebar-logo">
        <img src="../img/noun-house-431615.png" alt="Inicio" class="sidebar-icon">
        <img src="../img/noun-plus-669265.png" alt="Marcações" class="sidebar-icon">
        <img src="../img/noun-calender-6465838.png" alt="Agenda" class="sidebar-icon">
        <img src="../img/noun-doctor-79152.png" alt="Médicos" class="sidebar-icon">
        <img src="../img/noun-diagnosis-6672493.png" alt="Especialidades" class="sidebar-icon">
        <img src="../img/noun-account-2049214.png" alt="Perfil" class="sidebar-icon">
        <img src="../img/noun-logout-6733782.png" alt="Terminar Sessão" class="sidebar-icon">
      </ul>
    </div>

    <div class="myclinic">
      <div class="progress-bar">
        <!-- Barra de progresso com etapas -->
        <span class="active">1. Dados da Marcação</span>
        <span>2. Agendamento</span>
        <span>3. Confirmação</span>
    </div>
      <form class="appointment-form" @submit.prevent="submitForm">
        <!-- Dropdown para Especialidade -->
        <select v-model="selectedEspecialidade" required>
          <option value="" disabled selected>Selecione Especialidade</option>
          <!-- Opções de especialidades -->
        </select>

        <!-- Dropdown para Médico -->
        <select v-model="selectedMedico" required>
          <option value="" disabled selected>Selecione Médico</option>
          <!-- Opções de médicos -->
        </select>

        <!-- Dropdown para Sistema de Saude -->
        <select v-model="selectedSistemaSaude" required>
          <option value="" disabled selected>Selecione o seu Sistema de Saude</option>
          <option value="adse">ADSE</option>
          <option value="multicare">Multicare</option>
        </select>

        <!-- Botão Continuar -->
        <button type="submit" class="btn-continuar">Continuar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedEspecialidade: '',
      selectedMedico: '',
      selectedSistemaSaude: ''
    }
  },
  methods: {
    submitForm() {
      // Aqui você pode fazer o redirecionamento para outra página
      this.$router.push('/agendamento');
    }
  }
}
</script>


<style scoped>
/* Estilos gerais */
/* Estilos gerais */
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
  .sidebar-logo{
  width: 90px;
  height: 90px;
  margin-left: 15%;
  }

  .sidebar-icon{
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
      margin-right: 250px; /* Adiciona margem à direita de cada span */
    }
  
  .progress-bar span.active {
    background: #04D0AB;
    color: black;
  }
  
  /* Estilos dos dropdowns */
  select {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  /* Botão Continuar */
  .btn-continuar {
    background-color: #04D0AB;
    color: white;
    border: none;
    padding: 10px 20px;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    
  }
  
  .btn-continuar:hover {
    background-color: #038c6e;
  }
  
</style>