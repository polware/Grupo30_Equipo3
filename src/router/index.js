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
    path: '/estudiante',
    name: 'Estudiante',
    component: () => import(/* webpackChunkName: "estudiante" */ '../views/Estudiante.vue')
  },
  {
    path: '/recuperar',
    name: 'Recuperar',
    component: () => import(/* webpackChunkName: "recuperar" */ '../views/Recuperar.vue')
  },
  {
    path: '/crearcuenta',
    name: 'CrearCuenta',
    component: () => import(/* webpackChunkName: "crearcuenta" */ '../views/CrearCuenta.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "test" */ '../views/Test.vue')
  },
  {
    path: '/eliminar',
    name: 'Eliminar',
    component: () => import(/* webpackChunkName: "eliminar" */ '../views/Eliminar.vue')
  },
  {
    path: '/actualizar',
    name: 'Actualizar',
    component: () => import(/* webpackChunkName: "Actualizar" */ '../views/Actualizar.vue')
  },
  {
    path: '/editar',
    name: 'Editar',
    component: () => import(/* webpackChunkName: "Editar" */ '../views/Editar.vue')
  },
  {
    path: '/prueba',
    name: 'Prueba',
    component: () => import(/* webpackChunkName: "Prueba" */ '../views/Prueba.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
