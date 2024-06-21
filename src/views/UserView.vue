<template>
  <div class="container">
    <!-- Barra lateral -->
    <Sidebar />
    <div class="profile">
      <img src="https://res.cloudinary.com/djcedpyhp/image/upload/v1718913472/avatar_user.jpg" alt="Profile Picture" class="profile_image" />
      <div class="profile_info">

        <div class="input-group">
          <label for="nome">Nome</label>
          <input id="nome" v-model="formData.nome" readonly >
        </div>

        <div class="input-group">
          <label for="n_utente">Nº Utente</label>
          <input id="n_utente" v-model="formData.n_utente" readonly />
        </div>
        <div class="input-group">
          <label for="data_nascimento">Data de Nascimento</label>
          <input id="data_nascimento" v-model="formData.data_nascimento" readonly />
        </div>
        <div class="input-group">
          <label for="genero">Genero</label>
          <input id="genero" v-model="formData.genero" readonly />
        </div>
        <div class="input-group">
          <label for="email">Email</label>
          <input id="email" v-model="formData.email" />
        </div>
        <div class="input-group">
          <label for="cod_postal">Codigo Postal</label>
          <input id="cod_postal" v-model="formData.cod_postal" />
        </div>
        <div class="input-group">
          <label for="sistema_saude">Sistema de Saúde</label>
          <input id="sistema_saude" v-model="formData.sistema_saude" readonly />
        </div>
        <div class="input-group">
          <label for="contacto">Contacto</label>
          <input id="contacto" v-model="formData.contacto" />
        </div>
        <div class="input-group">
          <label for="password">password</label>
          <input id="password" type="password" v-model="formData.password" />
        </div>
      </div>
      <button @click="handleSubmit" class="profile_save-button">Alterar</button>
    </div>
  </div>

  <!-- Notification Container -->
  <div class="notification-container" v-if="notification.message">
    <div :class="['notification', notification.type]">
      {{ notification.message }}
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/sidebar.vue";
import { useUserStore } from '@/stores/user';

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      userStore: useUserStore(),
      formData: {
        nome: '',
        n_utente: '',
        data_nascimento: '',
        genero: '',
        email: '',
        cod_postal: '',
        sistema_saude: '',
        contacto: '',
        password: '',
      },
      notification: {
        message: '',
        type: ''
      }
    };
  },
  async created() {
    try {
      const loggedUser = await this.userStore.fetchLoggedUser();
      if (loggedUser) {
        this.formData = {
          nome: loggedUser.nome || '',
          n_utente: loggedUser.n_utente || '',
          data_nascimento: this.formatDate(loggedUser.data_nascimento) || '',
          genero: loggedUser.genero.genero || '',
          email: loggedUser.email || '',
          cod_postal: loggedUser.cod_postal || '',
          sistema_saude: loggedUser.sistema_de_saude.sistema_saude || '',
          contacto: loggedUser.contacto || '',
          password: loggedUser.password || '',
        };
      }
    } catch (error) {
      console.error('Error fetching logged-in user:', error);
    }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
    showNotification(message, type) {
      this.notification.message = message;
      this.notification.type = type;
      setTimeout(() => {
        this.notification.message = '';
      }, 3000); // Oculta a notificação após 3 segundos
    },
    async handleSubmit() {
      try {
        const token = sessionStorage.getItem('jwt');
        await this.userStore.updatePaciente(this.formData, this.userStore.loggedUser.id_user, token);
        this.showNotification('Dados alterados com sucesso', 'success');
        this.$router.push('/home');
      } catch (error) {
        console.error('Error updating profile:', error);
        this.showNotification('Falha ao alterar os dados', 'error');
      }
    }
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  overflow: hidden;
}
.profile {
  width: 300px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}
.profile_image {
  display: flex;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  left: 70%;
}
.profile_info {
  display: flex;
  flex-direction: column;
}
.input-group {
  display: absolute;
  position: relative;
  left: 35%;
}

.input-group label {
  display: block;
  margin-bottom: 2px;
  color: var(--color-heading);
}

.input-group input,
.input-group select {
  width: 100%;
  padding: 8px;
  border: none;
  border-bottom: 2px solid #6E7179;
  background-color: transparent;
  outline: none;
}
.profile_save-button {
  background: linear-gradient(135deg, #480ca8, #4cc9f0);
  color: white;
  border: none;
  padding: 10px 20px;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  display: absolute;
  position: relative;
  left: 35%;
  margin-top: 13px;
}
.notification-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}
.notification {
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 5px;
  color: white;
  font-weight: bold;
}
.notification.success {
  background-color: #4caf50; /* Green */
}
.notification.error {
  background-color: #f44336; /* Red */
}
</style>
