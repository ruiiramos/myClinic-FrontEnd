<template>
    <div class="container">
      <h2>Verifica a tua Conta</h2>
      <p>O email foi enviado para fantacydesignss@gmail.com <br/> Confirma o código no teu email.</p>
      <div class="code-container">
        <input type="number" class="code" placeholder="0" min="0" max="9" required>
        <input type="number" class="code" placeholder="0" min="0" max="9" required>
        <input type="number" class="code" placeholder="0" min="0" max="9" required>
        <input type="number" class="code" placeholder="0" min="0" max="9" required>
        <input type="number" class="code" placeholder="0" min="0" max="9" required>
        <input type="number" class="code" placeholder="0" min="0" max="9" required>
      </div>
      <button class="confirm-btn" @click="redirectToHome">Confirmar</button>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      const codes = document.querySelectorAll('.code')
      codes[0].focus()
  
      codes.forEach((code, idx) => {
          code.addEventListener('keydown', (e) => {
              if(e.key >= 0 && e.key <= 9) {
                  codes[idx].value = ''
                  setTimeout(() => codes[idx + 1].focus(), 10)
              } else if(e.key === 'Backspace') {
                  setTimeout(() => codes[idx - 1].focus(), 10)
              }
          })
      })
    },
    methods: {
      redirectToHome() {
        this.$router.push('/home')
      }
    }
  }
  </script>
  
  <style scoped>
  * {
    box-sizing: border-box;
  }
  
  .container {
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
    max-width: 1100px;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin-left: 15%;
    margin-top: 5%;
  }
  
  .code-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0;
  }
  
  .code {
    border-radius: 5px;
    font-size: 75px;
    height: 120px;
    width: 100px;
    border: 1px solid #eee;
    outline-width: thin;
    outline-color: #ddd;
    margin: 1%;
    text-align: center;
    font-weight: 300;
    margin-left: 10px;
  }
  
  .code::-webkit-outer-spin-button,
  .code::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  .code:valid {
    border-color: blue;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
  
  .confirm-btn {
    background: linear-gradient(135deg, #480ca8, #4cc9f0);;
    color: white;
    border: none;
    padding: 15px 30px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  