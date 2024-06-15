<template>
    <div class="container">
        <!-- Barra lateral -->
        <Sidebar/>
        <div class="content">
          <select v-model="selectedEspecialidade" required>
              <option value="" disabled selected>Selecione um médico</option>
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
import Sidebar from "../components/sidebar.vue"; 

export default {
  components: {
    Sidebar,
  },
        data() {
            return {
                selectedEspecialidade: ''
            }
        }
    }
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
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
    border: 1px solid black;
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
    background: linear-gradient(135deg, #480ca8, #4cc9f0); 
    color: white; 
    border: none;
    border-radius: 25px; 
    padding: 10px 20px; 
    font-size: 16px; 
    cursor: pointer; 
}
</style>
