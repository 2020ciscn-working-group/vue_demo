import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import LoginSubmit from './components/LoginSubmit'
import Manager from './components/privilegeManager/Manager'




Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/A',
      name:'Manager',
      component:Manager
    }
  ]
})


