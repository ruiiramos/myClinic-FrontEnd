import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from '../views/LandingPageView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DadosMarcacaoView from '../views/DadosMarcacaoView.vue'
import EspecialidadesView from '../views/EspecialidadesView.vue'
import MedicosView from '../views/MedicosView.vue'
import UserView from '../views/UserView.vue'
import HomePageView from '../views/HomePageView.vue'
import AgendaView from '../views/AgendaView.vue'
import DesmarcacaoView from '../views/DesmarcacaoView.vue'
import ConfirmarEmailView from '../views/ConfirmarEmailView.vue'
import ForgotPasswordView from '../views/ForgotPasswordView.vue'

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
      component: DadosMarcacaoView,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/especialidades',
      name: 'especialidades',
      component: EspecialidadesView,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/medicos',
      name: 'medicos',
      component: MedicosView,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/home',
      name: 'home',
      component: HomePageView,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/user',
      name: 'user',
      component: UserView,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/agenda',
      name: 'agenda',
      component: AgendaView,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/desmarcacao',
      name: 'desmarcacao',
      component: DesmarcacaoView,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/confirmaremail',
      name: 'confirmaremail',
      component: ConfirmarEmailView
    },
    {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component: ForgotPasswordView
    },

  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && sessionStorage.jwt == undefined) {
    next("/login")
  } else {
    next()
  }
})

export default router
