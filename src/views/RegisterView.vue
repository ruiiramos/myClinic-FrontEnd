<template>
    <div class="registration-container">
      <div class="logo">
        <img src="../img/myclinic.webp" alt="logo">
      </div>
      <form class="registration-form">
        <div class="column">
          <div class="input-group">
            <label for="nome">Nome</label>
            <input type="text" id="nome" placeholder="Insira seu nome" required>
          </div>
          <div class="input-group">
            <label for="genero">Gênero</label>
            <select id="genero" required>
              <option value="" disabled selected>Selecione a Opção</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>
          </div>
          <div class="input-group">
            <label for="sistemaSaude">Sistema Saúde</label>
            <select id="sistemaSaude" required>
              <option value="" disabled selected>Selecione a Opção</option>
              <option value="adse">ADSE</option>
              <option value="multicare">Multicare</option>
            </select>
          </div>
        </div>
        <div class="column">
          <div class="input-group">
            <label for="nUtente">Nº Utente</label>
            <input type="text" id="nUtente" placeholder="Insira nº Utente" required>
          </div>
          <div class="input-group">
            <label for="morada">Morada</label>
            <input type="text" id="morada" placeholder="Insira sua morada" required>
          </div>
          <div class="input-group">
            <label for="contacto">Contacto</label>
            <input type="text" id="contacto" placeholder="XXXXXXXXX" required>
          </div>
        </div>
        <div class="column">
          <div class="input-group">
            <label for="dNascimento">Data Nascimento</label>
            <input type="date" id="dNascimento" placeholder="XX/XX/XXXX" required>
          </div>
          <div class="input-group">
            <label for="codPostal">Contacto</label>
            <input type="text" id="codPostal" placeholder="XXXX-XXX" required>
          </div>
          <div class="input-group">
            <label for="pwd">Password</label>
            <input type="password" id="pwd" placeholder="********" required>
          </div>

        </div>
        <button type="submit" class="btn-registrar">Registar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RegistrationPage',
    data() {
      return {
        // Adicione aqui os dados necessários, como opções de gênero e sistema de saúde
      };
    },
    methods: {
      // Adicione aqui os métodos necessários, como a função de submissão do formulário
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
    color:white;
  }
  
  .input-group label {
    display: block;
    margin-bottom: 5px;
    color:white;
  }
  
  .input-group input,
  .input-group select {
    width: 100%;
    padding: 10px;
    border: none;
    border-bottom: 2px solid white;
    background-color: transparent;
    outline: none;
    color:white;
  }
  
  .input-group input:focus,
  .input-group select:focus {
    color:white;;
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
  
  .btn-registrar:hover {
    background-color: rgb(239, 0, 40);
  }

  </style>
  