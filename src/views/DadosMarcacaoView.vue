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
        <!-- Barra de progresso com etapas -->
        <span class="active">1. Dados da Marcação</span>
        <span>2. Confirmação</span>
      </div>
      <form class="appointment-form" @submit.prevent="submitForm">

        <div class="input-group">
          <label for="dNascimento">Selecione uma data</label>
          <input type="date" id="dNascimento" v-model="DataConsulta" required>
        </div>
        <!-- Dropdown Horarios -->
        <select v-model="selectedHorarios" required>
        <option value="" disabled selected>Selecione Horário</option>
        <option value="9:00">9:00</option>
        <option value="10:00">10:00</option>
        <option value="11:00">11:00</option>
        <option value="12:00">12:00</option>
        <option value="14:00">14:00</option>
        <option value="15:00">15:00</option>
        <option value="16:00">16:00</option>
        <option value="17:00">17:00</option>
        <option value="18:00">18:00</option>
        
        </select>
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
      DataConsulta: '',
      selectedHorarios: '',
      selectedEspecialidade: '',
      selectedMedico: '',
      selectedSistemaSaude: ''
    }
  },
  methods: {
    
  }
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
    margin-left: auto;
    margin-right: auto;

  }
  
    /* Barra de progresso e etapas */
    .progress-bar {
      margin-bottom: 20px;  
    }
    
    .progress-bar span {
      background: #f0f0f0;
      padding: 5px 10px;
      border-radius: 5px;
 
      margin-right: 25%;
    }
  
  .progress-bar span.active {
    margin-left: 15%;
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

  .input-group {
    margin-bottom: 20px;
    
  }
  
  .input-group label {
    display: block;
    margin-bottom: 5px;
    color: var(--color-heading);
  }
  
  .input-group input,
  .input-group select {
    width: 100%;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #6E7179;
    background-color: transparent;
    outline: none;
  }
  
  .input-group input:focus,
  .input-group select:focus {
    border-color: var(--color-border-hover);
  }
  
  
</style>