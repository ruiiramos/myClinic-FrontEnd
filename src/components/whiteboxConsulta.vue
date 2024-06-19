<template>
    <div class="white-rectangle">
        <h2>Consulta com Dr. {{ consulta.medico.nome }} - {{ formatDate(consulta.data) }}, {{ formatTime(consulta.hora) }}h</h2>
            <button class="desmarcar-button" @click="desmarcarConsulta">Desmarcar Consulta</button>
    </div>
</template>

<script>
export default {
    props: {
        consulta: {
            type: Object,
            required: true
        }
    },
    methods: {
        desmarcarConsulta() {
            this.$emit('desmarcar-consulta', this.consulta.id_consulta);
        },
        formatDate(dateString) {
            const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
            return new Date(dateString).toLocaleDateString(undefined, options);
        },
        formatTime(timeString) {
            const [hours, minutes] = timeString.split(':');
            return `${hours}:${minutes}`;
        }
    }
}
</script>

<style scoped>
.white-rectangle {
  width: 1250px; 
  height: 100px;
  padding: 50px; 
  background-color: white; 
  margin-top: 20px; 
  margin-left: 5px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  border: 1px solid black;
}

.white-rectangle h2 {
  margin: 0;
  font-size: 30px;
}

.white-rectangle p {
  margin: 5px 0 0 0;
  font-size: 16px;
}

.desmarcar-button {
  background: red; 
  color: white; 
  border: none;
  border-radius: 25px; 
  padding: 10px 20px; 
  font-size: 16px; 
  cursor: pointer; 
}
</style>