<template>
    <div class="white-rectangle">
        <h2>{{ medico.nome }}</h2>
        <button @click="marcarConsulta" class="mark-button">Marcar</button>
    </div>
</template>

<script>
export default {
    props: {
        medico: {
            type: Object,
            required: true
        },
        especialidade: {
            type: String,
            required: true
        }
    },
    methods: {
        marcarConsulta() {
            this.$router.push({
                path: '/dadosmarcacao',
                query: { 
                    especialidade: this.especialidade, 
                    medico: this.medico.nome
                }
            });
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

.mark-button {
    background: linear-gradient(135deg, #480ca8, #4cc9f0); 
    color: white; 
    border: none;
    border-radius: 25px; 
    padding: 10px 20px; 
    font-size: 16px; 
    cursor: pointer; 
}
</style>
