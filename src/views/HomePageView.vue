<template>
    <div class="container">
        <!-- Barra lateral -->
        <Sidebar/>

        <div class="content">
            <div class="retangulo-bem-vindo">
                <img src="../img/myclinic.webp" alt="logo">
                <div class="text-container">
                    <h2>Olá Paciente,</h2>
                    <p>Seja bem-vindo à sua página pessoal da myClinic!</p>
                </div>
            </div>
            <div class="retangulo-calendario">

            </div>
        </div>
        
    </div>
</template>

<script>
   import Sidebar from "../components/sidebar.vue"; 

export default {
  components: {
    Sidebar,
  },
        data() {
            return {
                selectedEspecialidade: ''
            }
        }
    }
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
}

.content {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 20px;
}

.retangulo-bem-vindo {
    width: 700px; 
    height: 200px;
    padding: 50px; 
    background-color: white; 
    margin-top: 20px; 
    margin-left: 40px;
    border-radius: 15px;
    display: flex; 
    align-items: center; 
    border: 1px solid black;
}

.retangulo-bem-vindo img {
    width: 130px;
    height: 130px;
    margin-right: 20px;
}

.text-container {
    display: flex;
    flex-direction: column;
}

.text-container h2 {
    font-size: 35px;
}

.text-container p {
    font-size: 17px;
}

.retangulo-calendario {
    width: 400px; 
    height: 300px;
    padding: 50px; 
    background-color: white; 
    margin-top: 20px; 
    margin-left: 50px;
    border-radius: 15px;
    display: flex; 
    align-items: center; 
    border: 1px solid black;
}
</style>
