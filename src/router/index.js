import Vue from 'vue'
import Router from 'vue-router'
import Explorer from '@/components/Explorer'
import Classement from '@/components/Classement'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Home from '@/components/Home'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/explorer',
    name: 'Explorer',
    component: Explorer
  },
  {
    path: '/classement',
    name: 'Classement',
    component: Classement
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signin',
    name: 'Signup',
    component: Signup
  },
  {
    path: '*',
    redirect: '/'
  }
  ]
})
