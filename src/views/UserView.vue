<template>
  <div class="container">
    <!-- Barra lateral -->
    <Sidebar />
    <div class="profile">
      <img src="https://res.cloudinary.com/djcedpyhp/image/upload/v1718913472/avatar_user.jpg" alt="Profile Picture" class="profile_image" />
      <div class="profile_info">
        <div class="profile_field">
          <label for="nome">Nome</label>
          <input id="nome" v-model="formData.nome" readonly />
        </div>
        <div class="profile_field">
          <label for="n_utente">Nº Utente</label>
          <input id="n_utente" v-model="formData.n_utente" readonly />
        </div>
        <div class="profile_field">
          <label for="data_nascimento">Data de Nascimento</label>
          <input id="data_nascimento" v-model="formData.data_nascimento" readonly />
        </div>
        <div class="profile_field">
          <label for="genero">Genero</label>
          <input id="genero" v-model="formData.genero" readonly />
        </div>
        <div class="profile_field">
          <label for="email">Email</label>
          <input id="email" v-model="formData.email" />
        </div>
        <div class="profile_field">
          <label for="cod_postal">Codigo Postal</label>
          <input id="cod_postal" v-model="formData.cod_postal" />
        </div>
        <div class="profile_field">
          <label for="sistema_saude">Sistema de Saúde</label>
          <input id="sistema_saude" v-model="formData.sistema_saude" readonly />
        </div>
        <div class="profile_field">
          <label for="contacto">Contacto</label>
          <input id="contacto" v-model="formData.contacto" />
        </div>
        <div class="profile_field">
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
  height: 100vh;
  overflow: hidden;
}
.profile {
  width: 300px;
  margin: 0 auto;
  margin-top: 70px;
  font-family: Arial, sans-serif;
}
.profile_image {
  display: flex;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
}
.profile_info {
  display: flex;
  flex-direction: column;
}
.profile_field {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.profile_field label {
  font-weight: bold;
}
.profile_field input {
  flex-grow: 1;
  margin-left: 10px;
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
