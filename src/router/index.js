import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Manager from '../components/privilegeManager/Manager'


Vue.use(Router)

export default new Router({
  // mode: 'history',
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
router.beforeEach((to, from, next) => { 
	//console.log(to, from, next) //
	if(to.name=='Login'){ //本身就是登录页，就不用验证登录session了
		next()
		return
	}
	if(!sessionStorage.getItem('username')){ //没有登录/登录过期
		next({path:'/', query:{redirect:to.path}})
	}else{
		next()
	}
})

