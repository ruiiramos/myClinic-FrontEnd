<template>
    <div class="white-rectangle">
        <h2>{{ especialidade.especialidade }}</h2>
        <button @click="eliminarespecialidade" class="mark-button">Eliminar</button>
    </div>
</template>

<script>
export default {
    props: {
        especialidade: {
            type: Object,
            required: true
        }
    },
    methods: {
        eliminarespecialidade() {
            this.$router.push({
                path: '#',
                query: { especialidade: this.especialidade.especialidade }
            });
        }
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

.white-rectangle p {
    margin: 5px 0 0 0;
    font-size: 16px;
}

.mark-button {
    background: red; 
    color: white; 
    border: none;
    border-radius: 25px; 
    padding: 10px 20px; 
    font-size: 16px; 
    cursor: pointer; 
}
</style>
