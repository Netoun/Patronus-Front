import Vue from 'vue'
import Router from 'vue-router'
import Explorer from '@/components/Explorer'
import Classement from '@/components/Classement'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
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
  }
  ]
})
