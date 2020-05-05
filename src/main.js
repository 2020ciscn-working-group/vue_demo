import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/font/iconfont.css'
import './plugins/element.js'
import '../src/cookieUtil'

import { Tabbar, TabbarItem, ContactCard, ContactList, ContactEdit,Popup,Col,Row, Icon,NavBar,Button,Notify } from 'vant';
Vue.use(Notify)
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Col);
Vue.use(Row);
Vue.use(Popup)
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(ContactCard);
Vue.use(ContactList);
Vue.use(ContactEdit);
Vue.use(Button);


// Vue.use(MintUI)
// Vue.prototype.$axios = axios
// Vue.use(axios)
Vue.prototype.$http = axios
Vue.use(ElementUI)


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => { 
	//console.log(to, from, next) //
	if(to.name=='/'){ //本身就是登录页，就不用验证登录session了
		next()
		return
	}
	// if(!sessionStorage.getItem('username')){ //没有登录/登录过期
	// 	next({path:'/', query:{redirect:to.path}})
  // }
  else{
		next()
	}
})
