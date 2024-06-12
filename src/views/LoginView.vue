<template>
  <div class="login-container">
    <div class="logo">
      <img src="../img/myclinic.webp" alt="logo">
    </div>
    <form class="login-form">
      <div class="input-group">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Digite o seu email" required>
      </div>
      <div class="input-group">
        <label for="password">Palavra Passe</label>
        <input type="password" id="password" placeholder="Digite a sua Palavra Passe" required>
      </div>
      <button type="submit" class="btn-entrar">Entrar</button>
      <a href="/register" class="register-link">Quero me Registar</a>
    </form>
  </div>
</template>

<script>
export default {
 
};
</script>

<style scoped>

.login-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  transition: background-color 0.5s;
  background: linear-gradient(135deg, #480ca8, #4cc9f0);
}

.logo {
  background-size: contain;
  background-repeat: no-repeat;
}

.logo img{
    height: 250px !important;
    width: 250px !important;
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
  color: white;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 2px solid white; 
  background-color: transparent; /* Torna o fundo transparente */
  outline: none; /* Remove a borda ao focar o input */
  color: white; /* Cor do texto do input */
}

.input-group input::placeholder {
  color: white; /* Cor do texto do placeholder */
}

.input-group input:focus {
  outline: none;
  border-color: var(--color-border-hover);
}


.btn-entrar {
  width: 100%;
  padding: 10px;
  background: #f84c9b;
  color: var(--vt-c-white);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.register-link {
  display: block;
  text-align: center;
  margin-top: 20px;
  color: white; /* Azul */
  text-decoration: none;
  transition: color 0.3s;
}

.register-link:hover {
  color: #480ca8; /* Azul escuro */
}
</style>
