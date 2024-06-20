<template>
    <div class="container">
        <!-- Barra lateral -->
        <Sidebar/>
        <div class="content">

            <div v-for="paciente in filteredPacientesBox" :key="paciente.nome">
                <Whitebox :paciente="paciente" @delete-paciente="handleDeletePaciente" />
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from "../components/sidebarAdmin.vue"; 
import Whitebox from "../components/whiteboxPacienteAdmin.vue"; 
import { useUserStore } from '@/stores/user';

export default {
  components: {
    Sidebar,
    Whitebox
  },
  data() {
    return {
      selectedPaciente: '',
      pacientes: [],
      pacientesBox: []
    };
  },
  async created() {
    const userStore = useUserStore();
    try {
      await userStore.fetchPacientes();
      this.pacientes = userStore.pacientes;
      this.pacientesBox = userStore.pacientes;
      //console.log("Fetched Medicos:", this.pacientes);
    } catch (error) {
      console.error('Error fetching pacientes:', error);
    }
  },
  methods: {
    async handleDeletePaciente(id) {
      const userStore = useUserStore();
      //console.log("Handling delete paciente with ID:", id);
      try {
        await userStore.deletePaciente(id);
        this.pacientes = this.pacientes.filter(paciente => paciente.id_user !== id);
        this.pacientesBox = this.pacientesBox.filter(paciente => paciente.id_user !== id);
        //console.log("Fetched pacientes:", this.pacientes);
      } catch (error) {
        console.error('Error deleting paciente:', error);
      }
    }
  },
  computed: {
    filteredPacientesBox() {
      if (!this.selectedPaciente) {
        return this.pacientesBox;
      }
      return this.pacientesBox.filter(paciente =>
        paciente.nome === this.selectedPaciente
      );
    }
  }
};
</script>


<style scoped>
.container {
    display: flex;
    flex-direction: row;
    position: absolute;
    left: 16%;
    
}

.content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    width: 1vw;
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
