<template>
    <div class="container">
        <!-- Barra lateral -->
        <Sidebar/>
        <div class="content">

            <div v-for="medico in filteredMedicosBox" :key="medico.email">
                <Whitebox :medico="medico" @delete-medico="handleDeleteMedico" />
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from "../components/sidebarAdmin.vue"; 
import Whitebox from "../components/whiteboxMedicoAdmin.vue"; 
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
      //console.log("Fetched Medicos:", this.medicos);
    } catch (error) {
      console.error('Error fetching medicos:', error);
    }
  },
  methods: {
    async handleDeleteMedico(id) {
      const userStore = useUserStore();
      //console.log("Handling delete medico with ID:", id);
      try {
        await userStore.deleteMedico(id);
        this.medicos = this.medicos.filter(medico => medico.id_user !== id);
        this.medicosBox = this.medicosBox.filter(medico => medico.id_user !== id);
        //console.log("Fetched Medicos:", this.medicos);
      } catch (error) {
        console.error('Error deleting medico:', error);
      }
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
