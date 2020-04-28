import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// import Vueaxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {Swipe,Header,SwipeItem,Search,Cell} from 'mint-ui'
import './assets/font/iconfont.css'
import './plugins/element.js'


import { Tabbar, TabbarItem, ContactCard, ContactList, ContactEdit,Popup,Col,Row, Icon,NavBar,Button } from 'vant';
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
Vue.component(Cell.name, Cell);
Vue.component(Swipe.name, Swipe);
Vue.component(Header.name, Header);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Search.name, Search);

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
