<template>
    <div class="white-rectangle">
        <h2>{{ paciente.nome }} - {{ paciente.n_utente }}</h2>
        <button class="desmarcar-button" @click="apagarPaciente">Apagar</button>
    </div>
</template>

<script>
export default {
    props: {
        paciente: {
            type: Object,
            required: true
        }
    },
    created() {
        console.log("Paciente Prop:", this.paciente);
    },
    methods: {
        apagarPaciente() {
            this.$emit('delete-paciente', this.paciente.id_user);
        },
    }
}
</script>

<style scoped>
.white-rectangle {
    width: 1220px; 
    height: 100px;
    padding: 50px; 
    background-color: white; 
    margin-top: 20px; 
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