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
                <div class="retangulo-medicos">
                    <h3>Lista de Médicos</h3>
                    <div class="medicos-list">
                        <div v-for="medico in medicos" :key="medico.id_user" class="medico-item">
                            {{ medico.nome }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="retangulo-calendario">
                    <h3>Suas Consultas</h3>
                    <div class="consultas-list">
                        <div v-for="consulta in consultas" :key="consulta.id_consulta" class="consulta-item">
                            {{ formatDate(consulta.data) }} - {{ consulta.hora }} - Médico: {{ consulta.nome_medico }}
                        </div>
                    </div>
                </div>

                <div class="retangulo-especialidades">
                    <h3>Especialidades</h3>
                    <div class="especialidades-list">
                        <div v-for="especialidade in especialidades" :key="especialidade.id_especialidade" class="especialidade-item">
                            {{ especialidade.nome }}
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
    </div>
</template>

<script>
   import Sidebar from "../components/sidebar.vue"; 
   import { useUserStore } from '@/stores/user';
   import { useConsultaStore } from '@/stores/consulta';

    export default {
        components: {
            Sidebar,
        },
        data() {
            return {
                userStore: useUserStore(),
                consultaStore: useConsultaStore(),
                userName: '',
                medicos: [],
                consultas: [],
                especialidades: []
            }
        },
        async created() {
            try {
                const loggedUser = await this.userStore.fetchLoggedUser();
                console.log(loggedUser);
                this.userName = loggedUser ? loggedUser.nome : 'Paciente';

                await this.fetchMedicos();
                await this.fetchConsultas();
                await this.fetchEspecialidades();
            } catch (error) {
                console.error('Error fetching logged-in user:', error);
            }
        },
        methods: {
            async fetchMedicos() {
                try {
                    await this.userStore.fetchMedicos();
                    this.medicos = this.userStore.medicos;
                } catch (error) {
                    console.error('Error fetching doctors:', error);
                }
            },
            async fetchConsultas() {
                try {
                    const loggedUser = await this.userStore.fetchLoggedUser();
                    await this.consultaStore.fetchConsultasByPaciente(loggedUser.id_user);
                    this.consultas = this.consultaStore.consultas;
                } catch (error) {
                    console.error('Error fetching consultations:', error);
                }
            },
            async fetchEspecialidades() {
                try {
                    await this.consultaStore.fetchEspecialidades();
                    this.especialidades = this.consultaStore.especialidades;
                } catch (error) {
                    console.error('Error fetching specialties:', error);
                }
            },
            formatDate(dateTimeString) {
                const date = new Date(dateTimeString);
                const formattedDate = date.toLocaleDateString('pt-BR');
                const formattedTime = date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
                return `${formattedDate} - ${formattedTime}`;
            },
        },
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

.retangulo-calendario {
    width: 400px;
    height: 300px;
    padding: 20px;
    background-color: white;
    margin-top: 20px;
    border-radius: 15px;
    border: 1px solid black;
    overflow-y: auto;
}

.consultas-list {
    display: flex;
    flex-direction: column;
}

.consulta-item {
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
