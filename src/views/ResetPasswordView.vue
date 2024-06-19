<template>
    <div class="container">
        <div class="login-container">
            <form action="index.html">
                <h2>Mude sua palavra passe</h2>
                <p>Introduza sua nova palavra passe</p>
                <div class="input-div one">
                    <div class="i">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div>
                        <input class="input" type="password" placeholder="Password" v-model="password">
                    </div>
                </div>
                <div class="input-div one">
                    <div class="i">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div>
                        <input class="input" type="password" placeholder="Confirmar Password" v-model="confirmPassword">
                    </div>
                </div>
                <input type="submit" class="btn" value="Mudar" @click.prevent="forgotPassword">
            </form>
            <div v-if="showPopup" class="popup red">
                As palavras passe não coincidem
            </div>
            <div v-if="showSuccessPopup" class="popup green">
                Password alterada com sucesso
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            password: '',
            confirmPassword: '',
            showPopup: false,
            showSuccessPopup: false
        }
    },
    methods: {
        forgotPassword() {
            if (this.password === this.confirmPassword) {
                this.showSuccessPopup = true;
                setTimeout(() => {
                    this.showSuccessPopup = false;
                    window.location.href = '/login';
                }, 2000);
            } else {
                this.showPopup = true;
                setTimeout(() => {
                    this.showPopup = false;
                }, 3000);
            }
        }
    }
}
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.container {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10rem;
    padding: 0 2rem;
    overflow: hidden;
    margin-left: 37%;
}
.login-container {
    display: flex;
    align-items: center;
    text-align: center;
    position: relative;
}
form {
    width: 400px;
    padding: 1.2rem;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.2);
}
form h2 {
    font-size: 1.8rem;
    margin: 5px 0;
}
.input-div {
    position: relative;
    display: grid;
    grid-template-columns: 7% 93%;
    margin: 20px 0;
    padding: 5px 0;
    border-bottom: 2px solid #d9d9d9;
}
.input-div::after,
.input-div::before {
    content: "";
    position: absolute;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: linear-gradient(135deg, #480ca8, #4cc9f0);
    transition: 0.3s;
}
.input-div::after {
    right: 50%;
}
.input-div::before {
    left: 50%;
}
.input-div.focus .i i {
    color: linear-gradient(135deg, #480ca8, #4cc9f0);
}
.input-div.focus div h5 {
    top: -5px;
    font-size: 15px;
}
.input-div.focus::after,
.input-div.focus::before {
    width: 50%;
}
.i {
    display: flex;
    justify-content: center;
    align-items: center;
}
.i i {
    color: #d9d9d9;
    transition: 0.3s;
}
.input-div>div {
    position: relative;
    height: 40px;
}
.input-div>div h5 {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    font-size: 15px;
    transition: 0.3s;
}
.input {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: none;
    outline: none;
    background: none;
    padding: 0.3rem 0.5rem;
    font-size: 1rem;
    font-family: "Open Sans", sans-serif;
    color: #555;
}
a {
    display: block;
    text-align: center;
    text-decoration: none;
    color: #616161;
    font-size: 0.9rem;
    transition: 0.3s;
}
a:hover {
    color: linear-gradient(135deg, #480ca8, #4cc9f0);
}
.btn {
    display: block;
    width: 100%;
    height: 40px;
    border-radius: 15px;
    margin: 0.5rem 0;
    font-size: 1rem;
    background-image: linear-gradient(135deg, #480ca8, #4cc9f0);
    color: #eaeaea;
    outline: none;
    border: none;
    cursor: pointer;
    font-family: "Open Sans", sans-serif;
    background-size: 200%;
    transition: 0.5s;
}
.btn:hover {
    background-position: right;
}
.account {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
}
.account p {
    margin: 0.5rem;
}
.login-link {
    color: blue;
    transition: color 0.3s;
}
.login-link:hover {
    color: #480ca8;
}
.popup {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px 20px;
    color: white;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}
.popup.red {
    background-color: red;
}
.popup.green {
    background-color: green;
}
</style>
