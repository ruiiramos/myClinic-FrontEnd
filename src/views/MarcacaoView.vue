<template>
    <div class="container">
        <!-- Barra lateral -->
        <div class="sidebar">
          <!-- Conteúdo da barra lateral aqui -->
          <ul class="sidebar-icons">
            <li>Ícone 1</li>
            <li>Ícone 2</li>
            <!-- Mais ícones aqui -->
          </ul>
        </div>
    
    <div class="myclinic">
        <div class="progress-bar">
          <!-- Barra de progresso com etapas -->
          <span class="active">1. Dados da Marcação</span>
          <span>2. Outra Etapa</span>
          <span>3. Confirmação</span>
        </div>
        <form class="appointment-form">
          <!-- Dropdown para Especialidade -->
          <label for="especialidade">Selecione Especialidade</label>
          <select id="especialidade">
            <option value="" disabled selected>Escolha uma opção</option>
            <!-- Opções de especialidades -->
          </select>
    
          <!-- Dropdown para Médico -->
          <label for="medico">Selecione Médico</label>
          <select id="medico">
            <option value="" disabled selected>Escolha uma opção</option>
            <!-- Opções de médicos -->
          </select>
    
          <!-- Dropdown para Sistema de Saude -->
          <label for="sistema-saude">Selecione o seu Sistema de Saude</label>
          <select id="sistema-saude">
            <option value="" disabled selected>Escolha uma opção</option>
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
    border-radius: 15px;
  }

.myclinic {
    font-family: 'Arial', sans-serif;
    color: #000000;
    padding: 20px;
  }
  
  /* Barra de progresso e etapas */
  .progress-bar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .progress-bar span {
    background: #f0f0f0;
    padding: 5px 10px;
    border-radius: 5px;
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