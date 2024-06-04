<template>
    <div class="container">
        <!-- Barra lateral -->
        <Sidebar/>

        <div class="content">
            <div class="retangulo-bem-vindo">
                <img src="../img/myclinic.png" alt="logo">
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

.sidebar {
    width: 250px; /* Largura da barra lateral */
    background-color: #f0f0f0; /* Cor de fundo da barra lateral */
    padding: 20px;
    height: 100vh; /* Altura total da tela */
    background: #04D0AB;
}

.sidebar-logo {
    width: 90px;
    height: 90px;
    margin-left: 15%;
}

.sidebar-icon {
    width: 50px;
    height: 50px;
    margin-left: 25%;
    margin-top: 15%;
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
