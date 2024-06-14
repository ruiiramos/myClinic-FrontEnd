import { defineStore } from 'pinia';
import { post } from '../api/api.js';
import * as api from '../api/api.js';

export const useUserStore = defineStore('users', {
    state: () => ({
      users: [],
      user: null,
    }),
    getters: {
      getUsers: (state) => state.users,
      getUser: (state) => state.user,
    },
    actions: {
      async fetchMedicos() {
        try {
          const data = await api.get('/utilizadores/medicos');
          this.users = data.data;
          console.log(this.users);
        } catch (error) {
          console.error('Error in store fetching objects:', error);
        }
      },
      async fetchPacientes() {
        try {
          const data = await api.get('/utilizadores/pacientes');
          this.users = data.data;
          console.log(this.users);
        } catch (error) {
          console.error('Error in store fetching objects:', error);
        }
      },
      async createMedicos(user) {
        try {
          const response = await post('/utilizadores/medicos', user);
          this.users.push(response.data);
          return response.data;
        } catch (error) {
          console.error('Error in store creating user:', error);
          throw error; 
        }
      },
      async createPacientes(user) {
        try {
          console.log('Creating user with data:', user);
          const response = await post('/utilizadores/pacientes', user);
          this.users.push(response.data);
          return response.data;
        } catch (error) {
          console.error('Error in store creating user:', error);
          throw error; 
        }
      },
      async validateEmail(id_user,code) {
        try {
          const response = await post(`/utilizadores/verify-email`, {id_user: id_user, code: code});
          return response.data;
        } catch (error) {
          console.error('Error in store validating code:', error);
          throw error; 
        }
      },
      async loginPacientes(email, password) {
        try {
          const response = await post('/utilizadores/login/pacientes', { email: email, password: password });
          console.log(response);
          sessionStorage.setItem('jwt', response.accessToken);
          return response.data;
        } catch (error) {
          console.error('Error in store logging in:', error);
          throw error; 
        }
      },
      async loginMedicos(email, password) {
        try {
          const response = await post('/utilizadores/login/medicos', { email: email, password: password });
          console.log(response);
          sessionStorage.setItem('jwt', response.accessToken);
          return response.data;
        } catch (error) {
          console.error('Error in store logging in:', error);
          throw error; 
        }
      },
      // getLoggedUser & updateLoggedUser
    },
});