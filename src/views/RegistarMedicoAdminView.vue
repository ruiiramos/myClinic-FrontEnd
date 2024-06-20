<template>
    <div class="container">
        <!-- Barra lateral -->
        <Sidebar />
        <div class="myclinic">
            <form class="appointment-form" @submit.prevent="handleSubmit">
                <div class="input-group">
                    <label for="nome-medico">Nome</label>
                    <input type="text" id="nome-medico" v-model="formData.nome" placeholder="Insira o nome do médico" required>
                </div>
                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="text" id="email" v-model="formData.email" placeholder="Insira o email do médico">
                </div>
                <div class="input-group">
                    <label for="cedula-medico">Cédula</label>
                    <input type="text" id="cedula-medico" v-model="formData.nome" placeholder="Insira a cedula médica" required>
                </div>
                <!-- Dropdown para Especialidade -->
                <div class="input-group">
                    <label for="especialidade">Especialidade</label>
                    <select id="especialidade" v-model="formData.especialidade" @change="fetchMedicosByEspecialidade" required>
                        <option value="" disabled selected>Selecione uma especialidade</option>
                        <option v-for="especialidade in especialidades" :value="especialidade.value">{{ especialidade.text }}</option>
                    </select>
                </div>
                <div class="input-group">
                    <label for="psw-medico">Palavra-Passe</label>
                    <input type="password" id="psw-medico" v-model="formData.nome" placeholder="Insira a Palavra passe" required>
                </div>
                <!-- Botão Registar -->
                <button type="submit" class="btn-registar-medico">Registar Médico</button>
            </form>
            <div v-if="notification.message" :class="['notification', notification.type]">
                {{ notification.message }}
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from "../components/sidebarAdmin.vue";
import { useConsultaStore } from '@/stores/consulta';
import { useUserStore } from '@/stores/user';

export default {
    components: {
        Sidebar,
    },
    data() {
        return {
            consultaStore: useConsultaStore(),
            userStore: useUserStore(),
            formData: {
                data: '',
                especialidade: '',
                horario: '',
                preco_consulta: '70.00',
                medico: '',
                paciente: '',
            },
            especialidades: [
                { text: 'Cardiologia', value: 'Cardiologia' },
                { text: 'Dermatologia', value: 'Dermatologia' },
                { text: 'Pediatria', value: 'Pediatria' },
                { text: 'Endocrinologia', value: 'Endocrinologia' },
                { text: 'Estomatologia', value: 'Estomatologia' },
                { text: 'Gastrenterologia', value: 'Gastrenterologia' },
                { text: 'Ginecologia', value: 'Ginecologia' },
                { text: 'Hematologia', value: 'Hematologia' },
                { text: 'Medicina Geral', value: 'Medicina Geral' },
                { text: 'Nefrologia', value: 'Nefrologia' },
                { text: 'Neurologia', value: 'Neurologia' },
                { text: 'Oftalmologia', value: 'Oftalmologia' },
                { text: 'Ortopedia', value: 'Ortopedia' },
                { text: 'Otorrinolaringologia', value: 'Otorrinolaringologia' },
                { text: 'Psiquiatria', value: 'Psiquiatria' },
                { text: 'Radiologia', value: 'Radiologia' },
                { text: 'Reumatologia', value: 'Reumatologia' },
                { text: 'Urologia', value: 'Urologia' }
            ],
            medicos: [],
            notification: {
                message: '',
                type: '' // 'success' or 'error'
            }
        }
    },
    async created() {
        const queryEspecialidade = this.$route.query.especialidade;
        if (queryEspecialidade) {
            this.formData.especialidade = queryEspecialidade;
            await this.fetchMedicosByEspecialidade();
        }
    },
    methods: {
        async fetchMedicosByEspecialidade() {
            const consultaStore = useConsultaStore();
            try {
                const especialidade = this.formData.especialidade;
                const data = `?especialidade=${especialidade}`
                const response = await consultaStore.fetchMedicosByEspecialidade(data);

                const medicosNomes = response.map(medico => ({ text: medico.nome, value: medico.nome }));

                this.medicos = medicosNomes;
            } catch (error) {
                console.error('Error fetching medicos:', error);
                this.showNotification('Failed to fetch medicos. Please try again.', 'error');
            }
        },
        async handleSubmit() {
            const consultaStore = useConsultaStore();
            const loggedUser = await this.userStore.fetchLoggedUser();

            try {
                const consultaData = {
                    data: this.formData.data,
                    hora: this.formData.horario,
                    preco_consulta: this.formData.preco_consulta,
                    nome_medico: this.formData.medico,
                    nome_paciente: loggedUser.nome
                };

                await consultaStore.createConsultas(consultaData);
                this.showNotification('Consulta criada com sucesso!', 'success');
            } catch (error) {
                console.error('Error creating consulta:', error);
                const errorMessage = error.response?.data?.message || 'Falha ao criar consulta. Por favor, tente novamente.';
                this.showNotification(errorMessage, 'error');
            }
        },
        showNotification(message, type) {
            this.notification.message = message;
            this.notification.type = type;
            setTimeout(() => {
                this.notification.message = '';
                this.notification.type = '';
                if (type === 'success') {
                    this.$router.push('/home');
                }
            }, 2000);
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 80vw;
    overflow: hidden;
    position: relative;
    left: 17%;
}

.myclinic {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
}

.appointment-form {
    display: flex;
    flex-direction: column;
    width: 50%;
    max-width: 600px;
}

.input-group {
    margin-bottom: 20px;
}

.input-group label {
    display: block;
    margin-bottom: 5px;
    color: var(--color-heading);
}

.input-group input,
.input-group select {
    width: 100%;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #6E7179;
    background-color: transparent;
    outline: none;
}

.input-group input:focus,
.input-group select:focus {
    border-color: var(--color-border-hover);
}

select {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.btn-registar-medico {
    background: linear-gradient(135deg, #480ca8, #4cc9f0);
    color: white;
    border: none;
    padding: 10px 20px;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
}

.btn-registar-medico:hover {
    background-color: blue;
}

.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px 20px;
    color: white;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}

.notification.success {
    background-color: green;
}

.notification.error {
    background-color: red;
}
</style>