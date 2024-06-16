import { defineStore } from 'pinia';
import { post } from '../api/api.js';
import * as api from '../api/api.js';

export const useUserStore = defineStore('users', {
    state: () => ({
      users: [],
      user: null,
      isLoggedIn: false,
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
      async validateEmail(id_user,codigo) {
        try {
          const response = await post(`/utilizadores/verify-email`, {id_user: id_user, codigo: codigo});
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
          sessionStorage.setItem('jwt', response.token);
          return response.data;
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
          console.log('Logged in user:', this.loggedUser);
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
      logout() {
        this.user = null;
        this.isLoggedIn = false;
        sessionStorage.removeItem('jwt');
      },
      // getLoggedUser & updateLoggedUser
    },
});