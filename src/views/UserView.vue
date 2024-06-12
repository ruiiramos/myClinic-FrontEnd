<template>
    <div class="container">
    <!-- Barra lateral -->
    <Sidebar/>
    <div class="profile">
      <img src="../img/medica.webp" alt="Profile Picture" class="profile_image">
      <div class="profile_info">
        <div class="profile_field">
          <label for="name">Nome</label>
          <input id="name" v-model="profile.name" readonly>
        </div>
        <div class="profile_field">
          <label for="userNumber">Nº Utente</label>
          <input id="userNumber" v-model="profile.userNumber" readonly>
        </div>
        <div class="profile_field">
            <label for="dataNasc">Data de Nascimento</label>
            <input id="data" v-model="profile.data" readonly>
        </div>
        <div class="profile_field">
            <label for="genero">Genero</label>
            <input id="genero" v-model="profile.genero" readonly>
        </div>
        <div class="profile_field">
            <label for="morada">Morada</label>
            <input id="morada" v-model="profile.morada">
        </div>
        <div class="profile_field">
            <label for="codPost">Codigo Postal</label>
            <input id="codPost" v-model="profile.codPost">
        </div>
        <div class="profile_field">
            <label for="sistSaude">Sistema de Saúde</label>
            <input id="sistSaude" v-model="profile.sistSaude">
        </div>
        <div class="profile_field">
            <label for="contacto">Contacto</label>
            <input id="contacto" v-model="profile.contacto">
        </div>
        <div class="profile_field">
            <label for="pwd">password</label>
            <input id="pwd" v-model="profile.pwd">
        </div>
        <!-- Adicione os outros campos aqui -->
      </div>
      <button @click="saveProfile" class="profile_save-button">Alterar</button>
    </div>
</div>
  </template>
  
  <script>
  import Sidebar from "../components/sidebar.vue"; 

export default {
  components: {
    Sidebar,
  },
    data() {
      return {
        profile: {
          name: 'João Silva',
          userNumber: '123456789',
          data: '11-02-2000',
          genero: 'Masculino',
          morada: 'Rua Grande 45',
          codPost: '4485-089',
          sistSaude: 'ADSE',
          contacto: '912345678',
          pwd: '********',

          // Adicione os outros campos aqui
        },
      };
    },
    methods: {
      saveProfile() {
        // Implemente a lógica para salvar o perfil aqui
        console.log('Perfil salvo:', this.profile);
        window.alert('Perfil salvo com sucesso!');
      },
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
  </style>
  