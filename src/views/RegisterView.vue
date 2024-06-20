<template>
  <div class="registration-container">
    <div class="logo">
      <img src="../img/myclinic.webp" alt="logo">
    </div>
    <form class="registration-form" @submit.prevent="handleSubmit">
      <div class="column">
        <div class="input-group">
          <label for="nome">Nome</label>
          <input type="text" id="nome" v-model="formData.nome" placeholder="Insira o seu nome" required>
        </div>
        <div class="input-group">
          <label for="genero">Género</label>
          <select id="genero" v-model="formData.genero" required>
            <option value="" disabled selected>Selecione uma Opção</option>
            <option v-for="genero in generos" :value="genero.value">{{ genero.text }}</option>
          </select>
        </div>
        <div class="input-group">
          <label for="sistema_saude">Sistema Saúde</label>
          <select id="sistema_saude" v-model="formData.sistema_saude" required>
            <option value="" disabled selected>Selecione uma Opção</option>
            <option v-for="sistema in sistemas_saude" :value="sistema.value">{{ sistema.text }}</option>
          </select>
        </div>
      </div>
      <div class="column">
        <div class="input-group">
          <label for="n_utente">Nº Utente</label>
          <input type="text" id="n_utente" v-model="formData.n_utente" placeholder="Insira o seu nº de utente" required>
        </div>
        <div class="input-group">
          <label for="email">Email</label>
          <input type="text" id="email" v-model="formData.email" placeholder="Insira o seu email">
        </div>
        <div class="input-group">
          <label for="contacto">Contacto</label>
          <input type="text" id="contacto" v-model="formData.contacto" placeholder="XXXXXXXXX" required>
        </div>
      </div>
      <div class="column">
        <div class="input-group">
          <label for="data_nascimento">Data de Nascimento</label>
          <input type="date" id="data_nascimento" v-model="formData.data_nascimento" placeholder="XX/XX/XXXX" required>
        </div>
        <div class="input-group">
          <label for="cod_postal">Código Postal</label>
          <input type="text" id="cod_postal" v-model="formData.cod_postal" placeholder="XXXX-XXX" required>
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="formData.password" placeholder="********" required>
        </div>
      </div>
      <button type="submit" class="btn-registrar">Registar</button>
    </form>
    <div v-if="alertMessage" :class="['alert', alertType]">{{ alertMessage }}</div>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/user';
export default {
  data() {
    return {
      userStore: useUserStore(),
      formData: {
        nome: '',
        genero: '',
        sistema_saude: '',
        n_utente: '',
        email: '',
        contacto: '',
        data_nascimento: '',
        cod_postal: '',
        password: ''
      },
      alertMessage: '',
      alertType: '',
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
      generos: [
        {text: 'Masculino', value: 'Masculino'},
        {text: 'Feminino', value: 'Feminino'}
      ]
    };
  },
  methods: {
    async handleSubmit() {
      const userStore = useUserStore();
      const plainFormData = JSON.parse(JSON.stringify(this.formData));
      try {
        //console.log('Plain form data:', plainFormData);
        const response = await userStore.createPacientes(plainFormData);
        userStore.loggedUser = response;
        this.alertMessage = 'User registered successfully!';
        this.alertType = 'alert-success';
        this.$router.push('/confirmarEmail');
      } catch (error) {
        console.error('Error registering user:', error);
        this.alertMessage = error.response.data.message;
        this.alertType = 'alert-failure';
      }
      setTimeout(() => {
        this.alertMessage = '';
      }, 3000);
    }
  }
};
</script>

<style scoped>
.registration-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: var(--color-background);  
  transition: background-color 0.5s;
  overflow: hidden;
  background: linear-gradient(135deg, #480ca8, #4cc9f0);
}

.logo img {
  height: 250px;
  width: 250px;
}

.registration-form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 960px;
}

.column {
  display: flex;
  flex-direction: column;
  width: calc(33.333% - 10px);
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 20px;
  color: white;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  color: white;
}

.input-group input,
.input-group select {
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 2px solid white;
  background-color: transparent;
  outline: none;
  color: white
}

.input-group input:focus{
  color: white;
}
.input-group select:focus {
  color: rgb(0, 0, 0);
}

.input-group input::placeholder {
  color: white; /* Cor do texto do placeholder */
}

.btn-registrar {
  width: 100%;
  padding: 10px;
  background-color: #f84c9b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.alert {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  border-radius: 4px;
  color: white;
  z-index: 1000;
}

.alert-success {
  background-color: green;
}

.alert-failure {
  background-color: red;
}
</style>
