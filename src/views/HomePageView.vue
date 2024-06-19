<template>
    <div class="container">
        <!-- Barra lateral -->
        <Sidebar/>

        <div class="content">
            <div class="column">
                <div class="retangulo-bem-vindo">
                    <img src="../img/myclinic.webp" alt="logo">
                    <div class="text-container">
                        <h2>Olá {{ userName }},</h2>
                        <p>Seja bem-vindo à sua página pessoal da myClinic!</p>
                    </div>
                </div>
                <div class="retangulo-2">
                    <div class="text-container">

                    </div>
                </div>
            </div>
            <div class="retangulo-calendario">

            </div>
        </div>
        
    </div>
</template>

<script>
   import Sidebar from "../components/sidebar.vue"; 
   import { useUserStore } from '@/stores/user';

    export default {
        components: {
            Sidebar,
        },
        data() {
            return {
                userStore: useUserStore(),
                userName: ''
            }
        },
        async created() {
            try {
                const loggedUser = await this.userStore.fetchLoggedUser();

                this.userName = loggedUser ? loggedUser.nome : 'Paciente';
            } catch (error) {
                console.error('Error fetching logged-in user:', error);
            }
        }
    }
</script>

<style scoped>
.container {
    display: flex;
    height: 100vh; 
    overflow: hidden; 
}

.content {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 20px;
    position: absolute;
    left: 19%;
}

.column {
    display: flex;
    flex-direction: column;
    margin-right: 50px; 
}

.retangulo-bem-vindo {
    width: 700px; 
    height: 200px;
    padding: 50px; 
    background-color: white; 
    margin-top: 20px; 
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

.retangulo-2 {
    width: 700px; 
    height: 300px;
    padding: 50px; 
    background-color: white; 
    margin-top: 20px; 
    border-radius: 15px;
    display: flex; 
    align-items: center; 
    border: 1px solid black;
}

.retangulo-calendario {
    width: 400px; 
    height: 300px;
    padding: 50px; 
    background-color: white; 
    margin-top: 20px; 
    border-radius: 15px;
    display: flex; 
    align-items: center; 
    border: 1px solid black;
}
</style>
