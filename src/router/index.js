import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import MoviesPage from '@/views/MoviesPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/movies',
    name: 'movies',
    component: MoviesPage
  },
  {
    path: '*',
    redirect: { name: 'home' }
  }
]

export const router = new VueRouter({
  mode: 'history',
  routes
})
