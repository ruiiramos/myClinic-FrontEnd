<template>
  <div class="container">
      <!-- Barra lateral -->
      <Sidebar/>
      <div class="myclinic">
        <form class="appointment-form" @submit.prevent="handleSubmit">
          <div class="input-group">
            <label for="data_nascimento">Selecione uma data</label>
            <input type="date" id="data_nascimento" v-model="formData.data" required>
          </div>
  
          <!-- Dropdown para Especialidade -->
          <label for="especialidade">Especialidade</label>
          <select id="especialidade" v-model="formData.especialidade" @change="fetchMedicosByEspecialidade" required>
            <option value="" disabled selected>Selecione uma especialidade</option>
            <option v-for="especialidade in especialidades" :value="especialidade.value">{{ especialidade.text }}</option>
          </select>
  
          <!-- Dropdown para Médico -->
          <label for="medico">Médico</label>
          <select id="medico" v-model="formData.medico" required>
            <option value="" disabled selected>Selecione um médico</option>
            <option v-for="medico in medicos" :value="medico.value">{{ medico.text }}</option>
          </select>
  
          <!-- Dropdown Horarios -->
          <label for="horarios">Hórario</label>
          <select id="horarios" v-model="formData.horario" required>
            <option value="" disabled selected>Selecione um horário</option>
            <option v-for="horario in horarios" :value="horario.value">{{ horario.text }}</option>
          </select>
  
          <!-- Dropdown para Sistema de Saude -->
          <label for="sistema_saude">Sistema de Saúde</label>
          <select id="sistema_saude" v-model="formData.sistema_saude" required>
            <option value="" disabled selected>Selecione o seu Sistema de Saude</option>
            <option v-for="sistema in sistemas_saude" :value="sistema.value">{{ sistema.text }}</option>
          </select>
  
          <!-- Botão Continuar -->
          <button type="submit" class="btn-continuar">Marcar Consulta</button>
        </form>
        <div v-if="notification.message" :class="['notification', notification.type]">
          {{ notification.message }}
        </div>
      </div>
  </div>
</template>

<script>
import Sidebar from "../components/sidebar.vue"; 
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
      horarios: [
        {text: '09:00', value: '09:00'},
        {text: '10:00', value: '10:00'},
        {text: '11:00', value: '11:00'},
        {text: '12:00', value: '12:00'},
        {text: '14:00', value: '14:00'},
        {text: '15:00', value: '15:00'},
        {text: '16:00', value: '16:00'},
        {text: '17:00', value: '17:00'},
        {text: '18:00', value: '18:00'}
      ],
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
      sistemas_saude: [
        {text: 'ADSE', value: 'ADSE'},
        {text: 'Medicare', value: 'Medicare'},
        {text: 'Fidelidade', value: 'Fidelidade'},
        {text: 'Cofidis', value: 'Cofidis'},
        {text: 'Médis', value: 'Médis'},
        {text: 'Ageas', value: 'Ageas'},
        {text: 'Multicare', value: 'Multicare'},
        {text: 'Advance Care', value: 'Advance Care'}
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
    const queryMedico = this.$route.query.medico;
    
    if (queryEspecialidade) {
      this.formData.especialidade = queryEspecialidade;
      await this.fetchMedicosByEspecialidade();
    }
    
    if (queryMedico) {
      this.formData.medico = queryMedico;
    }
  },
  methods: {
    async fetchMedicosByEspecialidade() {
      const consultaStore = useConsultaStore();
      try {
        const especialidade = this.formData.especialidade;
        const data = `?especialidade=${especialidade}`;
        const response = await consultaStore.fetchMedicosByEspecialidade(data);

        const medicosNomes = response.map(medico => ({text: medico.nome, value: medico.nome}));

        this.medicos = medicosNomes;

        // Verifica se o médico está na lista e define como selecionado
        if (this.$route.query.medico && this.medicos.find(m => m.value === this.$route.query.medico)) {
          this.formData.medico = this.$route.query.medico;
        }
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
        this.showNotification('Falha ao criar consulta. Por favor, tente novamente.', 'error');
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
  overflow: hidden;
}

.myclinic {
  font-family: 'Arial', sans-serif;
  color: #000000;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
}

/* Estilos dos dropdowns */
select {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn-continuar {
  background: linear-gradient(135deg, #480ca8, #4cc9f0);
  color: white;
  border: none;
  padding: 10px 20px;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
}

.btn-continuar:hover {
  background-color: blue;
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
