<template>
    <div class="container">
      <h2>Verifique a sua conta</h2>
      <p>Um email foi enviado para {{ email }}  <br/> Confirme o código no seu email.</p>
      <div class="code-container">
        <input v-model="codes[0]" ref="code0" type="number" class="code" placeholder="0" min="0" max="9" required>
        <input v-model="codes[1]" ref="code1" type="number" class="code" placeholder="0" min="0" max="9" required>
        <input v-model="codes[2]" ref="code2" type="number" class="code" placeholder="0" min="0" max="9" required>
        <input v-model="codes[3]" ref="code3" type="number" class="code" placeholder="0" min="0" max="9" required>
        <input v-model="codes[4]" ref="code4" type="number" class="code" placeholder="0" min="0" max="9" required>
        <input v-model="codes[5]" ref="code5" type="number" class="code" placeholder="0" min="0" max="9" required>
      </div>
      <div class="resend-container">
        <p>Não recebeu email? <button class="resend-button" @click="resendEmail">Reenviar</button></p>
      </div>
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
            const loggedUser = sessionStorage.getItem('email');
            this.email = loggedUser ? loggedUser : 'o seu email';
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
          const loggedUser = sessionStorage.getItem('user_id');
          const verificationCode = this.codes.join('');
          const response = await this.userStore.validateEmail(loggedUser, verificationCode);
          // console.log('Verification response:', response);
          this.$router.push('/home');
          sessionStorage.removeItem('user_id');
          sessionStorage.removeItem('email')
        } catch (error) {
          console.error('Error verifying email:', error);
        }
      },
      async resendEmail() {
        try {
          const loggedUserId = sessionStorage.getItem('user_id');
          const loggedUserEmail = sessionStorage.getItem('email');
          const createdPaciente = this.userStore.user;
          // console.log('Created paciente:', createdPaciente);
          const response = await this.userStore.resendEmail(loggedUserId, loggedUserEmail);
          // console.log('Verification response:', response);
        } catch (error) {
          console.error('Error resending email:', error);
        }
      },
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

  .resend-button {
    background: none;
    color: blue;
    border: none;
    padding: 0;
    font: inherit;
    text-decoration: underline;
    cursor: pointer;
    margin-bottom: 10px;
  }

  .resend-button:hover {
    color: rgb(39, 132, 162); /* Change color on hover */
  }
  </style>
  