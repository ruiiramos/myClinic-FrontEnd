import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import * as api from '../api/api.js';

export const useConsultaStore = defineStore('consulta', {
  state: () => ({
    consultas: [],
    consultasPacientes: [],
    especialidades: [],
    consulta: null,
    especialidadeMedicos: [],
  }),
  getters: {
    getConsultas: (state) => state.consultas,
    getConsulta: (state) => state.consulta,
  },
  actions: {
    async fetchConsultas() {
      try {
        const data = await api.get('/consultas');
        this.consultas = data.data;
        console.log(this.consultas);
      } catch (error) {
        console.error('Error in store fetching objects:', error);
      }
    },
    async fetchEspecialidades() {
      try {
        const data = await api.get('/especialidades');
        this.especialidades = data.data;
        console.log(this.especialidades);
      } catch (error) {
        console.error('Error in store fetching objects:', error);
      }
    },
    async createConsultas(consulta) {
      try {
        const response = await api.post('/consultas', consulta);
        this.consultas.push(response.data);
        return response.data;
      } catch (error) {
        console.error('Error in store creating consulta:', error);
        throw error; 
      }
    },
    async updateConsulta(updates, id, token) {
      try {
        const response = await api.patch(`/consultas/${id}`, updates, token);
        const index = this.consultas.findIndex(consulta => consulta.id === id);
        if (index !== -1) {
          this.consultas[index] = response.data;
        }
        return response.data;
      } catch (error) {
        console.error('Error response:', error.response);
        console.error('Error in store updating consulta:', error);
        throw error; 
      }
    },
    async fetchMedicosByEspecialidade(especialidade) {
      try {
        const response = await api.get(`/utilizadores/medico/especialidade/${especialidade}`);
        return response.data;
      } catch (error) {
        console.error('Error in store fetching objects:', error);
      }
    },
    async fetchConsultasByPaciente(id) {
      try {
        const response = await api.get(`/consultas/paciente/${id}`);
        console.log('Response Data:', response.data);
        this.consultas = response.data;
        console.log('Fetched Consultas:', this.consultas);
      } catch (error) {
        console.error('Error in store fetching objects:', error);
      }
    }
  },
})