<template>
    <div class="login-container">
      <div class="logo">
        <img src="../img/myclinic.png" alt="logo">
      </div>
      <form class="login-form">
        <div class="input-group">
          <label for="user-id">Nº Utente</label>
          <input type="text" id="user-id" placeholder="Digite o nº de Utente" required>
        </div>
        <div class="input-group">
          <label for="password">Palavra Passe</label>
          <input type="password" id="password" placeholder="Digite a sua Palavra Passe" required>
        </div>
        <button type="submit" class="btn-entrar">Entrar</button>
        <a href="#" class="register-link">Quero me Registar</a>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage',
    // Adicione aqui os métodos e dados necessários
  };
  </script>
  
  <style scoped>

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: var(--color-background);
  transition: background-color 0.5s;
}

.logo {
  background-size: contain;
  background-repeat: no-repeat;
  height: 80 vh;
  width: 80 px;
  margin-bottom: 40px;
}

.login-form {
  width: 100%;
  max-width: 320px;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  color: var(--color-heading);
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  transition: border-color 0.3s;
}

.input-group input:focus {
  outline: none;
  border-color: var(--color-border-hover);
}

.btn-entrar {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50; /* Verde */
  color: var(--vt-c-white);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-entrar:hover {
  background-color: #45a049; /* Verde escuro */
}

.register-link {
  display: block;
  text-align: center;
  margin-top: 20px;
  color: #007BFF; /* Azul */
  text-decoration: none;
  transition: color 0.3s;
}

.register-link:hover {
  color: #0056b3; /* Azul escuro */
}
  </style>
  