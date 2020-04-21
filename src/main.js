import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// import Vueaxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {Tabbar,Swipe,Header,Button,TabItem,SwipeItem,Search,Cell} from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/font/iconfont.css'
import './plugins/element.js'

Vue.component(Cell.name, Cell);
Vue.component(Swipe.name, Swipe);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Search.name, Search);

// Vue.use(MintUI)
// Vue.prototype.$axios = axios
// Vue.use(axios)
Vue.prototype.$ajax = axios
Vue.use(ElementUI)


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
