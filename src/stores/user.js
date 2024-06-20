import { defineStore } from 'pinia';
import { post } from '../api/api.js';
import * as api from '../api/api.js';

export const useUserStore = defineStore('users', {
    state: () => ({
      users: [],
      medicos: [],
      pacientes: [],
      user: null,
      loggedUser: null,
      isLoggedIn: false,
      token: null,
    }),
    getters: {
      getUsers: (state) => state.users,
      getUser: (state) => state.user,
      isLoggedIn: (state) => state.isLoggedIn
    },
    actions: {
      async fetchMedicos() {
        try {
          const data = await api.get('/utilizadores/medicos');
          this.medicos = data.data;
          console.log(this.medicos);
        } catch (error) {
          console.error('Error in store fetching objects:', error);
        }
      },
      async fetchPacientes() {
        try {
          const data = await api.get('/utilizadores/pacientes');
          this.pacientes = data.data;
          console.log(this.pacientes);
        } catch (error) {
          console.error('Error in store fetching objects:', error);
        }
      },
      async createMedicos(user) {
        try {
          const response = await post('/utilizadores/medicos', user);
          this.medicos = user;
          return response.data;
        } catch (error) {
          console.error('Error in store creating user:', error);
          throw error; 
        }
      },
      async createPacientes(user) {
        try {
          //console.log('Creating user with data:', user);
          const response = await post('/utilizadores/pacientes', user);
          sessionStorage.setItem('user_id', response.id_user)
          sessionStorage.setItem('email', user.email)
          this.user = user;
          //console.log('This ponto user:', this.user);
          return response.data;
        } catch (error) {
          console.error('Error in store creating user:', error);
          throw error; 
        }
      },
      async validateEmail(id_user,codigo) {
        try {
          const response = await post(`/utilizadores/verify-email`, {id_user: id_user, codigo: codigo});
          return response.data;
        } catch (error) {
          console.error('Error in store validating code:', error);
          throw error; 
        }
      },
      async resendEmail(id_user,email) {
        try {
          const response = await post(`/utilizadores/resend-email`, {id_user: id_user, email: email});
          return response.data;
        } catch (error) {
          console.error('Error in store resending email:', error);
          throw error; 
        }
      },
      async forgotPassword(email) {
        try {
          const response = await post(`/utilizadores/forgot-password`, {email: email});
          return response.data;
        } catch (error) {
          console.error('Error in store resending email:', error);
          throw error; 
        }
      },
      async loginPacientes(email, password) {
        try {
          const response = await post('/utilizadores/login/pacientes', { email: email, password: password });
          console.log('Response from backend: ', response);
          sessionStorage.setItem('jwt', response.token);
          this.token = response.token
          return response;
        } catch (error) {
          console.error('Error in store logging in:', error);
          throw error; 
        }
      },
      async fetchLoggedUser() {
        try {
          const token = this.jwtToken || sessionStorage.getItem('jwt');
          if (!token) return;
  
          const response = await api.get(`/utilizadores/current`, {}, token);
          this.loggedUser = response.data;
          return response.data;
        } catch (error) {
          console.error('Error fetching logged-in user:', error);
          throw error;
        }
      },
      async loginMedicos(email, password) {
        try {
          const response = await post('/utilizadores/login/medicos', { email: email, password: password });
          console.log(response);
          sessionStorage.setItem('jwt', response.token);
          return response.data;
        } catch (error) {
          console.error('Error in store logging in:', error);
          throw error; 
        }
      },
      async updatePaciente(updates, id, token) {
        try {
            const response = await api.patch(`/utilizadores/pacientes/${id}`, updates, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error response:', error.response);
            console.error('Error in store updating paciente:', error);
            throw error;
        }
      },
      async resetPassword(token, password, confirmPassword) {
        try {
          const response = await api.patch(`/utilizadores/reset-password/${token}`, { password, confirmPassword });
          return response.data;
        } catch (error) {
          console.error('Error in store resetting password:', error);
          throw error;
        }
      },
      async deleteMedico(id) {
        try {
          const response = await api.del(`/utilizadores/medicos/${id}`);
          this.medicos = this.medicos.filter(medico => medico.id_user !== id);
          return response;
        } catch (error) {
          console.error('Error in store deleting médico:', error);
          throw error;
        }
      },
      async deletePaciente(id) {
        try {
          const response = await api.del(`/utilizadores/pacientes/${id}`);
          this.pacientes = this.pacientes.filter(paciente => paciente.id_user !== id);
          return response;
        } catch (error) {
          console.error('Error in store deleting paciente:', error);
          throw error;
        }
      },
      logout() {
        sessionStorage.removeItem('jwt');
        this.loggedUser = null;
      }
    },
});