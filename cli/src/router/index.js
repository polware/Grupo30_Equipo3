import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Home
  },
  {
    path: '/quienes',
    name: 'Quienes',    
    component: () => import(/* webpackChunkName: "quienes" */ '../views/Quienes.vue')
  },
  {
    path: '/contactenos',
    name: 'Contactenos',    
    component: () => import(/* webpackChunkName: "contactenos" */ '../views/Contactenos.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
    props: true
  },
  {
    path: '/recuperarcuenta',
    name: 'RecuperarCuenta',
    component: () => import(/* webpackChunkName: "recuperarcuenta" */ '../views/RecuperarCuenta.vue')
  },
  {
    path: '/crearcuenta',
    name: 'CrearCuenta',
    component: () => import(/* webpackChunkName: "crearcuenta" */ '../views/CrearCuenta.vue')
  },
  {
    path: '/nuevopassword',
    name: 'NuevoPassword',
    component: () => import(/* webpackChunkName: "nuevopassword" */ '../views/NuevoPassword.vue'),
    props: true
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "test" */ '../views/Test.vue'),
    props: true
  },  
  {
    path: '/actualizardatos',
    name: 'ActualizarDatos',
    component: () => import(/* webpackChunkName: "actualizardatos" */ '../views/ActualizarDatos.vue'),
    props: true
  },
  {
    path: '/borrarperfil',
    name: 'BorrarPerfil',
    component: () => import(/* webpackChunkName: "borrarperfil" */ '../views/BorrarPerfil.vue'),
    props: true
  },
  {
    path: '/resultados',
    name: 'Resultados',
    component: () => import(/* webpackChunkName: "resultados" */ '../views/Resultados.vue'),
    props: true
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
