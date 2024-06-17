<template>
    <div class="container">
      <h2>Verifica a tua Conta</h2>
      <p>Um email foi enviado para {{ email }}  <br/> Confirma o código no teu email.</p>
      <div class="code-container">
        <input v-model="codes[0]" ref="code0" type="number" class="code" placeholder="0" min="0" max="9" required>
        <input v-model="codes[1]" ref="code1" type="number" class="code" placeholder="0" min="0" max="9" required>
        <input v-model="codes[2]" ref="code2" type="number" class="code" placeholder="0" min="0" max="9" required>
        <input v-model="codes[3]" ref="code3" type="number" class="code" placeholder="0" min="0" max="9" required>
        <input v-model="codes[4]" ref="code4" type="number" class="code" placeholder="0" min="0" max="9" required>
        <input v-model="codes[5]" ref="code5" type="number" class="code" placeholder="0" min="0" max="9" required>
      </div>
      <p>Não recebeu email ?</p><a href="/login" class="login-link">Reenviar</a>
      <button class="confirm-btn" @click="verifyEmail">Confirmar</button>
    </div>
  </template>
  
  <script>
  import { useUserStore } from '@/stores/user';
  export default {
    data() {
      return {
        userStore: useUserStore(),
        email: '',
        verificationCode: '',
        codes: [null, null, null, null, null, null]
      }
    },
    async created() {
        try {
            const loggedUser = await this.userStore.fetchLoggedUser();

            this.email = loggedUser ? loggedUser.email : 'o seu email';
        } catch (error) {
            console.error('Error fetching logged-in user:', error);
        }
    },
    mounted() {
    this.$nextTick(() => {
      const codes = document.querySelectorAll('.code');
      for (let i = 0; i < codes.length; i++) {
        if (this.codes[i] !== null) {
          codes[i].focus();
          break;
        }
      }

      codes.forEach((code, idx) => {
        code.addEventListener('keydown', (e) => {
          if (e.key >= 0 && e.key <= 9) {
            this.codes[idx] = '';
            setTimeout(() => codes[idx + 1]?.focus(), 10);
          } else if (e.key === 'Backspace') {
            setTimeout(() => codes[idx - 1]?.focus(), 10);
          }
        });
      });
    });
  },
    methods: {
        async verifyEmail() {
        try {
          const loggedUser = await this.userStore.fetchLoggedUser();
          const verificationCode = this.codes.join('');
          // console.log('Code:', verificationCode);
          const response = await this.userStore.validateEmail(loggedUser.id_user, verificationCode);
          // console.log('Verification response:', response);
          this.$router.push('/home');
        } catch (error) {
          console.error('Error verifying email:', error);
        }
      }
    },
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
  .login-link{
    color: blue; 
    }
  </style>
  