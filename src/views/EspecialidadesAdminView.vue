<template>
    <div class="container">
        <!-- Barra lateral -->
        <Sidebar/>

        <div class="content">
            <select v-model="selectedEspecialidade" required>
                <option value="" selected>Selecione uma Especialidade</option>
                <option v-for="especialidade in especialidades" :value="especialidade.value">
                    {{ especialidade.text }}
                </option>
            </select>
          
            <div v-for="especialidade in filteredEspecialidadesBox" :key="especialidade.id_especialidade">
                <Whitebox :especialidade="especialidade" @delete-especialidade="handleDeleteEspecialidade" />
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from "../components/sidebarAdmin.vue"; 
import Whitebox from "../components/whiteboxEspecialidadeAdmin.vue"; 
import { useConsultaStore } from '@/stores/consulta';

export default {
    components: {
        Sidebar,
        Whitebox
    },
    data() {
        return {
            consultaStore: useConsultaStore(),
            selectedEspecialidade: '',
            especialidades: [
                {text: 'Cardiologia', value: 'Cardiologia'},
                {text: 'Dermatologia', value: 'Dermatologia'},
                {text: 'Pediatria', value: 'Pediatria'},
                {text: 'Endocrinologia', value: 'Endocrinologia'},
                {text: 'Estomatologia', value: 'Estomatologia'},
                {text: 'Gastrenterologia', value: 'Gastrenterologia'},
                {text: 'Ginecologia', value: 'Ginecologia'},
                {text: 'Hematologia', value: 'Hematologia'},
                {text: 'Medicina Geral', value: 'Medicina Geral'},
                {text: 'Nefrologia', value: 'Nefrologia'},
                {text: 'Neurologia', value: 'Neurologia'},
                {text: 'Oftalmologia', value: 'Oftalmologia'},
                {text: 'Ortopedia', value: 'Ortopedia'},
                {text: 'Otorrinolaringologia', value: 'Otorrinolaringologia'},
                {text: 'Psiquiatria', value: 'Psiquiatria'},
                {text: 'Radiologia', value: 'Radiologia'},
                {text: 'Reumatologia', value: 'Reumatologia'},
                {text: 'Urologia', value: 'Urologia'}
            ],
            especialidadesBox: []
        }
    },
    async created() {
        const consultaStore = useConsultaStore();
        try {
            await consultaStore.fetchEspecialidades();
            this.especialidadesBox = consultaStore.especialidades;
        } catch (error) {
            console.error('Error fetching especialidades:', error);
        }
    },
    methods: {
    async handleDeleteEspecialidade(id) {
      const consultaStore = useConsultaStore();
      console.log("Handling delete consulta with ID:", id);
      try {
        await consultaStore.deleteEspecialidade(id);
        this.especialidades = this.especialidades.filter(especialidade => especialidade.id_especialidade !== id);
        this.especialidadesBox = this.especialidadesBox.filter(especialidade => especialidade.id_especialidade !== id);
        //console.log("Fetched Medicos:", this.medicos);
      } catch (error) {
        console.error('Error deleting medico:', error);
      }
    }
  },
    computed: {
        filteredEspecialidadesBox() {
            if (!this.selectedEspecialidade) {
                return this.especialidadesBox;
            }
            return this.especialidadesBox.filter(especialidade =>
                especialidade.especialidade === this.selectedEspecialidade
            );
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
    position: relative;
    left: 16%; 

}

select {
    width: 300px;
    height: 50px;
    padding: 10px;
    margin-top: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>
