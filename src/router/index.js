import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Winners from '../views/Winners.vue'
import Judges from '../views/Judges.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/winners',
    name: 'Winners',
    component: Winners
  },
  {
    path: '/judges',
    name: 'Judges',
    component: Judges
  }
]

const router = new VueRouter({
  routes
})

export default router