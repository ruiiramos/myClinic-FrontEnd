<template>
    <div class="container">
        <!-- Barra lateral -->
        <div class="sidebar">
          <!-- Conteúdo da barra lateral aqui -->
          <ul class="sidebar-icons">
            <img src="../img/myclinic.png" alt="Logo" class="sidebar-logo">
            <img src="../img/noun-house-431615.png" alt="Inicio" class="sidebar-icon">
            <router-link to="/dadosmarcacao">
              <img src="../img/noun-plus-669265.png" alt="Marcações" class="sidebar-icon">
            </router-link>
            <img src="../img/noun-calender-6465838.png" alt="Agenda" class="sidebar-icon">
            <router-link to="/especialidades">
                <img src="../img/noun-doctor-79152.png" alt="Médicos" class="sidebar-icon">
            </router-link>
            <router-link to="/especialidades">
              <img src="../img/noun-diagnosis-6672493.png" alt="Especialidades" class="sidebar-icon">
            </router-link>
            <img src="../img/noun-account-2049214.png" alt="Perfil" class="sidebar-icon">
            <router-link to="/login">
              <img src="../img/noun-logout-6733782.png" alt="Terminar Sessão" class="sidebar-icon">
            </router-link>
          </ul>
        </div>
        <div class="content">
          <select v-model="selectedMedico" required>
              <option value="" disabled selected>Selecione o Médico</option>
              <!-- Opções Médicos -->
          </select>
            <div class="white-rectangle">
              <h2>João Silva</h2>
                <router-link to="/dadosmarcacao">
                    <button class="mark-button">Marcar</button>
                </router-link>
            </div>
            <div class="white-rectangle">
                <h2>João Silva</h2>
                  <router-link to="/dadosmarcacao">
                      <button class="mark-button">Marcar</button>
                  </router-link>
              </div>
              <div class="white-rectangle">
                <h2>João Silva</h2>
                  <router-link to="/dadosmarcacao">
                      <button class="mark-button">Marcar</button>
                  </router-link>
              </div>
              <div class="white-rectangle">
                <h2>João Silva</h2>
                  <router-link to="/dadosmarcacao">
                      <button class="mark-button">Marcar</button>
                  </router-link>
              </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selectedMedico: ''
            }
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

.content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
}

select {
    width: 300px;
    height: 50px;
    padding: 10px;
    margin-top: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.white-rectangle {
    width: 1250px; 
    height: 100px;
    padding: 50px; 
    background-color: white; 
    margin-top: 20px; 
    border-radius: 5px;
    display: flex; /* Layout flexível */
    justify-content: space-between; /* Espaçar elementos */
    align-items: center; /* Alinhar verticalmente */
}

.white-rectangle h2 {
    margin: 0;
    font-size: 30px;
}

.white-rectangle p {
    margin: 5px 0 0 0;
    font-size: 16px;
}

.mark-button {
    background-color: #04D0AB; 
    color: white; 
    border: none;
    border-radius: 25px; 
    padding: 10px 20px; 
    font-size: 16px; 
    cursor: pointer; 
}

.mark-button:hover {
    background-color: #03b89f; /* Cor ao passar o mouse */
}
</style>
