<template>
    <div class="container">
        <!-- Barra lateral -->
        <Sidebar/>

        <div class="content">
            <div class="column">
                <div class="retangulo-bem-vindo">
                    <img src="../img/myclinic.webp" alt="logo">
                    <div class="text-container">
                        <h2>Olá {{ userName }},</h2>
                        <p>Seja bem-vindo à sua página pessoal da myClinic!</p>
                    </div>
                </div>
                <div class="retangulo-medicos" @click="medicosPush">
                    <h3>Lista de Médicos</h3>
                    <div class="medicos-list">
                        <div v-for="medico in medicos" :key="medico.id_user" class="medico-item">
                            {{ medico.nome }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="retangulo-pacientes" @click="pacientesPush">
                    <h3>Lista de Pacientes</h3>
                    <div class="pacientes-list">
                        <div v-for="paciente in pacientes" :key="paciente.id_user" class="paciente-item">
                            {{ paciente.nome }}
                        </div>
                    </div>
                </div>
                <div class="retangulo-especialidades" @click="especialidadesPush">
                    <h3>Especialidades</h3>
                    <div class="especialidades-list">
                        <div v-for="especialidade in especialidades" :key="especialidade.id_especialidade" class="especialidade-item">
                            {{ especialidade.especialidade }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
   import Sidebar from "../components/sidebarAdmin.vue"; 
   import { useUserStore } from '@/stores/user';
   import { useConsultaStore } from '@/stores/consulta';

    export default {
        components: {
            Sidebar,
        },
        data() {
            return {
                userStore: useUserStore(),
                consultaStore: useConsultaStore(), // Added initialization of consultaStore
                userName: '',
                medicos: [],
                pacientes: [],
                especialidades: []
            }
        },
        async created() {
            try {
                const loggedUser = await this.userStore.fetchLoggedUser();
                this.userName = loggedUser ? loggedUser.nome : 'Paciente';
                
                // Fetch data
                await this.fetchMedicos();
                await this.fetchPacientes();
                await this.fetchEspecialidades();
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        methods: {
            async fetchMedicos() {
                try {
                    await this.userStore.fetchMedicos();
                    this.medicos = this.userStore.medicos;
                } catch (error) {
                    console.error('Error fetching médicos:', error);
                }
            },
            async fetchPacientes() {
                try {
                    await this.userStore.fetchPacientes();
                    this.pacientes = this.userStore.pacientes;
                } catch (error) {
                    console.error('Error fetching pacientes:', error);
                }
            },
            async fetchEspecialidades() {
                try {
                    await this.consultaStore.fetchEspecialidades();
                    this.especialidades = this.consultaStore.especialidades;
                } catch (error) {
                    console.error('Error fetching especialidades:', error);
                }
            },
            medicosPush() {
                this.$router.push('/medicosadmin');
            },
            pacientesPush() {
                this.$router.push('/patientadmin');
            },
            especialidadesPush() {
                this.$router.push('/especialidadesadmin');
            },
        }
    }
</script>

<style scoped>
.container {
    display: flex;
    height: 100vh; 
    overflow: hidden; 
}

.content {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 20px;
    position: absolute;
    left: 19%;
}

.column {
    display: flex;
    flex-direction: column;
    margin-right: 50px; 
}

.retangulo-bem-vindo {
    width: 700px; 
    height: 200px;
    padding: 50px; 
    background-color: white; 
    margin-top: 20px; 
    border-radius: 15px;
    display: flex; 
    align-items: center; 
    border: 1px solid black;
}

.retangulo-bem-vindo img {
    width: 130px;
    height: 130px;
    margin-right: 20px;
}

.text-container {
    display: flex;
    flex-direction: column;
}

.text-container h2 {
    font-size: 35px;
}

.text-container p {
    font-size: 17px;
}

.retangulo-medicos {
    width: 700px;
    height: 400px;
    padding: 20px;
    background-color: white;
    margin-top: 20px;
    border-radius: 15px;
    border: 1px solid black;
    overflow-y: auto;
    cursor: pointer;
}

.retangulo-medicos h3 {
    margin-bottom: 5px;
}

.medicos-list {
    display: flex;
    flex-wrap: wrap;
}

.medico-item {
    background-color: #f0f0f0;
    padding: 10px;
    margin: 5px;
    border-radius: 8px;
    width: calc(50% - 20px);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.retangulo-pacientes {
    width: 400px;
    height: 300px;
    padding: 20px;
    background-color: white;
    margin-top: 20px;
    border-radius: 15px;
    border: 1px solid black;
    overflow-y: auto;
    cursor: pointer;
}

.retangulo-pacientes h3 {
    margin-bottom: 5px;
}

.pacientes-list {
    display: flex;
    flex-direction: column;
}

.paciente-item {
    background-color: #f0f0f0;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.retangulo-especialidades {
    width: 400px;
    height: 300px;
    padding: 20px;
    background-color: white;
    margin-top: 20px;
    border-radius: 15px;
    border: 1px solid black;
    overflow-y: auto;
    cursor: pointer;
}

.retangulo-especialidades h3 {
    margin-bottom: 5px;
}

.especialidades-list {
    display: flex;
    flex-direction: column;
}

.especialidade-item {
    background-color: #f0f0f0;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
</style>
