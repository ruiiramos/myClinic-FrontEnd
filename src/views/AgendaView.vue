<template>
  <div class="container">
    <!-- Barra lateral -->
    <Sidebar/>
    <div id="content">
      <div v-for="consulta in filteredConsultas" :key="consulta.id_consulta">
        <Whitebox :consulta="consulta" @desmarcar-consulta="desmarcarConsulta"/>
      </div>
    </div>
    <div id="popup" class="popup hidden">Consulta desmarcada com sucesso</div>
  </div>
</template>

<script>
import Sidebar from "../components/sidebar.vue"; 
import Whitebox from "../components/whiteboxConsulta.vue"; 
import { useConsultaStore } from '@/stores/consulta';
import { useUserStore } from '@/stores/user';

export default {
  components: {
    Sidebar,
    Whitebox
  },
  data() {
    return {
      filteredConsultas: []
    };
  },
  async created() {
    try {
      const userStore = useUserStore();
      const loggedUser = await userStore.fetchLoggedUser();
      const consultaStore = useConsultaStore();
      await consultaStore.fetchConsultasByPaciente(loggedUser.id_user);
      this.filteredConsultas = consultaStore.consultas; // Correctly assign consultas to filteredConsultas
      console.log('Consultas:', this.filteredConsultas);
    } catch (error) {
      console.error('Error fetching consultas:', error);
    }
  },
  methods: {
    async desmarcarConsulta(id) {
      try {
        const consultaStore = useConsultaStore();
        await consultaStore.deleteConsulta(id);
        this.filteredConsultas = consultaStore.consultas;
        this.showPopup();
      } catch (error) {
        console.error('Error a desmarcar consulta:', error);
      }
    },
    showPopup() {
      const popup = document.getElementById('popup');
      popup.classList.remove('hidden');
      setTimeout(() => {
        popup.classList.add('hidden');
      }, 3000);
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 17%;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
}

.white-rectangle {
  width: 1250px; 
  height: 100px;
  padding: 50px; 
  background-color: white; 
  margin-top: 20px; 
  border-radius: 5px;
  display: flex;
  justify-content: space-between; 
  align-items: center; 
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

.desmarcar-button {
  background: red; 
  color: white; 
  border: none;
  border-radius: 25px; 
  padding: 10px 20px; 
  font-size: 16px; 
  cursor: pointer; 
}

.popup {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: green;
  color: white;
  padding: 15px;
  border-radius: 5px;
  z-index: 1000;
  transition: opacity 0.5s;
}

.hidden {
  opacity: 0;
  visibility: hidden;
}
</style>
