<template>
    <div class="container">
        <!-- Barra lateral -->
        <Sidebar/>
        <div class="content">
            <select v-model="selectedMedico" required>
                <option value="" selected>Selecione um médico</option>
                <option v-for="medico in medicos" :key="medico.email" :value="medico.nome">
                    {{ medico.nome }}
                </option>
            </select>
            <div v-for="medico in filteredMedicosBox" :key="medico.email">
                <Whitebox :medico="medico" />
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from "../components/sidebar.vue"; 
import Whitebox from "../components/whiteboxMedico.vue"; 
import { useUserStore } from '@/stores/user';

export default {
  components: {
    Sidebar,
    Whitebox
  },
  data() {
    return {
      selectedMedico: '',
      medicos: [],
      medicosBox: []
    };
  },
  async created() {
    const userStore = useUserStore();
    try {
      await userStore.fetchMedicos();
      this.medicos = userStore.medicos;
      this.medicosBox = userStore.medicos;
      console.log("Fetched Medicos:", this.medicos);  // Debugging
    } catch (error) {
      console.error('Error fetching medicos:', error);
    }
  },
  computed: {
    filteredMedicosBox() {
      if (!this.selectedMedico) {
        return this.medicosBox;
      }
      return this.medicosBox.filter(medico =>
        medico.nome === this.selectedMedico
      );
    }
  }
};
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
