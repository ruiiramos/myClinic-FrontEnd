import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from '../views/LandingPageView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DadosMarcacaoView from '../views/DadosMarcacaoView.vue'
import EspecialidadesView from '../views/EspecialidadesView.vue'
import MedicosView from '../views/MedicosView.vue'
import UserView from '../views/UserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: LandingPageView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/dadosmarcacao',
      name: 'dadosmarcacao',
      component: DadosMarcacaoView
    },
    {
      path: '/especialidades',
      name: 'especialidades',
      component: EspecialidadesView
    },
    {
      path: '/medicos',
      name: 'medicos',
      component: MedicosView
    },
    {
      path: '/home',
      name: 'home',
      component: HomePageView
    },
    {
      path: '/user',
      name: 'user',
      component: UserView
    },
  ]
})

export default router
