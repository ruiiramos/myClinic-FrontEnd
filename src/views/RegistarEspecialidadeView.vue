<template>
    <div class="container">
        <!-- Barra lateral -->
        <Sidebar />
        <div class="myclinic">
            <form class="appointment-form" @submit.prevent="handleSubmit">
                <div class="input-group">
                    <label for="especialidade">Especialidade</label>
                    <input type="text" id="especialidade" v-model="especialidade" placeholder="Insira o nome da especialidade" required>
                </div>

                <!-- Botão Registar -->
                <button type="submit" class="btn-registar-especialidade">Registar Especialidade</button>
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
            especialidade: '',
            notification: {
                message: '',
                type: '' // 'success' or 'error'
            }
        }
    },
    methods: {
        async handleSubmit() {
            const consultaStore = useConsultaStore();

            try {
                const especialidade = {especialidade: this.especialidade };

                await consultaStore.createEspecialidades(especialidade);
                this.showNotification('Especialidade criada com sucesso!', 'success');
            } catch (error) {
                console.error('Error creating especialidade:', error);
                const errorMessage = error.response.data.message || 'Falha ao criar especialidade. Por favor, tente novamente.';
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
                    this.$router.push('/homeadmin');
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

.btn-registar-especialidade {
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

.btn-registar-especialidade:hover {
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