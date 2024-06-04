<template>
    <div>
            <nav>
                <div class="container">
                    <h3>MyClinic</h3>
                    
                    <ul id="nav__items">
                        <li><a href="#">Home</a></li>
                        <li><a href="#services">Serviços</a></li>
                        <li><a href="#doctor">Médicos</a></li>
                        <li><a href="/login" class="btn" ><i class='bx bxl-whatsapp' ></i>Login/Registo</a></li>
                    </ul>
        
                        <button id="open__nav-btn"><i class='bx bx-menu'></i></button>
                        <button id="close__nav-btn"><i class='bx bx-x' ></i></button>
                </div>
            </nav>
        <!-----------------END OF NAV MENU---------------->
            <header>
                <div class="container">
                    <div class="header__content">
                        <h1>Soluções de saúde completas para todos</h1>
                        <p>Possuimos os melhores protocolos em saúde.</p>
                    </div>
                    <div class="header__image">
                        <img src="../img/myclinic.png" alt="Header Image">
                    </div>
                </div>
            </header>
        
            <!---------END OF HEADER-------------------->    
            <section id="services">
                <h2>Nossos Serviços</h2>
                <p>Na MyClinic, temos orgulho em oferecer uma ampla gama de serviços de saúde para atender às suas necessidades.</p>
        
                <div class="container">
                    <article>
                        <i class='bx bxs-book-content'></i>
                        <div>
                           <h4>Consultas</h4> 
                           <small>Oferecemos consultas médicas personalizadas para atender às necessidades de saúde de cada paciente.</small>
                        </div>
                    </article>
                    <article>
                        <i class='bx bxs-book-content'></i>
                        <div>
                           <h4>Exames</h4> 
                           <small>Realizamos uma variedade de exames diagnósticos para ajudar a identificar e tratar condições de saúde de forma eficaz e eficiente.</small>
                        </div>
                    </article>
                    
                    <article>
                        <i class='bx bxs-book-content'></i>
                        <div>
                           <h4>Análises</h4> 
                           <small>Conduzimos uma gama de análises clínicas para monitorar e diagnosticar várias condições de saúde, garantindo um cuidado de saúde completo.</small>
                        </div>
                    </article>
                </div>
            </section>
        
        <!------------------END OF THE SERVICES------------------->
        <section id="doctor">
            <h2>Nossos Médicos</h2>
            <p>É com grande prazer que apresentamos a nossa dedicada equipe de médicos. Cada um deles é altamente qualificado e comprometido em fornecer o melhor cuidado possível aos nossos pacientes.</p>
            <div class="container">
                <article>
                    <div class="doctor__image">
                        <img src="../img/medica.jpg" alt="Médico 1">
                    </div>
                    <div class="doctor__details">
                        <h4>Drª. Ana Maia</h4>
                        <small>Psicólga</small>
                    </div>
                    <div class="doctor__socials">
                        <a href="https://linkedin.com" target="_blank"><img src="../img/linkedin.png" width="15px" height="15px"></a>
                    </div>
                </article>
        
                <article>
                    <div class="doctor__image">
                        <img src="../img/medica.jpg" alt="Médico 2">
                    </div>
                    <div class="doctor__details">
                        <h4>Drª. Ana Maia</h4>
                        <small>Psicólga</small>
                    </div>
                    <div class="doctor__socials">
                        <a href="https://linkedin.com" target="_blank"><img src="../img/linkedin.png" width="15px" height="15px"></a>
                    </div>
                    
                </article>
        
                <article>
                    <div class="doctor__image">
                        <img src="../img/medica.jpg" alt="Médico 3">
                    </div>
                    <div class="doctor__details">
                        <h4>Drª. Ana Maia</h4>
                        <small>Psicólga</small>
                    </div>
                    <div class="doctor__socials">
                        <a href="https://linkedin.com" target="_blank"><img src="../img/linkedin.png" width="15px" height="15px"></a>
                    </div>
                </article>
        
                <article>
                    <div class="doctor__image">
                        <img src="../img/medica.jpg" alt="Médico 4">
                    </div>
                    <div class="doctor__details">
                        <h4>Drª. Ana Maia</h4>
                        <small>Psicólga</small>
                    </div>
                    <div class="doctor__socials">
                        <a href="https://linkedin.com" target="_blank"><img src="../img/linkedin.png" width="15px" height="15px"></a>
                    </div>
                </article>
            </div>
        </section>
        <!------------------END OF THE DOCTORS------------------->  
        
        <section id="appointment">
            <div class="container">
                <div class="info">
                    <h2>Fala Conosco, queremos ouvir-te!</h2>
                    <p>is a long established fact that a reader will be distracted by the readable content of a page</p>
        
                    <article>
                            <i><img src="../img/info-icon.png" with="15px" height="15px"></i>
                        <div>
                            <h4>Médicos Experientes</h4>
                            <small>
                                is a long established fact that a reader will be distracted by the readable content of a page
                            </small>
                        </div>
                    </article>
        
                    <article>
                            <i><img src="../img/info-icon.png" with="15px" height="15px"></i>
                        <div>
                            <h4>Tecnologia Avançada</h4>
                            <small>
                                is a long established fact that a reader will be distracted by the readable content of a page
                            </small>
                        </div>
                    </article>
        
                    <article>
                            <i><img src="../img/info-icon.png" with="15px" height="15px"></i>
                        <div>
                            <h4>Emergência</h4>
                            <small>
                                is a long established fact that a reader will be distracted by the readable content of a page
                            </small>
                        </div>
                    </article>
                </div>
        
                <form action="#" method="POST">
                    <div class="form__group">
                        <label for="name">Nome</label>
                        <input type="text" placeholder="Digite seu nome" name="Nome do Paciente" id="name" required>
                    </div>
                    <div class="form__group">
                        <label for="email">Email</label>
                        <input type="email" placeholder="Digite seu email" name="email" id="email" required>
                    </div>
                    
                    <div class="form__group">
                        <label for="message">Mensagem</label>
                        <textarea name="Mensagem" id="message" rows="6" placeholder="Adicione uma mensagem" required></textarea>
                    </div>
                    <input type="submit" value="Enviar Mensagem" class="btn-primary">
                </form>
            </div>
        </section>
        <!------------------END OF THE APPOINTMENT------------------->     
        <footer>
            <div class="container">
                <article class="contact">
                    <div class="contact__items">
                        <i><img src="../img/icon-tlm.png" with="20px" height="20px"></i>
                        <h3>Contacto: +351 912 345 678</h3>
                    </div>
                    <div class="contact__items">
                        <i><img src="../img/email-icon.png" with="20px" height="20px"></i>
                        <h3>Email: apoio@myclinic.com</h3>
                    </div>
                </article>
                <article class="adress">
                    <i class='bx bx-home'><img src="../img/location-icon.png" with="20px" height="20px"></i>
                    <a href="https://www.google.com/maps" target="_blank"><h3>Rua da Clinica 34, Porto</h3></a>
                    
                    
                </article>
        
                <article>
                    <div class="footer__socials">
                        <a href="https://www.facebook.com/" target="_blank"><i><img src="../img/facebook.png" width="20px" height="20px"></i></a>
                        <a href="https://www.instagram.com/" target="_blank"><i><img src="../img/instagram.png" width="20px" height="20px"></i></a>
                        <a href="https://www.youtube.com/" target="_blank"><i><img src="../img/youtube.png" width="20px" height="20px"></i></a>
                        <a href="https://linkedin.com" target="_blank"><i><img src="../img/linkedin-white.png" width="20px" height="20px"></i></a>
                    </div> 
                </article>
            </div>

        </footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap");
* {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    list-style: none;
    text-decoration: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

body {
    font-family: Montserrat, sans-serif;
    line-height: 1.5;
    color: rgba(12, 3, 27, 0.7);
    background: rgba(76, 201, 240, 0.1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.container {
    width: 82%;
    margin: 0 auto;
}
img {
    display: block;
    width: 100%;
}
h1,
h2,
h3,
h4,
h5 {
    line-height: 1.2;
}
section {
    margin-top: 6rem;
}
section > h2 {
    text-align: center;
}
section > p {
    text-align: center;
    width: 42%;
    margin: 0.6rem auto 2.5rem;
}
.btn {
    display: block;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    padding: 0.75rem 1rem;
    border-radius: 0.4rem;
    background: #f72585;
    cursor: pointer;
    -webkit-transition: all 400ms ease;
    transition: all 400ms ease;
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    gap: 0.3rem;
}
.btn:hover {
    background: #f84c9b;
    -webkit-box-shadow: 0 1rem 1.6rem rgba(12, 3, 27, 0.15);
    box-shadow: 0 1rem 1.6rem rgba(12, 3, 27, 0.15);
}
.btn-primary {
    display: block;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    padding: 0.75rem 1rem;
    border-radius: 0.4rem;
    background: #480ca8;
    cursor: pointer;
    -webkit-transition: all 400ms ease;
    transition: all 400ms ease;
    color: #fff;
}
.btn-primary:hover {
    background: #580fce;
    -webkit-box-shadow: 0 1rem 1.6rem rgba(12, 3, 27, 0.15);
    box-shadow: 0 1rem 1.6rem rgba(12, 3, 27, 0.15);
}

nav {
    width: 100vw;
    height: 5rem;
    position: fixed;
    z-index: 10;
    display: -ms-grid;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg, #480ca8, #4cc9f0);
    color: #fff;
    -webkit-box-shadow: 0 1rem 1rem rgba(12, 3, 27, 0.1);
    box-shadow: 0 1rem 1rem rgba(12, 3, 27, 0.1);
}
nav h1,
nav h2,
nav h3,
nav h4,
nav h5 {
    color: #fff;
}
nav.window-scroll {
    background: #fff;
}
nav.window-scroll .container button {
    color: #0c031b;
}
nav.window-scroll .container a {
    color: #0c031b;
}
nav.window-scroll .container a > h3 {
    color: #0c031b;
}
nav.window-scroll .container a.btn {
    color: #fff;
}
nav .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
nav .container ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 3rem;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
nav .container button {
    display: none;
}
nav .container a {
    color: #fff;
    font-weight: 400;
    font-size: 0.9rem;
}
nav .container .nav__logo {
    color: #fff;
}

header {
    background: linear-gradient(135deg, #480ca8, #4cc9f0);
    color: #fff;
    height: 100vh;
    display: -ms-grid;
    display: grid;
    place-items: center;
    overflow: hidden;
}
header h1,
header h2,
header h3,
header h4,
header h5 {
    color: #fff;
}
header .container {
    margin-top: 3rem;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 46% 46%;
    grid-template-columns: 46% 46%;
    gap: 8%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
header .container .header__content h1 {
    font-size: 3.5rem;
    line-height: 1.1;
    letter-spacing: -3px;
    font-weight: 300;
}
header .container .header__content p {
    margin: 1rem 0 2rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.1rem;
}


#services .container {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (1fr) ;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}
#services article {
    background: linear-gradient(135deg, #480ca8, #4cc9f0);
    color: #fff;
    padding: 1.5rem;
    border-radius: 1rem;
    display: Flex;
    gap: 1.5rem;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    -webkit-transition: all 400ms ease;
    transition: all 400ms ease;
}
#services article h1,
#services article h2,
#services article h3,
#services article h4,
#services article h5 {
    color: #fff;
}
#services article i {
    font-size: 1.7rem;
}
#services article:hover {
    margin-top: -0.5rem;
}

#doctor .container {
    width: 68%;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (1fr) ;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
}
#doctor .container article {
    background: #fff;
    border-radius: 1rem;
    -webkit-box-shadow: 0 1.5rem 1.5rem rgba(12, 3, 27, 0.1);
    box-shadow: 0 1.5rem 1.5rem rgba(12, 3, 27, 0.1);
    position: relative;
    -webkit-transition: all 700ms ease;
    transition: all 700ms ease;
}
#doctor .container article:hover {
    -webkit-box-shadow: none;
    box-shadow: none;
}
#doctor .container article:hover .doctor__image::before {
    left: 0;
    border-radius: 1rem 1rem 0 0;
}
#doctor .container article:hover .doctor__socials {
    opacity: 1;
    visibility: visible;
}
#doctor .container article .doctor__image {
    height: 20rem;
    position: relative;
    border-radius: 1rem 1rem 0 0;
    overflow: hidden;
}
#doctor .container article .doctor__image::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: -100%;
    background: linear-gradient(135deg, rgba(72, 12, 168, 0.8), rgba(76, 201, 240, 0.8));
    border-radius: 50%;
    -webkit-transition: all 1s ease;
    transition: all 1s ease;
}
#doctor .container article .doctor__details {
    margin: 1.5rem 0;
    text-align: center;
}
#doctor .container article .doctor__socials {
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    gap: 1rem;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all 1s 400ms ease;
    transition: all 1s 400ms ease;
}
#doctor .container article .doctor__socials a {
    background: #fff;
    color: #480ca8;
    padding: 0.4rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 0.8rem;
    border-radius: 50%;
    -webkit-transition: all 400ms ease;
    transition: all 400ms ease;
}
#doctor .container article .doctor__socials a:hover {
    background: #480ca8;
    color: #fff;
}

#appointment .container {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 47% 47%;
    grid-template-columns: 47% 47%;
    gap: 6%;
}
#appointment .container .info p {
    margin: 0.5rem 0 2rem;
}
#appointment .container .info article {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
}
#appointment .container .info article small {
    margin-top: 0.4rem;
    display: block;
}
#appointment .container form {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    gap: 1.4rem;
}
#appointment .container form .form__group label {
    font-size: 0.85rem;
    margin-bottom: 0.4rem;
    display: inline-block;
    font-weight: 600;
}
#appointment .container form .form__group input,
#appointment .container form .form__group textarea,
#appointment .container form .form__group select {
    background: #fff;
    padding: 0.85rem 1rem;
    display: block;
    width: 100%;
    border-radius: 0.4rem;
    resize: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

footer {
    background: #0c031b;
    color: rgba(255, 255, 255, 0.7);
    padding-top: 4rem;
    margin-top: 4rem;
}
footer .container {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (1fr) ;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;
    font-size: 0.85rem;
    padding-bottom: 3rem;
}
footer .container a {
    color: rgba(255, 255, 255, 0.7);
    -webkit-transition: all 400ms ease;
    transition: all 400ms ease;
}
footer .container a:hover {
    color: #fff;
}
footer .container .contact {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
footer .container .contact .footer__logo {
    padding-bottom: 2rem;
}
footer .container .contact .contact__items {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1rem;
}
footer .container .adress {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
}
footer .container .footer__socials {
    padding-bottom: 1rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 1rem;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
footer .copyright {
    text-align: center;
    font-size: 0.85rem;
    padding: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
}
</style>