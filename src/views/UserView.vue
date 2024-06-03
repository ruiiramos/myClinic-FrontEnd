<template>
    <div class="container">
        <!-- Barra lateral -->
        <Sidebar/>
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
    width: 250px;
    background-color: #f0f0f0; 
    padding: 20px;
    height: 100vh; 
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
</style>
