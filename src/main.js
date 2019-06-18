import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vant from 'vant';
import public_c from './public_c.js'
import 'vant/lib/index.css';
import './assets/css/base.css'
import './assets/css/iconfont.css'
import './assets/css/style.css'
import VueWechatTitle from 'vue-wechat-title'; 

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(VueWechatTitle)
Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(public_c);
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
